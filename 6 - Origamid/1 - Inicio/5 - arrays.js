var videoGames = ['Switch', 'PS5', 'XBOX'];

videoGames.pop(); //Remover o ultimo item 
videoGames.push('exemplo'); //Adiciona ao final da lista
videoGames.length; //Itens na lista

// LOOP PARA DEMONSTRAR QUANTOS ITENS ESTAO NA LISTA
for (let n = 0; n<videoGames.length; n++) {
  console.log(videoGames[n]);
}

// LOOP PARA PARAR A PESQUISA SE VALOR ENCONTRADO
for (let n = 0; n<videoGames.length; n++) {
  console.log(videoGames[n]);
  if(videoGames[n] === 'PS4') {
    break;
  }
}


//FOR EACH é uma função que executa uma função para cada item da Array
videoGames.forEach(function(item){
  console.log(item);
})


//Fazem algo repetidamente em looping

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}