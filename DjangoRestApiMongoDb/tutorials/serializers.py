from rest_framework import serializers 
from tutorials.models import Event
 
 
class TutorialSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Event
        fields = ('id',
                  'title',
                  'description',
                  'date')