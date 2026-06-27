// While 
// Realizar o loops enquanto a codição for verdadeira

/*
var x = 0;

while(x<10){
  document.write("<br> o valor do X é: " + x);
  x++;
} */

// FOR

/*
for(a = 0; a<5;a++) {
  document.write("<br>O valor de a é: "+a);
} */


// SWITCH

function pedir(){
  var valor = prompt("Digite um valor de 1 a 4");
  // Para converter o que foi digitado em numero
  switch(Number(valor)) {
    case 1:
      alert("Voce escolheu suco");
      break;
    case 2:
      alert("Voce escolheu sorvete");
      break;
    case 3:
      alert("Voce escolheu agua");
      break;
    case 4:
      alert("Voce chamou o garçom");
      break;
    default:
      alert("Escolha uma opcao de 1 a 4");
      break;    
  }
}

/*
  CASO QUEIRA USAR STRING

  switch(valor){
    case 'Matheus':
      alert("mensagem qualquer");
      break;
  }


*/