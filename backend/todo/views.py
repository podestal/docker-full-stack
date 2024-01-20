from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from . import models
from . import serializers

class TodoViewSet(ModelViewSet):
    queryset = models.Todo.objects.all()
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return serializers.CreateTodoSerializer
        return serializers.TodoSerializer