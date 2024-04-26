//Definindo Variáveis de Entrada
let nomeHeroi = "Junin"
let xpHeroi = 10.001
let nivel = "null"

//Procces e Estrutura de decisão
if (xpHeroi <= 1.000) {
    nivel = "Ferro"
} else if (xpHeroi >= 1.001 && xpHeroi <= 2.000) {
    nivel = "Bronze"
} else if (xpHeroi >= 2.001 && xpHeroi <= 5.000) {
    nivel = "Prata"
} else if (xpHeroi >= 5.001 && xpHeroi <= 7.000) {
    nivel = "Ouro"
} else if (xpHeroi >= 7.001 && xpHeroi <= 8.000) {
    nivel = "Platina"
} else if (xpHeroi >= 8.001 && xpHeroi <= 9.000) {
    nivel = "Ascendente"
} else if (xpHeroi >= 9.001 && xpHeroi <= 10.000) {
    nivel = "Imortal"
} else if (xpHeroi == 10.001) {
    nivel = "Radiante"
} else {
    console.log(null)
}

// Dados de saida
console.log("O Herói de nome " + nomeHeroi + " Está no nível de " + nivel)
