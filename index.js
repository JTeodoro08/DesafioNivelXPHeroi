// Desafio Classificador de nível de Herói

// O Que deve ser utilizado**

// Variáveis // Operadores // Laços de repetição // Estruturas de decisões

// Objetivo!!

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

let nomeHeroi = "Dragão Branco"

categoriaXP = 1

let categoriaXP1 = "Ferro"
let categoriaXP2 = "Bronze"
let categoriaXP3 = "Prata"
let categoriaXP4 = "Ouro"
let categoriaXP5 = "Platina"
let categoriaXP6 = "Ascendente"
let categoriaXP7 = "Imortal"
let categoriaXP8 = "Radiante"



if(categoriaXP === 1.000) {
   console.log("O Herói de nome " + nomeHeroi + " está na categoriaXP: " + categoriaXP1)
}else if(categoriaXP >= 1.001 && categoriaXP <= 2.000){
   console.log("O Herói de nome " + nomeHeroi + " está na categoriaXP: " + categoriaXP2)
}  else if (categoriaXP >= 2.001 && categoriaXP < 5.000) {
    console.log("O Herói de nome " + nomeHeroi + " está na categoriaXP: " + categoriaXP3)
} else if (categoriaXP >= 5.001 && categoriaXP < 7.000) {
    console.log("O Herói de nome " + nomeHeroi + " está na categoriaXP: " + categoriaXP4)
} else if (categoriaXP >= 7.001 && categoriaXP < 8.000) {
    console.log("O Herói de nome " + nomeHeroi + " está na categoriaXP: " + categoriaXP5)
} else if (categoriaXP >= 8.001 && categoriaXP < 9.000) {
    console.log("O Herói de nome " + nomeHeroi + " está na categoriaXP: " + categoriaXP6)
} else if (categoriaXP >= 9.001 && categoriaXP < 10.000) {
    console.log("O Herói de nome " + nomeHeroi + " está na categoriaXP: " + categoriaXP7)
} else {
    console.log("O Herói de nome " + nomeHeroi + " está na categoriaXP: " + categoriaXP8)
}
