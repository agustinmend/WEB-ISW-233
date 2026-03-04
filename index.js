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
    DOM.todoList.innerHTML = ""
    todoList.items.forEach((item) => {
      const li = document.createElement("li")
      li.className = "todo-item"
      const span = document.createElement("span")
      span.textContent = item.text
      const button = document.createElement("button")
      button.className = "delete-btn"
      button.textContent = "Eliminar"
      li.appendChild(span)
      li.appendChild(button)
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
