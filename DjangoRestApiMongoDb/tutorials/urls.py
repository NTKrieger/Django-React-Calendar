from django.conf.urls import url 
from tutorials import views 
 
urlpatterns = [ 
    url(r'^events$', views.tutorial_list),
    url(r'^events/(?P<pk>[0-9]+)$', views.tutorial_detail)
]