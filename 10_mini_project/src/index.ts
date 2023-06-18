// const printDouble= (msg : string) : void =>{
//     console.log(msg);
//     console.log(msg);
// }

// printDouble("1.23456789");

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
console.log(btn);

// another way to change to the htmlinput element
(<HTMLInputElement>input).value
// as is more clear than <> , <> is used to behaviour templates


"hello".replaceAll("hello", "!");

// btn?.addEventListener("click", function () {
//     alert("CLICKED!!!");
// });

// none null assertions, !
btn.addEventListener("click", function () {
    alert(input.value)
});


// type assertions , as
// let mystery: unknown = 4;

// const numChars = (mystery as string).length;

