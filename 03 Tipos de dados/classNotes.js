//Aula 3.1 -  Tipos de dados. 

/* Cadeia de cacacteres 

"" aspas duplas
'' aspas simples
`` template literals - permite que sejam utilizadas multiplas linhas; permite que seja colocadas expressões dentro da própria string (interpolação);
 */

console.log(`Joe ${3 + 1}`);

// Aula 3.2 - Number
/* Number  

    33 - integer
    15.5 - float (reais)
    NaN - Not a number - indica que a saída não é um número
    Infinity - infinito 
    
*/

console.log(33);
console.log(12.5);
console.log(12.5 + 33);
console.log(10 / "asdf");

// Aula 3.5 - Boolean
]/* Boolean

trabalha com dois valores, true e false.

 */

// Aula 3.6 - Undefined vs null
/* *undefined - indefinido - é algo que não vai existir

*null - é algo que existe, mas que não possui nada dentro dele.
    * nulo
    * objeto que não possui nada dentro
    * é diferente de indefinido
     
     */

// Aula 3.7 - Object
/* Object
    * Dado estrutural
    * Possui propriedades/ atributos
    * Possui funcionalidades / métodos
    
{ propriedade : valor}

 */

console.log({
    name : "Joe",
    idade: 38,
    andar: function(){ //método (função dentro do objeto).
        console.log("andar");
    }

})

//3.8 Array
/* Array
    * vetores
    * uma lista
    * agrupamento de dados.
    
 */

console.log([
    "leite",
    "suco",
    2,
    3
]);


// 3.9 - Conclusão

// Temos 9 tipos de dados

// # Primitivos - Não é um objeto, e seu valor é imutável( o número '23' representa o número '23', e não o número '32');

// * string
// * number
// * Boolean
// * undefined
// * Symbol
// * BigInt

// # Estruturais

//     * Object -  recebe atributos e métodos.
//         * Array
//         * map 
//         * set 
//         * date 
//         * ... 
    
//     *Function

// #Primitivo Estrutura / Structural Root Primitive 
//     * null -  ele é um objeto, e sempre será vazio.
