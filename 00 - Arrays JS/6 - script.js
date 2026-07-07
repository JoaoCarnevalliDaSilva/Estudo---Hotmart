let grade = [];

function adicionar(event) {
  event.preventDefault();
  const adicaoTemp = document.getElementById('input-adicionar').value;
  const resultadoErro = document.getElementById('resultado-erro');
  const resultado = document.getElementById('resultado');
  if(grade.includes(adicaoTemp)) {   
    resultado.innerHTML = ''; 
    resultadoErro.innerHTML = "Atenção: Essa tópico já está na sua lista!";
    document.getElementById('input-adicionar').value='';
  } else {
    resultadoErro.innerHTML = '';
    grade.push(adicaoTemp);
    resultado.innerHTML = "Adicionado com sucesso.";
    document.getElementById('input-adicionar').value='';
  }
  const demonstrarLista = document.getElementById('lista-completa');
  demonstrarLista.innerHTML = "Sua lista atual é: "+grade.join(' - ');
}

function finalizar(event) {

}

function deletar(event) {
  event.preventDefault();
  const adicaoTemp = document.getElementById('input-deletar').value;
  const posicao = grade.indexOf(adicaoTemp);
  const resultado = document.getElementById('resultado');
  if(posicao !== -1) {
    grade.splice(posicao,1);
    resultado.innerHTML = "Tópico removido com sucesso."
  } else {
    resultado.innerHTML = "Tópico não encontrado"
  }
  const demonstrarLista = document.getElementById('lista-completa');
  demonstrarLista.innerHTML = "Sua lista atual é: "+grade.join(' - ');
}

