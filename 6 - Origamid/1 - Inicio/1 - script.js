function areaQuadrado(lado) {
  return lado * lado;      
}

console.log(areaQuadrado(2));



function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(pi());



function imc(peso, altura) {
  const imc = peso / (altura*altura);
  return imc;
}

console.log(imc(80, 1.8));



function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do ceu';
  } else if(cor === 'amarelo') {
    return 'Eu gosto de flor';
  } else {
    return 'Eu nao gosto de nada';
  }
}




