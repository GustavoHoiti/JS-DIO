/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco
normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efe-
tuar o calculo adequado.

Código condição de pagamento:

- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta + 10% de juros;
*/

const preco_etiqueta = 100;
const tipo_pagamento = 2;

if (tipo_pagamento === 1) {
    console.log(preco_etiqueta - (preco_etiqueta * 0.1));
} else if (tipo_pagamento === 2) {
    console.log(preco_etiqueta - (preco_etiqueta * 0.15));
} else if (tipo_pagamento === 3) {
    console.log(preco_etiqueta);
} else {
    console.log(preco_etiqueta + (preco_etiqueta * 0.1))
}