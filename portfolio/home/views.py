from django.shortcuts import render, redirect
from .models import cardentry
import os


# Create your views here.
def home(request):
    entries = cardentry.objects.all().order_by('-submit_date')
    context = {'entries': entries}
    return render(request, 'home.html', context)


def submit(request):
    entries = cardentry.objects.all().order_by('-submit_date')
    context = {'entries': entries}


    if request.method == "POST":
        title = request.POST['title']
        description = request.POST['description']
        link = request.POST['link']
        featured_image = None


        if 'featured_image' in request.FILES:
            featured_image = request.FILES['featured_image']
        else:
            pass


        new_entry = cardentry(title=title, description=description, link=link, featured_image=featured_image)
        new_entry.save()


        return redirect('home')
    else:
        return render(request, 'submit.html', context)
