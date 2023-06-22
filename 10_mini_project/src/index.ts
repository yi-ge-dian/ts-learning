// const printDouble= (msg : string) : void =>{
//     console.log(msg);
//     console.log(msg);
// }

// printDouble("1.23456789");

interface Todo {
    text: string;
    completed: boolean;
}


const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
    const todoJson = localStorage.getItem("todos")!;
    if (todoJson === null) return [];
    return JSON.parse(todoJson);
}

function saveTodos(): void {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    }
    createTodo(newTodo);
    todos.push(newTodo);

    saveTodos();
    input.value = "";
}

function createTodo(todo: Todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    newLI.append(checkbox);
    newLI.append(todo.text);
    list.append(newLI); 
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    })
}

form.addEventListener("submit", handleSubmit);

// console.log(btn);

// another way to change to the htmlinput element
// (<HTMLInputElement>input).value
// as is more clear than <> , <> is used to behaviour templates


// "hello".replaceAll("hello", "!");

// btn?.addEventListener("click", function () {
//     alert("CLICKED!!!");
// });

// none null assertions, !
// btn.addEventListener("click", function () {
//     alert(input.value)
// });


// type assertions , as
// let mystery: unknown = 4;

// const numChars = (mystery as string).length;

