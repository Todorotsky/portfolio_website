from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from rest_framework import generics
from .models import Entry
from .forms import EntryForm
from .serializers import EntrySerializer

@login_required
def upload_form(request):
    if request.method == 'POST':
        form = EntryForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('upload_form')
    else:
        form = EntryForm()
    return render(request, 'portfolio/upload_form.html', {'form': form})

class EntryList(generics.ListAPIView):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
