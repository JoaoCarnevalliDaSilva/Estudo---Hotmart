
let pecas=[];

function calcular(event) {
  event.preventDefault();
  const componenteDigitado = document.getElementById('nome-componente').value;
  pecas.push(componenteDigitado);
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = "Voce tem "+pecas.length+" cadastrados no sistema";
  document.getElementById('nome-componente').value = '';
}