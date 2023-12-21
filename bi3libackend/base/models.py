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


class Product(models.Model):

    user = models.ForeignKey(Account, on_delete=models.SET_NULL, null=True)

    name = models.CharField(max_length=200, null=True, blank=True)

    image = models.ImageField(null=True, blank=True, default='/tail.jpg')

    brand = models.CharField(max_length=200, null=True, blank=True)

    category = models.CharField(max_length=200, null=True, blank=True)

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


