from django.urls import path
from base.views import product_views as views

urlpatterns = [

    path('', views.getProducts, name='products'),
    path('<str:pk>', views.getProduct, name='prodcut'),
    path('/addproduct', views.AddProduct, name='add-product'),


]
