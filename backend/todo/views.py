from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from . import models
from . import serializers

class TodoViewSet(ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer