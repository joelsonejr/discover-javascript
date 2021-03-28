// 5.2 - Agrupando declarações

// agrupando declarações

let joe, numbner;

joe = "person";

number = 14;

console.log(joe + " " + number);

console.log(joe, number);


// 5.3 - Interpolando valores, utilizando template literals.


let age = 38;
let name = "Joelson";


console.log(`o ${name} tem ${age} anos`);

// 5.4 - Objects

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person.name);

console.log(person.name, person.age);

// 5.5 - Arryas

const animals = [
    {
        name: 'Lion',
        age: 12
    },
    {
        name: 'Monkey',
        age: 7
    },
    {
       name: 'Cat',
       age: 3
    }
];

console.log(animals[0]);
console.log(animals.length);

function listArray(array){
    for (let i of array){
        console.log(i.name);
    }
};

listArray(animals);


// 5.6 - Exercícios

// Declare uma variável de nome weight
let weight = 89;

//Qual o tipo da variável acima?
console.log(typeof weight);

//Declare uma variável e atribua valores para cada um dos dados:
    /* *name : string
    * age : number (integer)
    * stars: number (float)
    * isSubscribed: Boolean */


let student = {
    name: 'Joe',
    age: 38,
    weight: 102,
    stars: 3.5,
    isSubscribed: true
}

//Qual o tipo da variável acima?
console.log(typeof student);

//Mostre a seguinte mensagem <name> de idade <age> e <weigth> kg.

console.log(`${student.name} de idade ${student.age} e ${student.weight} kg.`);

//Declare uma variável de nome students e atribua a ela um array vazio

let students = [];
console.log(students);

//Atribua o objeto student à essa variável
students = [
    student
]
console.log(students);

//Imprima no console a posição 0 do array
console.log(students[0]);

//crie um novo student e coloque na posição 1 do array students

const jane = {
    name: 'Jane',
    age: 35,
    weight: 'undefined',
    stars: 3.8,
    isSubscribed : true
}

students[1] = jane;
console.log(students);
console.log(students[1]);

//sem executar, responda a saída do código abaixo

console.log(a);
var a = 1;