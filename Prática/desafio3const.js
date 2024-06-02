/* Faça um algoritmo que dado as 3 notas tiradas 
por um aluno em um semestre da faculdade calcule
e imprima a sua média e a sua classificação conforme
a tabela abaixo.

Media = (nota 1 + nota 2 + nota 3) / 3 

Classificação:

- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, Passou de semestre;
*/

const nota1 = 5;
const nota2 = 4.8;
const nota3 = 9.5;

const media_final = (nota1 + nota2 + nota3) / 3;
console.log(media_final);

if (media_final < 5) {
    console.log('A sua nota é ' + media_final + ', você está reprovado');
} else if (media_final >= 5 && media_final <= 7) {
    console.log('A sua nota é ' + media_final + ', Você está de recuperação');
}
else {
    console.log('A sua nota é ' + media_final + ', Você passou de semestre');
}
