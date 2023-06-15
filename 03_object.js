// object 
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
;
printName({ first: "Thomas", last: "Jenkins" });
// more example
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// excess properties
// singer passed as a object, and only check if it has the property of first and last
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, "-").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
printSong(mySong);
var myPoint = { x: 1, y: 2 };
var user = {
    id: 12837,
    username: "catgurl"
};
user.id = 324234;
