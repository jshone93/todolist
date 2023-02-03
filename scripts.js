//selectors
const inputBox = document.querySelector(".inputbox");
const todoButton = document.querySelector(".addbtn");
const todoList = document.querySelector(".todolist");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
todoList.addEventListener("click", completeTodo);


//functions
function addTodo(event) {
    event.preventDefault();
    if (inputBox.value === "") {
        return;
    }
    else {
        const todoDiv = document.createElement("div");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.classList.add("checkbox");
        todoDiv.appendChild(checkBox);
        const todoItem = document.createElement("li");
        const delButton = document.createElement("button");
        todoItem.innerText = inputBox.value;
        todoDiv.classList.add("todoItem");
        todoDiv.appendChild(todoItem);
        delButton.innerText = "X";
        delButton.classList.add("deletebtn");
        todoDiv.appendChild(delButton);
        todoList.appendChild(todoDiv);
        inputBox.value = "";
    }
}

function deleteTodo(event) {
    item = event.target;
    if (item.classList[0] === "deletebtn") {
        const todo = item.parentElement;
        todo.remove();
    }
}

function completeTodo(event) {
    item = event.target;
    if (item.classList[0] === "checkbox") {
        pass
    }
}