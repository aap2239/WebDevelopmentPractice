// var - globaly scoped, let, const

const name = "john";
const age = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`)

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.split())
const str = "tech, art, music, math"
console.log(str.split(","))
console.log(name.substring(0, 2))

const numbers = new Array(1, 2, 3, 4, 5)
console.log(numbers)

const fruits = ["Apples", "Oranges", "Bananas", true]
fruits[4] = 14
console.log(fruits)
console.log(fruits[1])
console.log(fruits[3])
fruits[5] = "Pineapple"
console.log(fruits)

fruits.push("mangoes")
console.log(fruits)

fruits.unshift("Strawberries")
console.log(fruits)

fruits.pop()
console.log(fruits)

console.log(Array.isArray(fruits))
console.log(Array.isArray("hello"))

console.log(fruits.indexOf("Apples"))

const person = {
    firstName: "Aish",
    lastName: "Pats",
    age: 22,
    hobbies: ["music", "movies", "math"],
    address: {
        street: "556W, 162th St",
        apartment: 54,
        city: "NY",
    }
}

console.log(person)

console.log(person.firstName, person.lastName)
console.log(person.hobbies[2])
console.log(person.address.apartment);
const {lastName, firstName, address: {city}} = person;

console.log(firstName, lastName, city);

person.email = "aishpats@ap.com"
console.log(person)

const todos = [
    {
        id: 1,
        task: "Take out trash",
        isComplete: true,
    },
    {
        id: 2,
        task: "Meeting with Boss",
        isComplete: true,
    },
    {
        id: 3,
        task: "Exercise",
        isComplete: false,
    },
]

console.log(todos)
console.log(todos[1].task)

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)
// Loops
for (let i = 0; i <= 4; i++) {
    console.log(i)
}

for (let todo of todos){
    console.log(todo.task)
}
// For Each, map, filter
todos.forEach(function(todo){
    console.log(todo.task);
});

const todoText = todos.map(function(todo){
    return todo.task;
})

console.log(todoText)

const todoText1 = todos.filter(function(todo){
    return todo.isComplete == true;
}).map(function(todo){
    return todo.task;
});

console.log(todoText1)


// If Else
const x1 = 10;

if (x1 == 10){
    console.log('x is 10')
}
else {
    console.log("x is not 10")
}

const x2 = "10";

if (x2 == 10){
    console.log('x is 10')
}
else {
    console.log("x is not 10")
}


// Functions
function addNums(num1 = 2, num2 = 3){
    return num1 + num2;
}
console.log(addNums(1, 5))

const addNums1 = (num1 = 2, num2 = 4) => {
    return num1 + num2;
}
console.log(addNums1(4, 5))

const addNums2 = num1 => num1 + 3;
console.log(addNums2(4))

todos.forEach((todo) => console.log(todo));

// Object Oriented Programming

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function() {
        return this.dob.getFullYear()
    }

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

Person.prototype.getLastName = function() {
    return this.lastName
}

const person1 = new Person("Jon", "doe", "11/8/2022")

console.log(person1.dob.getDate())
console.log(person1.getBirthYear())
console.log(person1.getFullName())
console.log(person1.getLastName())
console.log(person1)

// Class

class Person4{
    constructor(firstName, lastName, dob, address = "NY"){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        this.address = address;
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getCity(){
        return this.address;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

person2 = new Person4("Ash", "Uzumaki", "5/12/321", "Boston")

console.log(person2)
console.log(person2.getCity())

// DOMs 