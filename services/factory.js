export class DOMFactory {
  static createTodoItem(todo, onDelete) {
    const li = document.createElement("li")
    li.className = "todo-item"
    li.textContent = todo.text + " " 
    
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "delete-btn"
    deleteBtn.textContent = "Delete"
    deleteBtn.onclick = () => onDelete(todo.id)
    
    li.appendChild(deleteBtn)
    return li
  }
}