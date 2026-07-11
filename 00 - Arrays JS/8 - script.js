let carros = ["BYD", "GWM", "Toyota"];

function adicionar(event) {
  event.preventDefault();
  const valorTransitorio = document.getElementById('marca').value;
  const resultadoErro = document.getElementById('resultado');
  const resultado = document.getElementById('resultado');
  if(carros.includes(valorTransitorio)) {
    resultadoErro.innerHTML = 'Ops, marca já registrada';
    document.getElementById('marca').value = '';
  } else {
    carros.push(valorTransitorio);
    resultado.innerHTML = 'Marca adicionada. Sua lista atual: '+carros.join(' - ');
    document.getElementById('marca').value = '';
  }
}