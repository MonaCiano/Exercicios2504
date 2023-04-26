//1 
//a) O que vai ser impresso no console?
    //vai ser impresso o restulado da multiplicação dos numeros por 5;

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse 
//a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
    //Não aparecia nada.

//------------------------------------------------------------------------------------

/* 2
a) a. Explique o que essa função faz e qual é sua utilidade
    //Ela vai receber um texto e se no texto e vai retornar o texto to minúsculo e se tiver 
    // a palavra cenoura no texto ela vai retornar se é falso ou verdadeiro.

b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura - true
     ii.  CENOURA é bom pra vista - true
     iii. Cenouras crescem na terra - true*/

//---------------------------------------------------------------------------------

/*Exercícios de escrita de código 
1 - a)*/

/*function imprimirTexto() {
    console.log("Eu sou Monalisa, tenho 29 anos, moro em Rio Grande do Sul e sou estudante.");
}

imprimirTexto();*/

//b)

/*let nome = "Maria";
let idade = 25;
let cidade = "Barbalha"
let profissao = "Enfemeira"

function imprimirTexto2(){
    console.log("Eu sou "+ nome + ", tenho " + idade + ", moro em " + cidade + " e sou " + profissao);
}

imprimirTexto2();*/

// 2

/*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

/*num1 = 20;
num2 = 35;

function somarNum(){
    console.log(num1 + num2);
}

somarNum();*/

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

/*numb1 = 5;
numb2 = 7;

function setemenorquecinco() {
    console.log(condicao = numb1 >= numb2);
}

setemenorquecinco();*/

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

/*num = prompt("Digite um número: ");

function parouimpar(){
    if (num % 2 == 1){
        console.log(false + " O número é impar!");
    }
    else{
        console.log(true + " O número é par!");
    }
}

parouimpar();*/

//d) d) Faça uma função que recebe uma mensagem (string) como parâmetro e
// imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

/*const frase = prompt("Digite uma frase:");

function imprimirFrase(){
    console.log(frase.toUpperCase() + '\n' + frase.length);
}

imprimirFrase();*/

//----------------------------------------------------------------------------------------------

/*3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
 Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados
  pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:*/

/*let number1 = parseFloat(prompt("Digite o primeiro número:"));
let number2 = parseFloat(prompt("Digite o segundo número:"));

function operações(){

    let soma = number1 + number2;
    let subtracao = number1 - number2;
    let multi = number1 * number2;
    let divi = number1 / number2;

    console.log("Números inseridos: "+ number1 + ", " + number2 + '\n'+
                "Soma: " + soma + '\n' +
                "Subtração: " + subtracao + '\n' + 
                "Multiplicação: " + multi + '\n' + 
                "Divisão: " + divi
    );
}

operações();*/


let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));

function soma(n1, n2){
   return n1+n2;
}
function subtracao(n1, n2){
    return n1-n2;
}
function multiplicacao(n1, n2){
    return n1*n2;
}
function divisao(n1, n2){
    return n1/n2;
}

let somaDois = soma(n1 + n2);
let subDois = subtracao(n1 - n2);
let multDois = multiplicacao(n1 * n2);
let divDois = divisao(n1/n2);

console.log("Números inseridos: "+ n1 + ", " + n2 );
console.log("Soma: " + somaDois);
console.log("Subtração: " + subDois);
console.log("Multiplicação: " + multDois);
console.log("Divisão: " + divDois);