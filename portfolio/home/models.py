from django.db import models


# Create your models here.
class cardentry(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(null=False, blank=False)
    link = models.TextField(null=False, blank=False)
    featured_image = models.ImageField(upload_to='static/submitted', null=True, blank=True)
    submit_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title + " " + str(self.submit_date)


    class Meta:
        verbose_name_plural = "card entries"
        ordering = ['-submit_date']