# Generated by Django 4.2.7 on 2024-06-18 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_products'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='image_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
