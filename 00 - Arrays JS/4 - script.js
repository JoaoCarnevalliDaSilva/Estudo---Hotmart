let grade = [];

function calcular(event) {
  event.preventDefault();
  const valorTransitorio = document.getElementById('topico').value;
  const resultado_erro = document.getElementById('resultado-erro');
  const resultado = document.getElementById('resultado');
  if(grade.includes(valorTransitorio)) {    
    resultado_erro.innerHTML = "Atenção: Essa matéria já está no seu cronograma!";
    document.getElementById('topico').value='';
  } else {
    resultado_erro.innerHTML = '';
    grade.push(valorTransitorio);
    resultado.innerHTML = "Adicionado com sucesso. Sua lista: "+grade.join(' - ');
    document.getElementById('topico').value='';
  }
  
}