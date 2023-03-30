
export default class EmployeeStore {
  constructor (localstorageManager) {
    this._localstorageManager = localstorageManager
  }

  fetchEmployees () {
    return new Promise((resolve, reject) => {
      const employees = this._localstorageManager.getItem('employees')
      resolve(employees)
    })
  }
}
