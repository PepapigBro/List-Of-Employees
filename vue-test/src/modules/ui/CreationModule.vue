<template>
  <div>
    <a-btn @click="openCreationModal" bordered>Создать</a-btn>
    <employees-list ref="employeesList"/>
    <edit-employee-modal
      ref="editEmployeeModal"
      @confirm="saveEmployee"/>
  </div>
</template>

<script>
import ABtn from '../../shared/ui/ABtn/ABtn'
import EditEmployeeModal from '../../widgets/EditEmployeeModal/ui/EditEmployeeModal'
import EmployeesList from '../../widgets/EmployeesList/ui/EmployeesList'
import createEmployee from '../api/createEmployee'

export default {
  name: 'CreationModule',
  components: {
    EmployeesList,
    EditEmployeeModal,
    ABtn
  },
  data () {
    return {
    }
  },
  methods: {
    async openCreationModal () {
      const popupResult = await this.$refs.editEmployeeModal.open()

      if (popupResult) {
        alert('Confirmed!')
      }
      this.$refs.editEmployeeModal.open()
    },
    async saveEmployee (employee) {
      try {
        await createEmployee(employee)
        this.$refs.employeesList.update()
      } catch (error) {
        // TODO: вынести в отдельный общий обработчик
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
