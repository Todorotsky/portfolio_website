from django.urls import path
from .views import upload_form, EntryList
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('upload/', upload_form, name='upload_form'),
    path('entries/', EntryList.as_view(), name='entry-list'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)