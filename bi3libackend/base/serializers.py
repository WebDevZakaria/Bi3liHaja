from rest_framework import serializers
from base.models import Product, ShippingAddress, Order, OrderItem
from dataclasses import field
from pyexpat import model
from Accounts.models import Account
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializers(serializers.ModelSerializer):

    name = serializers.SerializerMethodField(read_only=True)
    
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:

        model = Account
        
        fields = ['username','last_name', 'name', 'email','phone_number','wilaya', 'isAdmin']

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name


class UserSerializerWithToken(UserSerializers):

    token = serializers.SerializerMethodField(read_only=True)
    class Meta:

        model = Account
        fields = ['id', 'username', 'email', 'name','last_name','phone_number','wilaya', 'isAdmin', 'token']
        
    def get_token(self, obj):

        token = RefreshToken.for_user(obj)

        return str(token.access_token)


class ProductSerializers(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'


class ShippinAdressSerializers(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'


class OrderItemSerializers(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializers(serializers.ModelSerializer):

    orderItems = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_orderItems(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemSerializers(items, many=True)
        return serializer.data

    

    def get_user(self, obj):

        user = obj.user

        serializer = UserSerializers(user, many=False)

        return serializer.data
