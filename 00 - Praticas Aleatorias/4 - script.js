function calcular(event){
  event.preventDefault();
  const valor = Number(document.getElementById('montante').value);
  const mes = Number(document.getElementById('meses').value);
  let total = 0; //Let permite que o valor seja alterado
  for(let i = 0; i<mes;i++) {
    total = total + valor;
  }

  const divResultado = document.getElementById('resultado');

  divResultado.innerHTML = "Ao final do periodo de "+mes+" você tera o montante de "+total;

}