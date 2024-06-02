/*  Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condiçao 
de acordo com a tabela abaixo;

IMC em adultos Condição:

- Abaixo de 18.5, Abaixo do peso;
- Entre 18,5 e 25, Peso normal;
- Entre 25 e 30, Acima do peso;
- Entre 30 e 40, Obeso;
- Acima de 40, Obesidade grave;


IMC = peso / (altura*altura)
*/

const peso = 63;
const altura = 1.69;
const imc = peso / Math.pow(altura, 2);
const imcFormatado = imc.toFixed(2);

console.log('O seu IMC é' + imcFormatado);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc < 25) {
    console.log('Peso normal');
} else if (imc < 30) {
    console.log('Acima do peso');
} else if (imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}