from django.db import models

class Response(models.Model):
  word = models.CharField(max_length=5)
  content = models.CharField(max_length=4096)

