var cadastroAlunos = angular.module('cadastroAlunos',[]);
cadastroAlunos.controller('CadastroAlunosCtrl', function($scope){
    $scope.titulo = "Cadastro de Alunos";
    $scope.ListaAlunos = [
        { codigo:'1',nome: 'Edinaldo D Santos', email: 'edinaldolemos@yahoo.com.br',endereco:'Rua: Floresta, 198', bairro: 'Jardim Andorinhas',cidade:'Campinas',estado:'SP',dataInicio:'2017.01.02',diaVencimento:'15',aula:'Muscalação' },
        { codigo:'2', nome: 'Antonio Lemos dos Santos', email: 'antoniolemos@yahoo.com.br',endereco:'Rua: Floresta, 198', bairro: 'Sitio Primavera',cidade:'Piramboia',estado:'SP',dataInicio:'2017.01.02',diaVencimento:'15',aula:'Muscalação' },
        { codigo:'3',nome: 'Edy Marcio dos Santos', email: 'edymarciosantos@yahoo.com.br',endereco:'Rua: Floresta, 198', bairro: 'jardim Novo Maracana',cidade:'Campinas',estado:'SP',dataInicio:'2017.01.02',diaVencimento:'15',aula:'Muscalação' }
    ];

    $scope.selecioneAlunos = function(alunosSelecionado){
    	$scope.alunos = alunosSelecionado;
    }
    $scope.limparCampos = function(){
    	$scope.alunos ="";
    }
    $scope.SalvarCategoria = function(){
    	$scope.ListaAlunos.push($scope.alunos);
    	$scope.limparCampos();
    }
    $scope.ExcluirAlunos = function()
    {
    	$scope.ListaAlunos.splice($scope.ListaAlunos.indexOf($scope.alunos),1);
    	$scope.limparCampos();
    }
});