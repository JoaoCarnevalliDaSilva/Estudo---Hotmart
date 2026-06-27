/*

Abaixo de 17: Muito abaixo do peso
Entre 17 e 18,5: Abaixo do peso
Entre 18,5 e 24,99: Peso normal
Entre 25 e 29,99: Acima do peso

Formula: Peso / (altura*altura);

*/

var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
  event.preventDefault(); //Para evitar que ao submeter o forms, limpe os dados inseridos
  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;
  imc = peso / (altura*altura);
  if(imc <= 17) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi: '+ imc.toFixed(2)+ '<br/>Muito abaixo do peso';
  } else if(imc >17 && imc <=18.5) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi: '+ imc.toFixed(2)+ '<br/>Abaixo do peso';
  } else if(imc>18.5&&imc<=24.99) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi: '+ imc.toFixed(2)+ '<br/>Peso normal';
  } else if(imc>24.99&&imc<=29.99) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi: '+ imc.toFixed(2)+ '<br/>Acima do peso';
  } else {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi: '+ imc.toFixed(2)+ '<br/>Obesidade';
  }

  document.getElementById('peso').value = '';//Para zerar os valores
  document.getElementById('altura').value = '';
}