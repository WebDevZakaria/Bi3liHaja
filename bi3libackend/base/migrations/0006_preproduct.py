# Generated by Django 3.2.6 on 2024-01-07 14:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0005_auto_20240107_1455'),
    ]

    operations = [
        migrations.CreateModel(
            name='Preproduct',
            fields=[
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('image', models.ImageField(blank=True, default='/tail.jpg', null=True, upload_to='')),
                ('brand', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('yourAdresss', models.CharField(max_length=200)),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('numReviews', models.IntegerField(blank=True, default=0, null=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('countInStock', models.IntegerField(blank=True, default=0, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.category')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
                ('wilaya', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.wilaya')),
            ],
        ),
    ]