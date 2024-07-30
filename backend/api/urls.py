from django.urls import path
from .views import EntryList

urlpatterns = [
    path('entries/', EntryList.as_view(), name='entry-list'),
]
