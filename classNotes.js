// 4 - Variáveis

// 4.1 - Conhecendo as variáveis
// Declarando variáveis

// var e let

var primeiro = 1;
let segundo = 2;

console.log( primeiro + segundo);

// const - não pode ter o seu valor alterado durante a aplicação

const clima = "Quente";

console.log(clima);

clima = "Frio";

// 4.2 - Tipos dinâmicos
/* Em JS não é preciso "tipar" a variável quando ela é criada.

Essa é uma linguagem fracamente tipada e dinâmica.

Podemos mudar o conteúdo da variável.

O tipo só existira a partir do momento que eu atribuir um valor a variável

 */

let fruta = "banana";

console.log (fruta);

console.log(typeof fruta); // informa qual o tipo da variável.

// 4.3 Scope var
/* # Scope
    *determina a visibilidade de uma variável dentro do JS.
    
    
# Block statement  - cria um novo escopo (block-scoped);
    

var - é global, e também local.

através de hoisting (elevação) o JS (por debaixo dos panos) retira o 'var x' de dentro do bloco, e posiciona de forma global. 
Por isso, que o primeiro console.log retorna 'undefined' ao invez de 'x is not defined'.
    */

console.log(x);

{
    var x = 0;
}

console.log(x);


// 4.4 Scope let e const
/* let e const - são locais, e só funcionam no escopo no qual foram criadas.

variáveis de escopo local não podem ser acessadas antes da inicialização. Por insso que, mesmo dentro do bloco, o 'console.log' não funciona, caso seja colocado antes da declaração do 'y' (diferente do que o corre com a 'var').

é interessante não se utilziar a 'var' uma vez que o fato de ele existir em todos os escopos, isso pode trazer algum problema.

*/


console.log (y);
console.log (z);
    
    {
        console.log(y);
        console.log(z);

        let y = 0;
        const z = 1;
    }

    console.log(y);
    console.log(z);


// 4.5 - Nomeando variáveis
/* ## Para criar nomes:

* Js é case-sensitive.
* JS aceita os caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especiais $ _
    * Iniciar com letras 
    * Colocar acentos
    * Letras maiúsculas e minúsculas fazem diferença
    
- Não posso:
    * Iniciar com números.
    * Colocar espaços no nomes
    
- Ideal:
    * Criar nomes que fazem sentido
    * Nomes que expliquer o que a variável é ou faz
    * camelCase
    * snake_case
    * Escrever em inglês */
