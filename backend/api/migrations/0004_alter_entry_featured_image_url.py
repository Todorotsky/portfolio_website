# Generated by Django 4.2.3 on 2024-08-03 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_entry_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='featured_image_url',
            field=models.URLField(max_length=300),
        ),
    ]
