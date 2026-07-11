var dadosPessoais = {
  nome: 'Jose',
  sobrenome: 'Carlos',
  idade: 19,
  cidade: 'campinas',
}

//Criar metodo para mostrar nome completo
dadosPessoais.nomeCompleto = function() {
  return '${this.nome} ${this.sobrenome}';
}


// TUDO É OBJETO

var nome = 'Joao';

nome.length;
nome.charAt(1);
nome.replace('ao', 'sh'); // Trocar de Joao para Josh
nome.toLowerCase(); //tudo minusculo
var nomeMinusculo = nome.toLowerCase();


// PARA NUMEROS


