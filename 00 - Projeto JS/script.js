const usuario_mock =  {
  email: "coordenador@sanquim.com",
  senha: "senha123"
};

const formulario = document.querySelector('#login-form');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const emailDigitado = inputEmail.value;
  const senhaDigitado = inputSenha.value;
  if (emailDigitado === usuario_mock.email && senhaDigitado === usuario_mock.senha) {
    alert('Acesso liberado');
  } else {
    alert('Acesso Negado');
  }
})