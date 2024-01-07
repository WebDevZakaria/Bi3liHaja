from django.contrib import admin

# Register your models here.
from .models import Product, Wilaya,Order,OrderItem,ShippingAddress,Category

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Wilaya)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
