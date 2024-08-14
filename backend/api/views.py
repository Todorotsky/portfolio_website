# backend/api/views.py

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from rest_framework import generics, viewsets
from .models import Entry, BlogPost
from .forms import EntryForm, BlogPostForm
from .serializers import EntrySerializer, BlogPostSerializer

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
