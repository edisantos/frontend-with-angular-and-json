var horarioAulas = angular.module('horarioAulas',[]);
horarioAulas.controller("horarioAulasCtrl",function($scope,$http){
   $http.get('controller/horariosJson.json').then(function (response) {
   	$scope.horarios = response.data.horarios;
   })
});