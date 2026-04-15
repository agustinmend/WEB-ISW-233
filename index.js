import { ObservableStore } from "./services/observer-store.js";
import { StorageManager } from "./services/storage.js";
import { CommandHistory, AddTodoCommand, RemoveTodoCommand } from "./services/command.js";
import { DOMFactory } from "./services/factory.js";

document.addEventListener("DOMContentLoaded", () => {
  const store = new ObservableStore()
  const storage = new StorageManager()
  const history = new CommandHistory()
  
  const todoInput = document.getElementById("todo-input")
  const addBtn = document.getElementById("add-btn")
  const todoList = document.getElementById("todo-list")

  store.subscribe(storage)
  store.subscribe({
    update: (todos) => {
      todoList.innerHTML = ''
      todos.forEach(todo => {
        const el = DOMFactory.createTodoItem(todo, (id) => {
          const cmd = new RemoveTodoCommand(store, id)
          history.execute(cmd);
        })
        todoList.appendChild(el);
      })
    }
  })

  const initialData = storage.load();
  initialData.forEach(t => store.add(t));

  addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text) {
      const todo = { id: Date.now(), text };
      const command = new AddTodoCommand(store, todo);
      history.execute(command);
      todoInput.value = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === 'z') {
      history.undo();
    }
  });
});