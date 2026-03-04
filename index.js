import { CommandExecutor, Command, Commands } from "./services/command.js";
import { TodoList } from "./services/todoList.js";

globalThis.DOM = {};

const DOM = globalThis.DOM;

document.addEventListener("DOMContentLoaded", () => {
  DOM.todoList = document.getElementById("todo-list");
  DOM.addBtn = document.getElementById("add-btn");
  DOM.todoInput = document.getElementById("todo-input");

  const todoList = TodoList.getInstance()
  const updateDOM = () => {
    todoList.items.forEach((item) => {
      const li = document.createElement("li")
      li.className = "todo-item"
      li.innerHTML = `
        <span>${item.text}</span>
        <button class="delete-btn">Eliminar</button>
      `
      DOM.todoList.appendChild(li)
    })
  }
  todoList.addObserver(updateDOM)


  DOM.addBtn.addEventListener("click", () => {
    const cmd = new Command(Commands.ADD);
    CommandExecutor.execute(cmd);
  });

  DOM.todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
    }
  });

});
