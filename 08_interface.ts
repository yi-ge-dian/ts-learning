// interface
interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 123, y: 123 }

// optional and readonly properties
interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    // sayHi: () => string,
    sayHi(): string;
}

const thomas: Person = {
    id: 123,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: () => { return "Hi"; }
}

thomas.first = "Hardy"
// thomas. id = 456


// interface methods parameters

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.5));

// reopening the interface

interface Dog {
    name: string;
    age: number;
}
interface Dog {
    breed: string;
    bark(): string;
}
const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "WOOFWOOF!";
    }
}

interface ServiceDog extends Dog {
    job:"drugsniffer"|"bomb" |"guidedog";
}    


const chewy:ServiceDog ={
    name: "Chewy",
    age:4.5,
    breed: "Lab",
    bark(){
        return "Bark!"
    },
    job:"guidedog"
}

// multiple inheritance
interface Human {
    name: string;
}

interface Employee {
    readonly id : number;
    email: string;
}

interface Engineer extends Human , Employee{
    level: string;
    languages: string[];
}

const pierre:Engineer={
    name: "Pierre",
    id:123897,
    email:"pierre@gmail.com",
    level: "senior",
    languages:["JS", "Python"],
}


// types and interfaces
// 1. interface can reopen
// 2. interface can extend
// 3. type aliases can discribe any sort of type
