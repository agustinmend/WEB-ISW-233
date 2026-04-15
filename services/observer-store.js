export class ObservableStore {
  constructor() {
    this.todos = []
    this.observers = []
  }
  subscribe(observer) {
    this.observers.push(observer)
  }
  notify() {
    this.observers.forEach(observer => observer.update(this.todos))
  }
  add(todo) {
    this.todos.push(todo)
    this.notify()
  }
  remove(id) {
    this.todos = this.todos.filter(t => t.id !== id)
    this.notify()
  }
}