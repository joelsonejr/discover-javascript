/* 
7.12 - Manipulando arrays


*/

let techs = ['html', 'css', 'js']

// adicionar um item no final
techs.push('nodejs')

//adicionar no começo
techs.unshift('sql')

//remover do fim
techs.pop() //não pede argumentos

//remover do começo
techs.shift() //não pede argumentos

//pegar somente alguns elementos do array
console.log(techs.slice(1, 2))
// O slice recebe dois argumentos, a posição inicial e a posição final. A posição inicial é o index do primeiro elemento, o segundo argumento é a quantidade de elementos que serão retirados.
// O método 'splice', ao contrário dos outros, não modifica o array


// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 2)
/* Esse método recebe dois argumentos. O primeiro é o index do primeiro elemento a ser retirado. O segundo é a quantidade de elementos que serão retirados, a partir daquele ponto.
 */

//encontrar a posição de um elemento no array
let index = techs.indexOf('html')





console.log(techs)
console.log(index)