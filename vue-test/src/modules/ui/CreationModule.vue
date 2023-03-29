<template>
  <div>
    <a-btn @clcik="openCreationModal" bordered>Create</a-btn>
    <a-btn @clcik="openCreationModal" :icon-path="$getImagePath('close_icon.png')"></a-btn>
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
    openCreationModal () {
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
