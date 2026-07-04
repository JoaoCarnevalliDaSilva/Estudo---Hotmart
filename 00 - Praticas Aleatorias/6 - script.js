function calcular(event) {
  event.preventDefault();
  const totalKMS = Number(document.getElementById('kms').value);
  const precoGAS = Number(document.getElementById('preco-gas').value);
  let gastoTradicional = 0;
  let gastoHibrido = 0;
  gastoTradicional = (totalKMS / 10) * precoGAS;
  gastoHibrido = (totalKMS / 22) * precoGAS; 
  let economia = 0;
  economia = gastoTradicional - gastoHibrido;
  const resultado = document.getElementById('resultado');
  if(economia >= 300) {
    resultado.innerHTML = "Uau! Você vai economizar R$ "+economia.toFixed(2)+" por mês! Tá na hora de trocar de carro!";
  } else if (economia > 0) {
    resultado.innerHTML = "Você economizará R$ "+economia.toFixed(2)+" . Uma ótima ajuda no fim do mês!";
  } else {
    resultado.innerHTML = "Ops, talvez não seja hora de você trocar de carro.";
  }
    
}