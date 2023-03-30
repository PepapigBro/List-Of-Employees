// import User from '../shared/models/User'

export default class LocalStorageManager {
  get (key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }

  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  remove (key) {
    localStorage.removeItem(key)
  }
}
