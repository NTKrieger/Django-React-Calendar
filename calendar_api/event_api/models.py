import django
from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=300,blank=True, default='')
    date = models.DateField(default=django.utils.timezone.now)
