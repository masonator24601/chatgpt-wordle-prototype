from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from chatgptwordle import views

router = routers.DefaultRouter()
router.register(r'responses', views.ResponseView, 'response')

urlpatterns = [
    path('', include('chatgptwordle.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]