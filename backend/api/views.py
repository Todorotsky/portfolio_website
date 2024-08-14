# backend/api/views.py

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required, user_passes_test
from rest_framework import generics, viewsets
from .models import Entry, BlogPost, Newsletter
from .forms import EntryForm, BlogPostForm
from .serializers import EntrySerializer, BlogPostSerializer, NewsletterSerializer
from openai import OpenAI
from django.conf import settings

# View to handle the form submission for entries
def upload_form(request):
    if request.method == 'POST':
        form = EntryForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('upload_form')
    else:
        form = EntryForm()
    return render(request, 'portfolio/upload_form.html', {'form': form})

# DRF view to list entries
class EntryList(generics.ListAPIView):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer

# View to handle the form submission for blog posts
@login_required
def upload_blog_post(request):
    if request.method == 'POST':
        form = BlogPostForm(request.POST)
        if form.is_valid():
            blog_post = form.save(commit=False)
            blog_post.author = request.user
            blog_post.save()
            return redirect('blog_post_list')  # Redirect to a page that lists all blog posts
    else:
        form = BlogPostForm()
    return render(request, 'portfolio/upload_blog.html', {'form': form})

# View to list all blog posts
def blog_post_list(request):
    posts = BlogPost.objects.all().order_by('-created_at')
    return render(request, 'portfolio/blog_post_list.html', {'posts': posts})

# DRF viewset for blog posts
class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all().order_by('-created_at')
    serializer_class = BlogPostSerializer

# DRF view for individual blog post details
class BlogPostDetailView(generics.RetrieveAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

class NewsletterViewSet(viewsets.ModelViewSet):
    queryset = Newsletter.objects.all().order_by('-created_at')
    serializer_class = NewsletterSerializer


def is_admin(user):
    return user.is_superuser

@user_passes_test(is_admin)
def newsletter_form(request):
    return render(request, 'newsletter_form.html')

@user_passes_test(is_admin)
def generate_newsletter(request):
    if request.method == 'POST':
        topic = request.POST.get('topic')
        api_key = settings.OPENAI_API_KEY
        client = OpenAI(api_key=api_key)
        messages = [
            {"role": "system", "content": "You are a helpful assistant tasked with writing detailed newsletters."},
            {"role": "user", "content": f"Please write a detailed newsletter about {topic}."}
        ]
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            temperature=0,
        )
        content = response.choices[0].message.content
        Newsletter.objects.create(topic=topic, content=content)
        return render(request, 'generated_newsletter.html', {'topic': topic, 'content': content})
    return redirect('newsletter_form')