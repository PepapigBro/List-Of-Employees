<template>
  <div class="container">
    <header>
      <div class="header-label">Список пользователей</div>
      <a-btn @click="openCreationModal" bordered>Создать</a-btn>
    </header>
    <employees-list ref="employeesList"
                    class="employees-list"/>

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
        console.log(popupResult)
      }
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
  .container {
    display: flex;
    flex-direction: column;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-label {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    font-size: 32px;
    padding: 0 16px;
  }
  .employees-list {
    margin-top: 32px;
  }

</style>
