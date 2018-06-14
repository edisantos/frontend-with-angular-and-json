var categoriaModule = angular.module('categoriaModule',[]);

categoriaModule.controller("categoriaCtrl",function($scope,$http){
   $http.get('controller/categorias.json').then(function (response) {
   	$scope.categorias = response.data.categorias;
   })
});