from django.urls import path 
from . import views

#O nome "produto" é o que irá abrir a API no navegador!
urlpatterns = [
    path('categorias/', views.CategoriaList.as_view(), name = 'categoria-list'),
    path('categorias/<int:pk>/', views.CategoriaDetail.as_view(), name = 'categoria-detail'),
    path('produto/', views.ProdutoList.as_view(), name = 'produto-list'),
    path('produto/<int:pk>/', views.ProdutoDetail.as_view(), name = 'produto-detail')
]