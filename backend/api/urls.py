from django.urls import path
from . import views

urlpatterns = [
    path('your-endpoint/', views.YourView.as_view(), name='your-endpoint'),
]
