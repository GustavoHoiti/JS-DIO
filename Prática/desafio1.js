/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem */

// Desafio 1 \\

const preco_combustivel = 5.79;
let gasto_medio = 6.7;  //KM POR LITRO
let distancia_km = 300;

let gasto_combustivel = distancia_km / gasto_medio * preco_combustivel;
    
console.log("O gasto que terá com o combustível é R$" + gasto_combustivel.toFixed(2));

