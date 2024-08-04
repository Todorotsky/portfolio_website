from django import forms
from .models import Entry
from .models import BlogPost

class EntryForm(forms.ModelForm):
    class Meta:
        model = Entry
        fields = ['title', 'description', 'featured_image_url', 'link']

class BlogPostForm(forms.ModelForm):
    class Meta:
        model = BlogPost
        fields = ['title', 'summary', 'featured_image_url', 'content']