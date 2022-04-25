
from numpy import apply_along_axis
from rest_framework import serializers

from users.models import *

class RewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reward
        fields = ['code','description','points_req']
        
  
class TutorialSerializer(serializers.ModelSerializer):
    # app=AppSerializer(many=True,read_only=True)
    class Meta:
        model = Tutorial
        fields ="__all__"
        
class AppSerializer(serializers.ModelSerializer):
    tutorial=TutorialSerializer(many=True,read_only=True)
    class Meta:
        model = App_Course
        fields = ('id', 'name', 'tutorial')
        
      
        
        
        
class RegisterSerializer(serializers.ModelSerializer):
    phone = serializers.CharField(
        style={'input_type': 'phone'}, write_only=True)

    class Meta:
        model = User
        fields = "__all__"

    def save(self):
        user = User(
            phone=self.validated_data['phone'],
           
        )
      
        user.save()
        return user
        
        
class TakesSerializer(serializers.ModelSerializer):
    tutorial=TutorialSerializer(many=True,read_only=True)
    user=RegisterSerializer(many=True,read_only=True)
    class Meta:
        model = Takes
        fields ="__all__"
