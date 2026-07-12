// Document Object Model

// Representa documentos HTML através de objetos. Com ela é possível manipular
// a estrutura, estilo e conteúdo destes documentos

const h1Selecionado = document.querySelector('h1');

h1Selecionado.innerText; // retorna o texto
h1Selecionado.classList; // retorna as classes
h1Selecionado.id; // retorna a id
h1Selecionado.offsetHeight; // retorna a altura do elemento

h1Selecionado.addEventListener('click', callback);
// ativa a função callback ao click no titulo