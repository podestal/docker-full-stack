from rest_framework import serializers
from . import models

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = '__all__'

class CreateTodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = ['title']