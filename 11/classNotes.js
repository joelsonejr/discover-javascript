/* 
EXERCÍCIOS

11.1 -  Sistema de notas Escolares

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

        de 90 para cima     A
        entre 80 - 89       B
        entre 70 - 79       C
        entre 60 - 69       D
        menor que 60        F

*/

let grade = Math.round(Math.random()*100)

function gradeToLetter(grade){
    let gradeA = grade >= 90 && grade <= 100
    let gradeB = grade >= 80 && grade <= 89
    let gradeC = grade >= 70 && grade <= 79
    let gradeD = grade >= 60 && grade <= 69
    let gradeF = grade < 60 && grade >= 0

    let convertedGrade


    switch(true){
        case gradeA:
            convertedGrade = 'A'
            break
        case gradeB:
            convertedGrade = 'B'
            break
        case gradeC:
            convertedGrade = 'C'
            break
        case gradeD:
            convertedGrade = 'D'
            break
        case gradeF:
            convertedGrade = 'F'
            break
        default:
            convertedGrade = 'Nota inválida'
    }

    return convertedGrade
}


console.log(gradeToLetter(grade))
console.log(grade)





/* 
    Minha primeira solução

function convertGrade(grade){
    if (grade >= 90){
        console.log('A')
    }else if (grade >= 80 && grade <= 89){
        console.log('B')
    }else if (grade >= 70 && grade <=79){
        console.log('C')
    }else if (grade >= 60 && grade <= 69){
        console.log('D')
    }else if (grade < 60){
        console.log('F')
    }

} */

/* 
EXERCÍCIOS

11.2 - Sistema de caixa familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas, e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo·

*/

let familySavings = {
    income: [2500, 3200, 250.43, 360.45],
    outcome: [320.34, 128.45, 176.87, 1450.00]
}

function sumMoney(array){
    let total = 0
    
    for (let value of array){
        total += value
        
    }
    
    return total
}


function checkBalance(accountName){
    let revenue = sumMoney(accountName.income)

    let expenses = sumMoney(accountName.outcome)
    

    let balance = revenue - expenses

    let positeBalance = balance >= 0
    let negativeBalance = balance <= 0

    switch(true){
        case positeBalance:
            return 'Positivo'
            break
        case negativeBalance:
            return 'Negativo'
            break 
        default:
            console.log('Valor inválido')
            break
    }
}

let howIsThebalance = checkBalance(familySavings)
let avaliableMoney = sumMoney(familySavings.income) - sumMoney(familySavings.outcome)


console.log(`Seu saldo é ${howIsThebalance}, de R$ ${avaliableMoney.toFixed(2)}`)




/* 
EXERCÍCIOS

11.3 - Celsius em Fahrenheit 

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para a outra.

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/


// **solução do professor **


//transform ('50')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    //fluxo ideal F - > C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C' 

    //fluxo alternativo C -> F
    if(celsiusExists){
         updatedDegree = Number(degree.toUpperCase().replace("C", ""))
         formula = (celsius) => celsius * 9/5 + 32
         degreeSign = 'F' 
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    console.log(transformDegree('10Z'))
}catch(error){
    console.log(error.message)
}


/* 
    **minha solução **



let temperature = '100Y'

function convert(newTemperature, unit) {
    let celsius = unit.includes('C') 
    let fahrenheit = unit.includes('F')
    let outputTemperature 
    let outUnit = 'F'

    if(!celsius && !fahrenheit){
        return 'Unidade de temperatura desconhecida'
        
    }

    switch(true){
        case celsius:
            outputTemperature = newTemperature * 9/5 + 32
            outputTemperature += outUnit
            break
        case fahrenheit:
            outputTemperature = (newTemperature - 32) * 5/9
            outUnit = 'C'
            outputTemperature += outUnit
            break
    }

    return outputTemperature
}

function celsiusFahrenheit(temperature){
    temperature = temperature.toUpperCase() 
    let unit = temperature[temperature.length-1]
    let newTemperature = temperature.slice(0,temperature.length-1)
    let temperatureOut

    newTemperature = parseInt(newTemperature, 10)

    temperatureOut = convert(newTemperature, unit)

    console.log( temperatureOut)

}

celsiusFahrenheit(temperature) */



/* 
EXERCÍCIOS

11.4 - Buscando e contando dados em Arrays

Baseado no array de livros por categoria abaixo, faça os seguintes desafios
    * Conta o número de categorias e o número de livros em cada uma delas.
    * Contar o número de autores
    * Mostrar livros do auto Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milinonária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Voce é insubistituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como  enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábito das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }
        ],
    }
]


// contar os livros e as categorias

let numberOfCategories = booksByCategory.length
console.log(`Existem ${numberOfCategories} categorias de livros`)


for (let category of booksByCategory) {
    console.log(`O total de livros da categoria ${category.category} é ${category.books.length}`)
   }

function countAuthors(){
    let authors = []

    for (category of booksByCategory) {
        for(book of category.books){
            authors.push(book.author)
        }
    }

    let totalAuthors = [... new Set(authors)]

    totalAuthors = totalAuthors.length

    console.log(`O total de autores é ${totalAuthors}`)

}

countAuthors()




function listBooks(name){
    let author = name
    let books = []

    for (category of booksByCategory) {
        for(book of category.books){
            if(book.author.includes(author)){
                books.push(book.title)
            }
                
        }
    }

    console.log(`Os livros de ${author} são: ${books.join(", ")} `)
}

listBooks('Augusto Cury')

