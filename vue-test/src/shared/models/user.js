export default class User {

  constructor ({id, name, phone, parentId} = {}) {
    this.id = id ?? crypto.randomUUID()
    this.name = name
    this.phone = phone
    this.parentId = parentId
  }

}
