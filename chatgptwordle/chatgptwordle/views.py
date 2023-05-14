from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from rest_framework import viewsets
from .serializers import ResponseSerializer
from .models import Response

def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())

class ResponseView(viewsets.ModelViewSet):
    serializer_class = ResponseSerializer
    queryset = Response.objects.all()
