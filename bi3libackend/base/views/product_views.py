from django.shortcuts import render
from rest_framework.response import Response
from base.serializers import ProductSerializers,PreproductSerializers
from rest_framework.decorators import api_view
from base.models import Product,Preproduct
from rest_framework import status


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



@api_view(['POST'])

def AddProduct(request):

    data = request.data
    user = request.user

    try:

        preproduct = Preproduct.objects.create(

            user=user,
            name = data['name'],
            image=data['image'],
            brand=data['brand'],
            category =data['category'],
            description = data['description'],
            wilaya = data['wilaya'],
            yourAdresss = data['yourAdresss'],
            price = data['price'],
            countInStock = 1,
        )

        serializer = PreproductSerializers(preproduct, many=False)

        return Response(serializer.data)

    except:

        message = {'detail': 'Something Went Wrong'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)



