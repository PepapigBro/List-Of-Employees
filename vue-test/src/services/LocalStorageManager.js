import User from '../shared/models/User'

export default class LocalStorageManager {
  getItem (key) {
    // const data = localStorage.getItem(key)
    // return data ? JSON.parse(data) : null
    const fakeItems = [
      new User({name: 'Mikle', phone: '888', id: '1'}),
      new User({name: 'Dmitry', phone: '666', id: '2'}),
      new User({name: 'Maria', phone: '555', id: '3'}),
      new User({name: 'Svetlane', phone: '333333', id: '4'})
    ]

    return fakeItems
  }

  setItem (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  removeItem (key) {
    localStorage.removeItem(key)
  }
}
