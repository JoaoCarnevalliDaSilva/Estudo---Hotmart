const usuario_mock = {
  email: "coordenador@sanquim.com",
  senha: "senha123"
};

// Elementos do Login
const formulario = document.querySelector('#login-form');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');

// Telas Principais
const telaLogin = document.querySelector('#tela-login');
const telaDashboard = document.querySelector('#dashboard');

// Botões do Menu Superior
const menuInicio = document.querySelector('#menu-inicio');
const menuGestao = document.querySelector('#menu-gestao');
const menuRelatorios = document.querySelector('#menu-relatorios');
const menuAvisos = document.querySelector('#menu-avisos');
const btnSair = document.querySelector('#btn-sair');

// Sub-telas Internas
const telaInicio = document.querySelector('#tela-inicio');
const telaGestao = document.querySelector('#tela-gestao');
const telaRelatorios = document.querySelector('#tela-relatorios');
const telaAvisos = document.querySelector('#tela-avisos');


// LÓGICA DE LOGIN
formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const emailDigitado = inputEmail.value;
  const senhaDigitado = inputSenha.value;
  
  if (emailDigitado === usuario_mock.email && senhaDigitado === usuario_mock.senha) {
    telaLogin.style.display = 'none';
    telaDashboard.style.display = 'grid'; // Revela o Dashboard com o Grid
  } else {
    alert('Acesso Negado: E-mail ou senha incorretos.');
  }
});


// LÓGICA DE NAVEGAÇÃO INTERNA
// Função que apaga todas as telas ao mesmo tempo
function esconderTelasInternas() {
  telaInicio.style.display = 'none';
  telaGestao.style.display = 'none';
  telaRelatorios.style.display = 'none';
  telaAvisos.style.display = 'none';
}

// Ouvintes de clique para cada botão do menu
menuInicio.addEventListener('click', function(event) {
  event.preventDefault(); // Impede o link de pular para o topo da página
  esconderTelasInternas();
  telaInicio.style.display = 'flex';
});

menuGestao.addEventListener('click', function(event) {
  event.preventDefault();
  esconderTelasInternas();
  telaGestao.style.display = 'flex';
});

menuRelatorios.addEventListener('click', function(event) {
  event.preventDefault();
  esconderTelasInternas();
  telaRelatorios.style.display = 'flex';
});

menuAvisos.addEventListener('click', function(event) {
  event.preventDefault();
  esconderTelasInternas();
  telaAvisos.style.display = 'flex';
});


// LÓGICA DE LOGOUT (SAIR)
btnSair.addEventListener('click', function(event) {
  event.preventDefault();
  
  // 1. Esconde o painel inteiro e mostra o login
  telaDashboard.style.display = 'none';
  telaLogin.style.display = 'grid';
  
  // 2. Limpa os campos para o próximo login
  inputEmail.value = '';
  inputSenha.value = '';

  // 3. Reseta a navegação para que o próximo login comece no "Início"
  esconderTelasInternas();
  telaInicio.style.display = 'flex';
});