export class AddTodoCommand {
  constructor(receiver, todo) {
    this.receiver = receiver
    this.todo = todo
  }
  execute() {
    this.receiver.add(this.todo)
  }
  undo() {
    this.receiver.remove(this.todo.id)
  }
}

export class CommandHistory {
  constructor() {
    this.history = []
  }
  execute(command) {
    command.execute()
    this.history.push(command)
  }
  undo() {
    const command = this.history.pop()
    if (command) command.undo()
  }
}

export class RemoveTodoCommand {
  constructor(receiver, id) {
    this.receiver = receiver
    this.id = id
    this.todoToRestore = this.receiver.todos.find(t => t.id === id)
  }

  execute() {
    this.receiver.remove(this.id)
  }

  undo() {
    if (this.todoToRestore) {
      this.receiver.add(this.todoToRestore)
    }
  }
}