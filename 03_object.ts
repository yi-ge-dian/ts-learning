// object 
function printName(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
};
printName({ first: "Thomas", last: "Jenkins" })

// more example
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };
function randomCoordinate(): { x: number; y: number } {
    return { x: Math.random(), y: Math.random() };
}

// excess properties
// singer passed as a object, and only check if it has the property of first and last
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true }
printName(singer)

// type alias
// type Point = {
//     x: number;
//     y: number;
// }

// let coordinate: Point = { x: 34, y: 2 };

// function doublePoint(point: Point): Point {
//     return { x: point.x * 2, y: point.y * 2 };
// }

// nested object
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string };
};
function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033
}

function printSong(song: Song): void {
    console.log(`${song.title}-${song.artist}`)
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

printSong(mySong)


// optional properties
// type Point = {
//     x: number;
//     y: number;
//     z?: number;
// }

// const myPoint: Point = { x: 1, y: 2 }

// readonly modifier
type User = {
    readonly id: number;
    username: string;
}
const user: User = {
    id: 12837,
    username: "catgurl"
}
console.log(user.id)
// user.id = 12837

// intersection types
type Circle = {
    radius: number;
};
type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;
const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
}

type Cat = {
    numLives: number;
};
type Dog = {
    breed: string;
};
type CatDog = Cat & Dog & { age: number }
const christy: CatDog = {
    numLives: 4,
    breed: "Labrador Retriever",
    age: 11
}

