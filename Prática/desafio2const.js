/* Faça um programa para calcular o valor d euma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem */

const preco_etanol = 5.79;
const preco_gasolina = 6.80;
const tipo_combustivel = 'Etanol';
const gasto_medio = 7.2;
const distancia = 300;

const gasto_combustivel = distancia / gasto_medio;

if (tipo_combustivel === 'Etanol') {
    const valor_gasto = gasto_combustivel * preco_etanol;
    console.log ('Você utilizou ' + tipo_combustivel + ' e gastou  R$ ' + valor_gasto.toFixed(2) + ' na viagem');

} else {
    const valor_gasto = gasto_combustivel * preco_gasolina;
    console.log ('Você utilizou ' + tipo_combustivel + ' e gastou R$ ' +valor_gasto.toFixed(2) + ' na viagem');

}








