from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinLengthValidator
from .managers import *

# Create your models here.

class Reward(models.Model):
    code=models.CharField(_("reward code"), max_length=4, unique=True)
    description=models.CharField(_("reward description"), max_length=50)
    points_req=models.IntegerField(_("points requirement"))

    def __str__(self) -> str:
        return self.code

class App_Course(models.Model):
    name=models.CharField(_("app course name"), max_length=40)

    def __str__(self) -> str:
        return self.name

class Tutorial(models.Model):
    name=models.CharField(_("name"), max_length=40)
    max_points=models.IntegerField(_("maximum points"), default=0)
    app=models.ForeignKey(App_Course, on_delete=models.CASCADE, default=None)

    def __str__(self) -> str:
        return self.name

class User(AbstractUser):
    uername = models.CharField(_("username"), max_length=20,null=True,blank=True)
    phone=models.CharField(_("phone"), max_length=10, unique=True)
    langs=[
        ('English', 'English'),
        ('Hindi', 'Hindi'),
        ('Gujrati', 'Gujrati'),
    ]
    language=models.CharField(_("language"), max_length=20, default='English', choices=langs)
    points=models.IntegerField(_("points"), default=0)
    referrer=models.EmailField(blank=True, null=True)
    #is_active = models.BooleanField(_("active"), default=True)
    # is_staff = models.BooleanField(_("staff status"), default=False)
    # is_superuser = models.BooleanField(_("is superuser"), default=False)
    # is_admin = models.BooleanField(_("is admin"), default=False)

    rewards_availed=models.ManyToManyField(Reward, related_name="reward_availed", blank=True)
    tutorials_taken=models.ManyToManyField(Tutorial, through='Takes')

    USERNAME_FIELD="phone"
    
   

    def __str__(self) -> str:
        return self.phone

class Takes(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    tutorial=models.ForeignKey(Tutorial, on_delete=models.CASCADE)
    tutorial_completed=models.BooleanField(default=False)
    tested=models.BooleanField(default=False)
    points_gained=models.IntegerField(default=0)

    def __str__(self) -> str:
        return (self.user, self.tutorial)
