let arquivos = [];

function calcular(event) {
  event.preventDefault();
  const nomeTransitorio = document.getElementById('item').value;
  arquivos.push(nomeTransitorio);
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = "O primeiro arquivo salvo no backup foi o "+arquivos[0]+" . Já recuperamos um total de "+arquivos.length+".";
  document.getElementById('item').value = '';
}