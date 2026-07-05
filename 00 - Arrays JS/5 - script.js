let pendentes = [];

function adicionarTopico(event) {
  event.preventDefault();
  const valorTransitorio = document.getElementById('topico').value;
  pendentes.push(valorTransitorio);
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = "A sua lista é composta por: "+pendentes.join(' - ');
  document.getElementById('topico').value = '';
}

function finalizarTopico(event) {
  event.preventDefault();
  const valorRemocao = document.getElementById('topico-remover').value;
  const posicao = pendentes.indexOf(valorRemocao);
  const conclusao = document.getElementById('conclusao');
  if(posicao !== -1) {
    pendentes.splice(posicao, 1);
    conclusao.innerHTML = "Sua lista atualizada é: "+pendentes.join(' - ');
  } else {
    conclusao.innerHTML = "Topico nao encontrado."
  }

  document.getElementById('topico-remover').value = '';
}