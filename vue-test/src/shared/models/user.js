
export default class User {
  constructor ({id, name, phone, parentId} = {}) {
    this.id = id
    this.name = name
    this.phone = phone
    this.parentId = parentId
  }
}
