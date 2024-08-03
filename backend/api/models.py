from django.db import models

class Entry(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    featured_image_url = models.URLField(max_length=200)
    link = models.URLField(max_length=200)
    submit_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title