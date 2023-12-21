from rest_framework import serializers
from base.models import Product
from dataclasses import field
from pyexpat import model
from Accounts.models import Account
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializers(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)

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
