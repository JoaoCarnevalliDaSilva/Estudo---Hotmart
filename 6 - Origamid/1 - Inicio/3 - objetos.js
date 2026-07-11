var pessoa = {
  nome: 'Joao',
  idade: 28,
}

var quadrado = {
  lados:4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados*lado;
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));


var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight() {
    return this.height / 2;
  }
}

var bg = menu.backgroundColor;

menu.color = 'blue'; //Adicionando novas propriedades ao objetos

menu.esconder = function() {
  console.log('escondido');
}

//This vai fazer sempre referencia ao proprio objeto

