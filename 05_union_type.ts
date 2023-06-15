// union type
let age: number | string = 23;
age = "24"
age = 21;

type Point = {
    x: number,
    y: number
}

type Loc = {
    lat: number,
    long: number
}

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

// narrowing union type
function printAge(age: number | string): void {
    console.log(`You are ${age}years old`);
}

printAge("87");
printAge(23);

function calculateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calculateTax(23, .07));
console.log(calculateTax("23", .07));

// union type and arrays
const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1, 2, 3, 4, true, "asdas", {}]
// const stuff: (number | string)[] = [1, 2, 3, "das"]
// const stuff: number[] | string[] = ["asd", "asc"]
const coords: (Point | Loc)[] = []
coords.push({ lat: 321.213, long: 23.334 })
coords.push({ x: 213, y: 1234 })

// literal types
let zero: 0 = 0;
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayofWeek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

let day: DayofWeek = "Monday";