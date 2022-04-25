from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(User)
admin.site.register(App_Course)
admin.site.register(Tutorial)
#admin.site.register(Takes)
admin.site.register(Reward)

