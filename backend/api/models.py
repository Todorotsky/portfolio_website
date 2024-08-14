from django.db import models
from django.contrib.auth.models import User

class Entry(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    featured_image_url = models.URLField(max_length=300)
    link = models.URLField(max_length=300)
    submit_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    summary = models.TextField()
    featured_image_url = models.URLField(blank=True, null=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    likes = models.IntegerField(default=0)
    comments = models.TextField(blank=True, null=True)  # Simplified for demonstration purposes

    def __str__(self):
        return self.title
    def get_author_name(self):
        return self.author.get_full_name() or self.author.username
