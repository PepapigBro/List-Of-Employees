export default class UniqueEmployeeIdGenerator {
  constructor (store) {
    this._store = store
    console.log('AAAA', store)
  }

  async createId () {
    console.log('create ID')
    const existingIds = await this._store.fetchEmployees()
    const max = existingIds.length > 0 ? Math.max(...existingIds) : 0
    return max + 1
  }
}
