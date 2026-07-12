// Usar DOM utilizando utilizando o ID
const animais = document.getElementById('animais');
console.log(animais);

//Usar Classe e Tag
const gridSelection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

//Seleciona todas as UL's
const ul = document.getElementsByTagName('ul');

// SELETOR GERAL UNICO - retorna o primeiro elemento que combinar com o seu seletor CSS
// O query selector retorna apenas o primeiro item e não todos os itens
const animais = document.querySelector('.animais'); //Para classes
const contato = document.querySelector('#contato'); //Para IDs
const primeiroUl = document.querySelector('ul'); //Para buscar o primeiro elemento
const navItem = primeiroUl.querySelector('li'); //Para buscar somente dentro da UL os elementos li

const linksInternos = document.querySelector('[href^="#"]');
// ^ = começa com 


// querySelectorAll retorna todos os elementos compativeis
const imgAnimais = document.querySelectorAll('.animais img'); //Tags img dentro da classe animais
// O valor não atualiza se houver a inserção de novos itens


const gridSectionHTML = document.getElementsByClassName('grid-section'); 
const gridSectionNode = document.querySelectorAll('.grid-section');

// Get Elements atualiza novos componentes inseridos, ou seja, é "ao vivo"
// query Selectors é estatico, ou seja, nao sofre alterações


//ForEach faz um loop, muito popular
gridSectionNode.forEach(function(item, index){
  console.log(item);
})
//Não é possivel fazer isso com o get elements



// -----------------  EXERCICIOS  ------------------------

//Retorne no console todas as imagens do site:

const img = document.querySelectorAll('img');
console.log(img);

//Retorno no console apenas as imagens que começaram com a palavra imagem

const comecaImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(comecaImagem)

//Selecione todos os links internos (onde o href começa com o #)

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);


//Selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

//Selecione o ultimo p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);