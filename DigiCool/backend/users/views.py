# from django.shortcuts import render
from users.models import *

from users.serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser



# class Tutorial(APIView):
#     def get(self,request):
#       try:
#         tutorial=Tutorial.objects.all()
#         serializer=TutorialSerializer(tutorial,many=True)
#         return Response(serializer.data)
#       except:
#           return Response ( {"error": "not found"}, status=status.HTTP_404_NOT_FOUND )


#     def post(self,request):
#          serializer=TutorialSerializer(data=request.data)
#          if serializer.is_valid():
#              serializer.save()
#              return Response(serializer.data)
#          else:
#              return Response(serializer.errors)


# class TutorialDetails(APIView):
#      def get(self,request,pk):
#         try:
#              tutorial=Tutorial.objects.get(pk=pk)
#         except TutorialSerializer.DoesNotExist:
#             return Response({"error":"not found"},status=status.HTTP_404_NOT_FOUND)
#         serializer=TutorialSerializer(tutorial)
#         return Response(serializer.data)   

#      def put(self,request,pk):
#          tutorial = Tutorial.objects.get ( pk=pk )
#          serializer=AppSerializer(tutorial,data=request.data)
#          if serializer.is_valid():
#                  serializer.save()
#                  return Response(serializer.data)
#          else:
#             return Response ( {"error": "not found"}, status=status.HTTP_404_NOT_FOUND )


#      def delete(self, request, pk):
#             tutorial = Tutorial.objects.get ( id=pk )
#             tutorial.delete()
#             return Response ( {"error": "not found"}, status=status.HTTP_404_NOT_FOUND )




# @csrf_exempt
# def app_list(request):
#     """
#     List all code snippets, or create a new snippet.
#     """
#     if request.method == 'GET':
#         app = App_Course.objects.all()
#         serializer = AppSerializer(app, many=True)
#         return JsonResponse(serializer.data, safe=False)

#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = AppSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)
    
# @csrf_exempt
# def app_detail(request, pk):

#     try:
#         app_detail = App_Course.objects.get(pk=pk)
#     except App_Course.DoesNotExist:
#         return HttpResponse(status=404)

#     if request.method == 'GET':
#         serializer = AppSerializer(app_detail)
#         return JsonResponse(serializer.data)

#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = AppSerializer(app_detail, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors, status=400)

#     elif request.method == 'DELETE':
#         app_detail.delete()
#         return HttpResponse(status=204)





@csrf_exempt
def app_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        app = App_Course.objects.all()
        serializer = AppSerializer(app, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = AppSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    
@csrf_exempt
def app_detail(request, pk):

    try:
        app_detail = App_Course.objects.get(pk=pk)
    except App_Course.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = AppSerializer(app_detail)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = AppSerializer(app_detail, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        app_detail.delete()
        return HttpResponse(status=204)
    
    
    

@csrf_exempt
def tutorial_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        tutorial = Tutorial.objects.all()
        serializer = TutorialSerializer(tutorial, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TutorialSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    
@csrf_exempt
def tutorial_detail(request, pk):

    try:
        tutorial_detail = Tutorial.objects.get(pk=pk)
    except App_Course.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TutorialSerializer(app_detail)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TutorialSerializer(tutorial_detail, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        tutorial_detail.delete()
        return HttpResponse(status=204)