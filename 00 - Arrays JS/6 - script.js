let grade = [];

function adicionar(event) {
  event.preventDefault();
  const adicaoTemp = document.getElementById('adicione').value;
  const resultadoErro = document.getElementById('resultado-erro').value;
  const resultado = document.getElementById('resultado');
  grade.push(adicaoTemp);
  if(grade.includes(adicaoTemp)) {    
    resultadoErro.innerHTML = "Atenção: Essa matéria já está no seu cronograma!";
    document.getElementById('adicione').value='';
  } else {
    resultadoErro.innerHTML = '';
    grade.push(adicaoTemp);
    resultado.innerHTML = "Adicionado com sucesso. Sua lista: "+grade.join(' - ');
    document.getElementById('adicione').value='';
  }


}