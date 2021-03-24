//6.1 - Functions

//criar um aplicativo de frase motivacionais

/* console.log('Estudar é muito bom ');
console.log('Paciência e persistência');
console.log('Revisão é mãe do aprendizado');
 */
//função é um tipo de dados estrutural

//function statement / function declaration
function createPhrase() {
    console.log('Estudar é muito bom ');
    console.log('Paciência e persistência');
    console.log('Revisão é mãe do aprendizado');

}

//call function, invoke function, run function, execute function.
createPhrase();


//6.2 - Argumentos e parâmetros

//funções dentro de variáveis
//função anônima, function expression

//parameters
const sum = function(number1, number2){
    console.log(number1+number2);
};


//arguments
sum(2, 3);

//6.3 - retornando valores dentro de uma função


const sum = function(number1, number2){
    let total = (number1+number2)
    return total
};



let num1 = 34
let num2 = 25

sum(num1, num2)

console.log(`o número 1 é ${num1}`)
console.log(`o número 2 é ${num2}`)
console.log(`a soma é ${sum(num1, num2)}`)

//toda função retorna algo. Caso não tenha sido explicitada a palavra return, a função retornará um objeto "undefined".

//Dentro do escopo da função o "var" também fica isolado (igual ao "let" e o "const" ficam normalmente).

//Quando uma variável é criada sem uma palavra chave (var, let, const), ela passa a existir globalmente, mesmo que ela tenha sido criada dentro de uma função.


//6.4 - function scope

let subject = 'crete video'
let subject2 = 'work'

function createThink(subject){
    subject = 'study'
    subject2 = 'rest'
    return subject
}


//como a função creaateThink possui um parâmetro, qualquer alteração feita à variável subject ficará no escopo da mesma. 

// caso ela não tivesse parâmetros, a alteração que a variável sofre dentro da função, também refletiria no seu escopo anterior.

console.log(subject)
console.log(createThink(subject))
console.log(subject2)

//6.5 - Function Hoisting

sayMyName()

function sayMyName(){
    console.log('Joe')
}


newName()
//caso a função seja declarada dentro de uma variável, não ocorrerá o hoisting, mesmo que ela seja declarada utilizando o 'var'
const newName = function(){
    console.log('Ala')
}

//6.6 - Arrow function

const sayMyName = function() {
    
    console.log('Joe')
}

sayMyName()


//arrow function não aceita hoisting
const newName = () => {
    console.log('Asd')
}

newName()


//6.7 - Callback function

function sayMyName(name){
    console.log('antes de executar a call back')

    name()

    console.log('depois de exucar a callback')
}



//qualquer tipo de dado pode ser passado para uma função, inclusive outra função.

sayMyName(
() => {
    console.log('estou em uma callback')
}
)

//6.8 - Constructor function
   /*  * expressão new - faz com que a função se torne uma construtora.
    * cria um novo objeto
    * keyword 'this' */

// por boa pŕatica, a primeira letra do nome da função é maiúscula
function Person(name) {
    this.name = name
    this.walk = () =>{ //arrow function
        return this.name + ' está andando'
    }
}


const joe = new Person('Joe')
const asd = new Person('Asd')
console.log(joe.walk());
console.log(asd.walk());

