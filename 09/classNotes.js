/* 
9.2 - If e Else



*/

let temperature = 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37


if(highTemperature){
    console.log('Febre Alta')
} else if(mediumTemperature){
    console.log('Febre mdoerada')
}else{
    console.log('Saudável')
}


/* 
9.3 - switch

    * Tem funcionamento similar so 'if' e o 'else', mas possui uma estrutura diferente.

    * Sintaxe:

        switch(expression){
            case 'a': 
                código para expressão a
                break //interrompe o switch
            case 'b':
                código para expressão b
                break
            default: //caso não tenha caido em nenhum dos casos acima
                break
}



*/

let expression = 'a'

switch(expression) {
    case 'a': 
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('default')
        break
}


function calculate(number1, operator, number2) {
    let result = 0

    switch(operator) {
        case '+': 
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}


console.log(calculate(4, '+', 8))


/* 
9.4 - Throw e Try/Catch

    * throw: 
    * try ... catch: 

    Tentar-se-a executar um bloco de código (try), caso dê algum erro o mesmo será disparado (throw), e ele poderá ser capturado (catch)
}


*/

let name = ' '

//throw
function sayMyName(name){
    if (name === ' '){
        // throw new Error("Nome é necesário") // objeto do tipo erro
        throw 'Nome é necessário'
    }

    console.log('depois do erro')
}


//try...catch
try {
    sayMyName(name)

}catch(e) {
    console.log(e)

}

console.log('após a função de erro')

// sayMyName(nome) // haverá um erro de referência, indicado que houve um erro, e que ele não foi tratado (catch)


