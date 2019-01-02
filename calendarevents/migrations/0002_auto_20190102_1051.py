# Generated by Django 2.1.4 on 2019-01-02 17:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('calendarevents', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventType',
            fields=[
                ('id', models.CharField(max_length=50, primary_key=True, serialize=False)),
            ],
        ),
        migrations.AddField(
            model_name='calendarevent',
            name='link',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='calendarevent',
            name='linkText',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='calendarevent',
            name='eventType',
            field=models.ForeignKey(default='event', on_delete=django.db.models.deletion.CASCADE, to='calendarevents.EventType'),
        ),
    ]
