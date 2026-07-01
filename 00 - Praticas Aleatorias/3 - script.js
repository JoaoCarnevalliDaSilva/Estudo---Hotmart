var valor;
var taxa;
var conversao;
var resultado;

function calcular(event) {
  event.preventDefault();
  valor = document.getElementById('montante').value;
  taxa = document.getElementById('taxa').value;
  conversao = valor / taxa;
  resultado = document.getElementById('resultado');
  if (conversao >= 3000) {
    resultado.innerHTML = "Você tem € "+ conversao.toFixed(2)+" .Pode arrumar as malas!"
  } else {
    resultado.innerHTML = "Você tem € "+ conversao.toFixed(2)+" . Ainda faltam € "+ (3000 - conversao).toFixed(2)+" para a meta.";
  }
}