angular.module("angularNivel1App").controller('appCtrl', function($scope){
    
    // Objeto vazio
    var aluno = {};

    // Objeto com atributos
    var aluno2 = {
        nome: null,
        idade: null,
        sexo: null
    };


    aluno.nome = 'Flavio';
    console.log(aluno.nome);
    aluno2.telefone = '34567887';
    console.log(aluno2.telefone);

    $scope.alunos = [];
    // var alunos = new Array()

    $scope.alunos[0] = aluno2;
    $scope.alunos.push(aluno2);

    var arrayPopulado = ['pao e batata', 'pao', 'batata'];

    
    $scope.alunos = [
        {nome: 'Evaristo', idade: 32},
        {nome: 'Claudio', idade: 22},
        {nome: 'Donizete', idade: 65},
        {nome: 'Claudinei', idade: 44}
    ]
});