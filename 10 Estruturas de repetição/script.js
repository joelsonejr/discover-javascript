/* 
10.4 - For in 
    * Vai criar um loop em cima das propriedades de um objeto.

*/

let person = {
    name: 'Joan',
    age: 30,
    weight: 88.6
}

for (let property in person){
    console.log(property)
    console.log(person[property])
}