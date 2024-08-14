from django.contrib import admin
from .models import Entry, BlogPost, Newsletter

@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('topic', 'created_at')  # Customize the columns displayed in the admin list view
    search_fields = ('topic',)  # Add a search bar to filter by topic
    ordering = ('-created_at',)  # Order newsletters by creation date, newest first

admin.site.register(Entry)
admin.site.register(BlogPost)
