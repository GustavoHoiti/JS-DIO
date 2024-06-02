/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class carro {
    marca;
    cor;
    gastoMedioKm;


    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }


    calcularGastoDaRota (distancia, precoCombustivel){
        return distancia * this.gastoMedioKm * precoCombustivel;
    }
}

const fit = new carro ('Honda', 'Prata', 1 / 6.8);
const lancer = new carro ('Mitsubishi', 'Preto', 1/4.3);

console.log(fit.calcularGastoDaRota(500, 5.00));
console.log(lancer.calcularGastoDaRota(500, 5.00));
