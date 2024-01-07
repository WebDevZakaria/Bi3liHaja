from django.db import models

#from tokenize import blank_re


from Accounts.models import Account


# Create your models here.



class Wilaya(models.Model):

    name = models.CharField(max_length=200, null=True, blank=True)
    
    matricule=models.IntegerField()

    createdAt = models.DateTimeField(auto_now_add=True)

    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):

        return self.name


class Category(models.Model):

    name = models.CharField(max_length=200, null=True, blank=True)
    
    createdAt = models.DateTimeField(auto_now_add=True)

    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):

        return self.name






class Product(models.Model):

    user = models.ForeignKey(Account, on_delete=models.SET_NULL, null=True)

    name = models.CharField(max_length=200, null=True, blank=True)

    image = models.ImageField(null=True, blank=True, default='/tail.jpg')

    brand = models.CharField(max_length=200, null=True, blank=True)

    category = models.ForeignKey(Category,on_delete=models.SET_NULL, null=True)

    description = models.TextField(null=True, blank=True)

    wilaya = models.ForeignKey(Wilaya, on_delete=models.SET_NULL, null=True)

    yourAdresss = models.CharField(max_length=200,blank=False)

    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)

    numReviews = models.IntegerField(null=True, blank=True, default=0)

    price = models.DecimalField(max_digits=7, decimal_places=2)

    countInStock = models.IntegerField(null=True, blank=True, default=0)

    createdAt = models.DateTimeField(auto_now_add=True)

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):

        return self.name
    
class Order(models.Model):

    user = models.ForeignKey(Account, on_delete=models.SET_NULL, null=True)
  
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    
    totalPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True, default = 0)
    
    isPaid = models.BooleanField(default=False)

    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)

    isDelivred = models.BooleanField(default=False)

    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)

    createdAt = models.DateTimeField(auto_now_add=True)

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):

        return str(self.createdAt)

class OrderItem(models.Model):

    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)
    
class ShippingAddress(models.Model):

    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    
    city = models.CharField(max_length=200, null=True, blank=True)

    phone_number = models.CharField(max_length=200, null=True, blank=True)

    wilaya = models.CharField(max_length=200, null=True, blank=True)

    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.city)



