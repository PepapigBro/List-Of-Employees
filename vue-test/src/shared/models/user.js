export default class User {

  constructor ({id, title, phone, parentId}) {
    this.id = id ?? crypto.randomUUID()
    this.title = title
    this.phone = phone
    this.parentId = parentId
  }

}
