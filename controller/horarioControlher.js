var HorarioAulas = angular.module('HorarioAulas',[]);

HorarioAulas.controller("HorarioAulasCtrl",function($scope){
$scope.horarios =[
  {aula:'Musculação', semana:'Segunda-feira a Sexta-feira / 6:00 as 23:00',horario:'8:00 as 23:00'},
  {aula:'Zumba',semana:'Terça-feira',horario:'20:00 as 22:00'},
   {aula:'Capoeira', semana:'Segunda-feira-feira',horario:'20:00 as 21:00'}
];
});