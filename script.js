let todos = [];
let userName = prompt("What's your name?").trim(); 

while(!userName){
    userName = prompt("Please enter your name.").trim();
}
document.querySelector("#todoListTitle").innerText = `${userName}'s Todo List`; 



function addTodo(){
    const title = document.querySelector("#todoInput").value;
    if(title) {
        todos.push({
            title: title,
            completed: false
        });

        document.querySelector('#todoInput').value = "";
        render();
    }
    else {
        alert ("Please enter your Todo.");
    }
}

function deleteTodo(index) {
    todos.splice(index,1);
    render();
}

function editTodo(index){
    const newTitle = prompt("Edit your Todo:", todos[index].title);
    if(newTitle) {
        todos[index].title = newTitle;
        render();
    }
}

function toggleCompleted(index) {
    todos[index].completed = !todos[index].completed;
    render();
}

function render() {
    document.querySelector("#todos").innerHTML= "";

    for (let i = 0; i < todos.length; i++){
        const todo = todos[i];
        const div = document.createElement("div");
        const h1 = document.createElement("h1");

        h1.classList.add("todo-title");

        const deleteButton = document.createElement("button");
        const editButton = document.createElement("button");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.onchange = function() {
            toggleCompleted(i);
        };

        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function() {
            deleteTodo(i);
        };

        editButton.innerHTML = "Edit";
        editButton.onclick = function() {
            editTodo(i);
        };

        h1.innerHTML = todo.title;
        if(todo.completed) {
            h1.style.textDecoration = "line-through";
        };

        div.appendChild(checkbox);
        div.appendChild(h1);
        div.appendChild(editButton);
        div.appendChild(deleteButton);
        document.querySelector("#todos").appendChild(div);
    }
}

document.querySelector("#todoInput").addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        addTodo();
    }
});
