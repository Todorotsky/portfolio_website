from django.contrib import admin
from .models import Entry, BlogPost, Newsletter
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.conf import settings

# Function to send newsletters via email
def send_newsletter(modeladmin, request, queryset):
    for newsletter in queryset:
        subject = f"Newsletter on {newsletter.topic}"
        context = {
            'subject': newsletter.topic,
            'message': newsletter.content
        }
        html_content = render_to_string('newsletter_email.html', context)
        email = EmailMessage(
            subject,
            body=html_content,
            from_email=settings.EMAIL_HOST_USER,
            to=[],  # List of recipients can be dynamically set here if needed
            bcc=['onethoughtfuljourney@gmail.com']  # Update this to the list of recipients
        )
        email.content_subtype = 'html'  # This is required because we need to send HTML content
        email.send()

send_newsletter.short_description = "Send selected newsletters via email"

@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('topic', 'created_at')  # Customize the columns displayed in the admin list view
    search_fields = ('topic',)  # Add a search bar to filter by topic
    ordering = ('-created_at',)  # Order newsletters by creation date, newest first
    actions = [send_newsletter]  # Add the send_newsletter action to the admin

admin.site.register(Entry)
admin.site.register(BlogPost)
