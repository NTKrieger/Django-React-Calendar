from django.urls import re_path
from event_api import views 
 
urlpatterns = [ 
    re_path(r'^events$', views.events),
    re_path(r'^events/(?P<pk>[0-9]+)$', views.event_detail),
]
