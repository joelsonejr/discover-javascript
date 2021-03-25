/* 
8.1 - Expressões e operadores

- Expressions
- Operators
    Binary - contem dois elemento  
    Unary - contém um elemento
    Ternary - contém três elementos

*/

let number = 1 //expression

console.log(number + 1) //binary operator

console.log(++number) // unary operator

console.log(typeof number) // unary operator

console.log(true ? 'alo' : 'nada') //ternary operator



/* 
8.2 - New
    * left-hand-side expression
    * criar um novo objeto, utilizando as funçoes construtoras queexistem por padrão no JS

*/

let name = new String('Joe')
let age = new Number('38')

console.log(name, age)

name.surname = 'Junior'
console.log(name.surname)

let date = new Date('2021-03-25')
console.log(date)


/* 
8.3 - Typeof delete

    Operadores unários (só necessita da palavra chave, e um "argumento para ela")
        * typeof - informa o tipo de um elemento
        * delete - vai procurar uma propriedade dentro de um objeto, e deleta-la.
*/

console.log(typeof 'joe')

const person = {
    name: 'Joe',
    age: 38
}

console.log(person)

delete person.age
console.log(person)


/* 
8.4 - Operadores aritméticos
    * multiplicação
    * divisão
    * soma
    * subtração
    * 
    * resto da divisão
    * incremento
    * decremento
    * exponencial: utiliza o '**'
*/

console.log(3 * 5.8)
console.log(14 / 4)
console.log( 7 + 9.8)
console.log(-14.3 - 3)

let remainder = 11 % 3 //resto da divisão
console.log(remainder)

let increment = 5
console.log(++increment) //o operador vem antes para especificar de que a variável deve ser incrementada, e depois impressa. 

let increment2 = 70
console.log(increment2++)
console.log(increment2)

let decrement = 800
console.log(--decrement)

console.log(3 ** 3) 



/* 
8.5 - Grouping operator
    * ( )


*/

let total = 2 + 3 * 5
console.log(total)

total = (2+ 3) * 5
console.log(total)


/* 
8.6 - Operadores de comparação
    * Compara valores, e retorna um boolean.

    * ==    igual (não se preocupa com o tipo)
    * !=    diferente
    * ===   estritamente igual (compara também o tipo dos elementos)
    * !==   estritamente diferente
    * >     maior
    * >=    maior ou igual
    * <     menor
    * <=    menor ou igual

*/

let one = 1
let two = 2

console.log(one == two)
console.log(one != two)
console.log(one === two)
console.log(one !== two)
console.log(one > two)
console.log(one >= two)
console.log(one < two)
console.log(one <= two)


/* 
8.7 -0 Operadores de atribuição Assignment

*/

let x

//assignment
x = 1

//addition assignment
x += 2

//subtraction assignment
x -= 2

//multiplication assignment
x *= 2

//division assignment
x /= 2

//remainder, exponetiation
let y = 3

y %= 2
console.log(y)

y +=1
y **= 128 
console.log(y)


/* 
8.8 - Operadores lógicos

    * valores booleanos, retornam 'true' ou 'false'

    * &&    AND
    * ||    OR
    * !     NOT
*/

let pao = true
let queijo = true

console.log(pao && !queijo)



/* 
8.9 - Operador condicional ternário

* Dependendeno da condição fornecida, serão recebidos dois valores diferentes

* sintaxe: 
        Condição    então   valor1  seNão  valor2
        condition     ?     value1     :    value2

*/

let pao = true
let queijo = false

const niceBreakfast = pao && queijo ? 'cafe ok' : 'cafe ruim'
console.log(niceBreakfast)


let age = 90

const canDrive = 18

console.log(age >= canDrive && age < 70 ? 'can drive' : "can't drive")


/* 
8.10 - Operadores para strings

    * comparison ( == )
    * concatenation ( + )


*/

console.log ('a' + 'a')

let asdf = 'a'

console.log(asdf += 'bcd')


/* 
8.11- Falsy e Truthy
    
    *FALSY: quando um valor é considerado 'false' em contextos onde um booleano é obrigatório (condicionais e loops)

    No exemplo a seguir, todos os valores abaixo irão retornar 'false' 

        0
        -0
        ""
        null
        undefined
        NaN

*/

console.log(NaN ? 'verdadeiro' : 'falso' )


/* 
    
    *TRUTHY: quando um valor é considerado 'true' em contextos onde um booleano é obrigatório (condicionais e loops)

    No exemplo a seguir, todos os valores abaixo irão retornar 'true'

       true
       {}
       []
       1
       3.23 // pode ser qualquer número
       "0"
       "false"
       -1
       Infinity
       -Infinity

*/

console.log(-5 ? 'verdadeiro' : 'falso' )



/* 
8.12 - Operator precedence

    * grouping                  ( )
    * negação e incremento      !   ++  --
    * multiplicação e divisão   *   /
    * adição e subtração        +   -
    * relacional                < <= > >=
    * igualdade                 == != === !==
    * AND                       &&
    * OR                        ||
    * condicional               ?:
    * assignment (atribuição)   =   +=  -=  *=  /=

*/




