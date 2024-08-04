# backend/api/urls.py

from django.urls import path, include
from .views import upload_form, EntryList, upload_blog_post, blog_post_list, BlogPostDetailView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from .views import BlogPostViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'blogposts', BlogPostViewSet)

urlpatterns = [
    path('upload/', upload_form, name='upload_form'),
    path('entries/', EntryList.as_view(), name='entry-list'),
    path('blog/upload/', upload_blog_post, name='upload_blog_post'),
    path('blog/', blog_post_list, name='blog_post_list'),
    path('blog/<int:pk>/', BlogPostDetailView.as_view(), name='blog_post_detail'),  # Detail view for blog post
    path('', include(router.urls)),  # Register router URLs
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
