let pecasPC = [];

function adicionar(event) {
  event.preventDefault();
  const valorTransitorio = document.getElementById('item').value;
  const resultado = document.getElementById('resultado');
  if(pecasPC.includes(valorTransitorio)) {
    resultado.innerHTML = "Atenção, esse tópico já esta na lista!";
    document.getElementById('item').value = ''; 
  } else {
    pecasPC.push(valorTransitorio);
    resultado.innerHTML = "Item adicionado. Sua lista é: "+pecasPC.join(' - ');
    document.getElementById('item').value = '';
  }
}

function apagar(){
  const valorTransitorio = document.getElementById('item').value;
  const resultado = document.getElementById('resultado');
  if(pecasPC.includes(valorTransitorio)) {
    pecasPC.pop();
    resultado.innerHTML = "Item excluido. Agora sua lista é: "+pecasPC.join(' - ');
    document.getElementById('item').value = '';
  } else {
    resultado.innerHTML = "Item não encontrado";
    document.getElementById('item').value;
  }
}