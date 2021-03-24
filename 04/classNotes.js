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


