var categoriaAulas = angular.module('categoriaAulas',[]);

categoriaAulas.controller("categoriaCtrl",function($scope){
$scope.aulas =[
  {codigo:1, nome:'Musculação', horadia:'Segunda-feira a Sexta-feira / 6:00 as 23:00',professor:{codigo:1,nome:'Carlos Silva'}},
  {codigo:2, nome:'Zumba', horadia:'Terça-feira / 18:30:19:30',professor:{codigo:2,nome:'Maria Silva'}},
   {codigo:3, nome:'', horadia:'Segunda-feira-feira / 18:30:19:30',professor:{codigo:3,nome:'Sandro Silva'}}
];
 
 $scope.horarioAulas =[
 {aula:'Musculação', semana:'Segunda-feira a Sexta-feira',horario:'06:00 as 23:00'},
  {aula:'Zumba', semana:'Terça-feira a Quinta-feira',horario:'20:00 as 22:00'},
  {aula:'Capoeira', semana:'Quata-feira-feira a Sexta-feira',horario:'20:00 as 22:00'},
  {aula:'Dança', semana:'Terça-feira a Quinta-feira',horario:'20:00 as 22:00'},
 ];

 $scope.professores =[
    {codigo:'1',nome:'Carlos Silva',email:'carlossilva@gmail.com'},
    {codigo:'2',nome:'Sandro Silva',email:'sandrosilva@gmail.com'},
    {codigo:'3',nome:'Maria Silva',email:'mariasilva@gmail.com'}
 ];
  
   $scope.selecioneCategoria = function(categoriaSelecionado){
    	$scope.categoria = categoriaSelecionado;
    }
    $scope.limparCampos = function(){
    	$scope.aulas ="";
    }
    $scope.SalvarCategoria = function(){
    	$scope.aulas.push($scope.categoria);
    	$scope.limparCampos();
    }
    $scope.ExcluirCategoria = function()
    {
    	$scope.aulas.splice($scope.aulas.indexOf($scope.categoria),1);
    	$scope.limparCampos();
    }
});
