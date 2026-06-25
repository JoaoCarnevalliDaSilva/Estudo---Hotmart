
/* Chamar a função para um elemento do HTML */
var area = document.getElementById('area')


function entrar() {
  var nome = prompt("Digite seu nome:");

  if(nome === "" || nome === null) {
    alert("Algo deu errado");
    area.innerHTML = "Clique no botao para acessar."
  } else {
    area.innerHTML = "Bem Vindo " + nome+" "; /* Inner HTML altera os elementos da tela */

    /* Quando o usuario entra com um dado valido, crie uma nova função dentro da tela */

    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da Conta"
    botaoSair.onclick = sair; /* Ao clicar no botao, ele vai chamar a funcao sair */
    area.appendChild(botaoSair) /* Append Child é para criar uma nova funcao dentro da area */
  }
}

function sair() {
  alert('Até mais');
  area.innerHTML = "Você Saiu";
}

/* Passar dentro da funcao cria os parametros da funcao */
function media(nota1, nota2) {
  var mediaAluno = (nota1+nota2)/2;

  if(mediaAluno >= 7) {
    console.log("Aluno Aprovado: "+ media);
  } else if(media <7) {
    console.log("Aluno reprovado: "+ media);
  }
}


function aluno(nome, curso) {
  var mensagem = "Seja bem vinda "+nome+" ao curso de "+curso;

  console.log(mensagem);
}