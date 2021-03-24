
    /*
    
    7.1 Prototype
        - Um conjunto de métodos nativos da linguagem, que por definição estão atrelados a maioria dos objetos. Sendo que cada tipo de objeto herda um conjunto difertente de protótiṕo.

        * prototype-based language
        * prototype chain - caso um objeto possua mais de um protótipo, ele herdará os métodos de todos eles.
        * __proto__ 
        * 
        
    - JS é uma linguagem baseada em protótipos.
    - Ela possuiu uma cadeia de protótipos que é inerente a maioria dos objetos
    
    */

    console.log(true.__proto__)
    console.log('joe'.__proto__) //exemplo de objeto com mais de um protótipo
    
    console.log(23.0.__proto__)
    
    
    /* 
7.2 - Type conversion (typecasting) vs Type coersion
    * Alteração de um tipo de dado, para outro.
    * Typecasting - a alteração do tipo de dado é feita de modo explicito, por mim.
    * A alteração é realizada de modo implícito pelo JS.
*/

console.log('9' + 5) // type coersion. O JS transformou um tipo 'number' para um tipo 'string'.

console.log(Number('9') + 5) // type conversion. Eu utilizei um método para que ocoresse a troca de tipo.


/* 
7.3 - Manipulando strings e números


*/


let string = '123'

console.log(Number(string));

let number = 123

console.log(String(number))


/* 
7.4- Contando caracteres e digitos


*/

let word = 'paralelepipedo'

console.log(word.length)

let number = 1234
console.log(String(number).length)


/* 
7.5 - Transformar um número quebrado com 2 casas decimais, e trocar ponto por virgula.

o método 'toFixed' do objeto number, e serve para dizer quantas casas decimais um número terá.

*/

let number = 1234.123434

console.log(Number(number.toFixed(2))) // delimitando as casas decimais

console.log(number.toFixed(2).replace('.', ',')) // trocando o ponto por vírgula.
// A saída será uma string, pois a vírgula não faz parte de um número. Mesmo que se utilize o método 'Number()'.

/* 
7.6 - Convertendo maiúsculas em minúsculas 
    Métodos:
    * toUpperCase
    * toLowerCase

*/

let word = 'Programas'

console.log(word.toUpperCase())

console.log(word.toLowerCase())



/* 
7.7- Encontrando palavras em frases

    -Esse é um método que possibilita encontrar strings, dentro de outras strings. 

    * 'includes' - esse método é case sensite.

*/

let phrase = 'Eu quero viver amor'

console.log(phrase.includes('Amor'))


/* 
7.8- Separando strings

O método 'split' separa os elementos do string, e os transforma em elementos separados que podem ser atribuidos a um array.
O método vai separar as palavras de acordo com o argumento que for passado.

O método 'join' junta os elementos de um array em uma string, e utiliza o argumento como separador das palavras.

*/

// Separar um texto com espaços em um novo array, no qual cada posição do array é uma palavra. Posteriormente, substituir o espaço por um underscore.

let phrase = 'Eu quero viver o Amor'

let myArray = phrase.split(' ')

console.log(myArray)


let phraseWithUnderscore = myArray.join('_')

console.log(phraseWithUnderscore)


/* 
7.9- Criando um array com construtor

*/


let myArray = new Array('a', 'b', 'c', 'd') //utilizando o construtor
console.log(myArray)

let myArray2 = new Array(10) // cria um array vazio, com 10 posições.
console.log(myArray2)



/* 
7.10 Elementos do Array
    * Cada elemento de um array pode ser um tipo de dado.
    * No array também pode ser utilziada quebra de linha.

*/

// Contar elementos de um Array

console.log(['a', 'b', 'c'])

console.log(['a', {type: "array"}, function() {return "alo"}])

console.log([
    'a', 
    {type: "array"},
    function() {return "alo"}
])

// o array também possui o método 'length'
console.log(['a', {type: "array"}, function() {return "alo"}].length)

//seus elementos podem ser acessados individualmente
console.log(['a', {type: "array"}, function() {return "alo"}][1])

console.log(['a', {type: "array"}, function() {return "alo"}][2]())// acessando o elemento de index 2, e executando a função que está cotida nele.

// todos os dados no array podem ser acessados, assim como suas propriedades.
console.log(['a', {name: "array"}, function() {return "alo"}][1].name)


/* 
7.11 - Strings para Arrays

    Utilizando o método 'from' do objeto 'Array', consegue-se transformar uma string em um Array. Esse método pede uma 'string' como argumento.

*/

// Transformar uma cadeia de caracteres em um array.

let word = 'manipulação'

console.log(Array.from(word))


