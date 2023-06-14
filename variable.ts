// string
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
console.log(movieTitle.toUpperCase());

// number
let numCatLives: number = 9;
numCatLives += 1;

// boolean
let gameOver: boolean = false;
gameOver = true;


// type inference
// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "TheOther Two";

let isFunny = false;
isFunny = true;

// the any type
let thing: any = "hello";
thing = 1;
thing = false;

// delayed initialization and  implicit any
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie;

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}

// function parameter
function square(num: number) {
    return num * num;
}

// function greet(person: string) {
//     return `Hi there, ${person}!`
// }

const doSomething = (
    person: string,
    age: number,
    isFunny: boolean) => {
    return `Hi there, ${person}!`;
}

square(3);
console.log(greet("John"));
doSomething("John", 30, true);

// function default parameters
function greet(person: string = "John") {
    return `Hi there, ${person}!`;
}

// function return type

const add = (x: number, y: number): number => {
    return x + y;
}

function rando(num: number) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

// anonymous function





