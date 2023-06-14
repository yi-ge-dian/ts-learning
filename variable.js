// string
var movieTitle = "Amadeus";
movieTitle = "Arrival";
console.log(movieTitle.toUpperCase());
// number
var numCatLives = 9;
numCatLives += 1;
// boolean
var gameOver = false;
gameOver = true;
// type inference
// Type Inference
var tvShow = "Olive Kitteridge";
tvShow = "TheOther Two";
var isFunny = false;
isFunny = true;
// the any type
var thing = "hello";
thing = 1;
thing = false;
// delayed initialization and  implicit any
var movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
// function parameter
function square(num) {
    return num * num;
}
// function greet(person: string) {
//     return `Hi there, ${person}!`
// }
var doSomething = function (person, age, isFunny) {
    return "Hi there, ".concat(person, "!");
};
square(3);
console.log(greet("John"));
doSomething("John", 30, true);
function greet(person) {
    if (person === void 0) { person = "John"; }
    return "Hi there, ".concat(person, "!");
}
