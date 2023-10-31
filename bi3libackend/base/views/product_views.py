from django.shortcuts import render
from rest_framework.response import Response
from base.serializers import ProductSerializers
from rest_framework.decorators import api_view
from base.models import Product

# Create your views here.

@api_view(['GET'])
def getProducts(request):

    product = Product.objects.all()

    serializers = ProductSerializers(product,many=True)

    return Response(serializers.data)


@api_view(['GET'])
def getProduct(request, pk):

    product = Product.objects.get(_id=pk)

    serializers = ProductSerializers(product, many=False)

    return Response(serializers.data)
