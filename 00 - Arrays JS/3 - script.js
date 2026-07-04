let cronograma = [];

function calcular(event) {
  event.preventDefault();
  const valorTransitorio = document.getElementById('topico').value;
  cronograma.push(valorTransitorio);
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = "Seus focos da semana são: "+cronograma.join(' - ');
  document.getElementById('topico').value = '';
}

function desfazer() {
  cronograma.pop();
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = "Seus focos da semana são: "+cronograma.join(' - ');
  document.getElementById('topico').value = '';
}