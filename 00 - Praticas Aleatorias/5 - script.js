function calcular(event) {
  event.preventDefault();
  const totalAulas = Number(document.getElementById('aulas').value);
  const totalComparecidas = Number(document.getElementById('comparecidas').value)
  let percentualPresenca = 0;
  percentualPresenca = (totalComparecidas/totalAulas)*100;
  const resultado = document.getElementById('resultado');
  if(percentualPresenca >= 85) {
    resultado.innerHTML = "Sua frequencia eh de "+percentualPresenca+" %. Voce esta aprovado e no caminho certo";
  } else {
    resultado.innerHTML = "Sua frequencia eh de "+percentualPresenca+" %. Cuidado para nao ficar sem o certificado";
  }

  document.getElementById('aulas').value='';
  document.getElementById('comparecidas').value='';
}