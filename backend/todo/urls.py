from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()

router.register('todos', views.TodoViewSet)

urlpatterns = router.urls