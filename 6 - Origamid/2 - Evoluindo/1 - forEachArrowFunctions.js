const imagens = document.querySelectorAll('img');


//Primeiro parametro é sempre o item, nesse caso para cada imagem
// Segundo parametro é o index, ou seja, a posição do item na array
//Terceiro elemento é a própria array
imagens.forEach(function(valorAtual, index, array){
  console.log(item);
})

//ARROW FUNCTION

const imgs = document.querySelectorAll('img');


// o => substitui a necessidade se colocar function
imgs.forEach((item)=>{
  console.log(item);
})