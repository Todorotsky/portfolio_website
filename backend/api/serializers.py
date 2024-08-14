# backend/api/serializers.py

from rest_framework import serializers
from .models import Entry, BlogPost

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = '__all__'

class BlogPostSerializer(serializers.ModelSerializer):
    link = serializers.SerializerMethodField()
    author_name = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = '__all__'

    def get_link(self, obj):
        # Generate the link to the frontend view of the blog post
        request = self.context.get('request')
        if request is not None:
            return request.build_absolute_uri(f'http://localhost:3000/blog/{obj.id}/')  # Adjust to match your frontend route
        return f'http://localhost:3000/blog/{obj.id}/'  # Adjust to match your frontend route
    def get_author_name(self, obj):
        return obj.get_author_name()
