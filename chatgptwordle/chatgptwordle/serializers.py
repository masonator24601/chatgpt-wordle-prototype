from rest_framework import serializers
from .models import Response

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = ('word', 'content')
