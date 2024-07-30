from django.urls import path
from .views import upload_form, EntryList

urlpatterns = [
    path('upload/', upload_form, name='upload_form'),
    path('entries/', EntryList.as_view(), name='entry-list'),
]
