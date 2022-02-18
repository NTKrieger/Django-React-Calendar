from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from event_api.models import Event
from event_api.serializers import EventSerializer


@api_view(['GET', 'POST'])
def events(request):
    '''GET/events and POST/events are handled here'''
    if request.method == 'GET':
        event_list = Event.objects.all() 
        event_serializer = EventSerializer(event_list, many=True)
        return JsonResponse(event_serializer.data, safe=False)
    if request.method == 'POST':
        event_data = JSONParser().parse(request)
        event_serializer = EventSerializer(data=event_data)
        if event_serializer.is_valid():
            event_serializer.save()
            return JsonResponse(event_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(event_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return JsonResponse({}, status=status.HTTP_404_NOT_FOUND)
 
@api_view(['PUT', 'DELETE'])
def event_detail(request, pk):
    '''PUT/events/:pk and DELETE/events/:pk are handled here'''
    if request.method == 'DELETE':
        try:
            event = Event.objects.get(pk=pk)
            event.delete() 
            return JsonResponse({'message': 'Event was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        except Event.DoesNotExist: 
            return JsonResponse({'message': 'The specified event does not exist'}, status=status.HTTP_404_NOT_FOUND) 
    if request.method == 'PUT': 
        event_data = JSONParser().parse(request) 
        event_serializer = EventSerializer(event, data=event_data) 
        if event_serializer.is_valid(): 
            event_serializer.save() 
            return JsonResponse(event_serializer.data) 
        return JsonResponse(event_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return JsonResponse({}, status=status.HTTP_404_NOT_FOUND)
