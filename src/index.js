// Parte 1: Criar tela de identificação do heroi no jogo.
console.log("Digite o nome do seu heroi");

// Declarar variavéis
let nameheroi = " Mario "
let xp = 11000


//Concatenando uma mensagem fixa + uma varável
console.log("Olá" + nameheroi);
console.log( nameheroi + "entrou no servidor");

//Estrutura de Decisão

let nheroi;

if (nheroi < 1000){
nheroi="Ferro"
}else if( xp >= 1001 && xp <= 2000){
nheroi="Bronze"
}else if( xp >= 2001 && xp <= 5000){
nheroi="Prata"
}else if( xp >= 5001 && xp <= 7000){
nheroi="Ouro"
}else if( xp >= 7001 && xp <= 8000){
nheroi="Platina"
}else if( xp >= 8001 && xp <= 9000){
nheroi="Ascendente"
}else if( xp >= 9001 && xp <= 1000){
nheroi="Imortal"
}else {( xp >= 10001)
nheroi="Radiante"
};

//Saida
//Concatenando uma mensagem fixa + uma varável
console.log("O Heroi de nome" + nameheroi + "está no nível de experiência " + nheroi);