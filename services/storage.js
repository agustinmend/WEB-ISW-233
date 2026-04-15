export class StorageManager {
  static instance = null
  
  constructor() {
    if (StorageManager.instance) {
      return StorageManager.instance
    }
    this.storageKey = 'app_todos'
    StorageManager.instance = this
  }
  
  save(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data))
  }
  
  load() {
    return JSON.parse(localStorage.getItem(this.storageKey)) || []
  }
  
  update(todos) {
    this.save(todos);
  }
}