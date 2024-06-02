/* Calcular o desconto de uma compra
em cima do valor total */

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros) {
    return ( valor + (valor * (juros / 100)));
}

const preco_etiqueta = 100;
const tipo_pagamento = 4;

if (tipo_pagamento === 1) {
    console.log(aplicarDesconto(preco_etiqueta, 10));
} else if (tipo_pagamento === 2) {
    console.log(aplicarDesconto(preco_etiqueta, 15));
} else if (tipo_pagamento === 3) {
    console.log(preco_etiqueta);
} else {
    console.log(aplicarJuros(preco_etiqueta, 10))
}


