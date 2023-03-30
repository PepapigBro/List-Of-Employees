
export default class EmployeeStore {
  constructor (localstorageManager) {
    this._localstorageManager = localstorageManager
  }

  fetchEmployees () {
    return new Promise((resolve, reject) => {
      const employees = this._localstorageManager.get('employees') || []
      resolve(employees)
    })
  }

  async addNew (user) {
    const employees = await this.fetchEmployees()
    employees.push(user)
    this._localstorageManager.set('employees', employees)
    return this
  }
}
