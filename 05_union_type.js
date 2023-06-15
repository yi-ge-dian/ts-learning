// union type
var age = 23;
age = "24";
age = 21;
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
// narrowing union type
function printAge(age) {
    console.log("You are ".concat(age, "years old"));
}
printAge("87");
printAge(23);
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calculateTax(23, .07));
console.log(calculateTax("23", .07));
