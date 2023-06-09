export default class UniqueEmployeeIdGenerator {
  constructor (store) {
    this._store = store
  }

  async createId () {
    const employees = await this._store.fetchEmployees()
    const existingIds = employees.map(e => e.id)
    const max = existingIds.length > 0 ? Math.max(...existingIds) : 0
    return String(max + 1)
  }
}
