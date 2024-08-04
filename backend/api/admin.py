from django.contrib import admin
from .models import Entry, BlogPost  # Import your BlogPost model

admin.site.register(Entry)
admin.site.register(BlogPost)  # Register BlogPost model
