// var data = new Date(); // Dessa forma, sera a data de hoje

var data = new Date();
data.getHours();
data.getMinutes();
data.getSeconds();
data.getMilliseconds();

// PAra criar uma data especifica

var dataNova = new Date("March 10, 2018"); // Cria com as horas zeradas
Date.parse(dataNova); //Converter para data nova

dataNova.getDate(); //Pegar dia especifico
dataNova.getMonth(); //JavaScript começa a conta do zero, ou seja, janeiro
dataNova.getDay(); //Pega o dia da semana, começando pelo zero, ou seja domingo
dataNova.getFullYear(); //Pega o ano

// Para contatenar a data no formato que quiser, por exemplo:
dataNova.getDay()+"/"+(dataNova.getMonth()+1)+"/"+dataNova.getFullYear();

// Para somar dias a data
dataNova.setDate(dataNova.getDate()+5);

// Para adicionar horas
dataNova.setHours(dataNova.getHours()+10);

// Para demonstrar o dia da semana
var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
dias[dataNova.getDay()];