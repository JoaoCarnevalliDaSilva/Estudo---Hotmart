const usuario_mock = {
  email: "coordenador@sanquim.com",
  senha: "senha123"
};

const formulario = document.querySelector('#login-form');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');

const telaLogin = document.querySelector('#tela-login');
const telaDashboard = document.querySelector('#dashboard');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const emailDigitado = inputEmail.value;
  const senhaDigitado = inputSenha.value;
  
  if (emailDigitado === usuario_mock.email && senhaDigitado === usuario_mock.senha) {
    
    // Oculta o login
    telaLogin.style.display = 'none';
    
    // Revela o dashboard (usando 'grid' para não quebrar seu layout!)
    telaDashboard.style.display = 'grid';
    
  } else {
    alert('Acesso Negado: E-mail ou senha incorretos.');
  }
});