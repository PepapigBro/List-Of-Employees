import EmployeeStore from './EmployeeStore'

export default class Store {
  constructor ({localstorageManager}) {
    this.employee = new EmployeeStore(localstorageManager)
  }
}
