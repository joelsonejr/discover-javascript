/* 
10.1 - For
    * Existem dois controles que podem ser utilizado dentro do 'for'
        * break:  para o loop 
        * continue: pula a execução do momento

*/

for (let i = 0; i < 10; i++){
    console.log(`impressão número ${i + 1}`)
}


for (let i = 60; i > 0; i--){
    if(i === 30){
        break
    }

    console.log(`impressão número ${i}`)
}

for (let i = 60; i > 0; i--){
    if(i%3 === 0){
        continue
    }

    console.log(`impressão número ${i}`)
}



/* 
10.2 - While
    * O while é recomendado quando não se sabe o momento em que o loop irá parar.

*/


let i = 0
while (i < 10){
    console.log(i)
    i++

}


/* 
10.3 - For of
    * Vai criar um loop com base em uma variável pré existente

*/


let name = 'Joelson'
let names = ['Joana', 'Julia', 'Jurema']

for (let char of name){
    console.log(char)
}

for (name of names){
    console.log(name)
}


