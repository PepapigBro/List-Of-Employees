<template>
  <div class="container">
    <header>
      <div class="header-label">Список пользователей</div>
      <a-btn @click="openCreationModal" bordered>Создать</a-btn>
    </header>
    <employees-tree ref="employeesTree"
                    class="employees-tree"
                    @users-updated="onUsersUpdated"/>
    <div v-if="showNoItemsBox"
         class="no-items-box">
      Нет записей
    </div>

    <edit-employee-modal
      ref="editEmployeeModal"/>
  </div>
</template>

<script>
import ABtn from '../../shared/ui/ABtn/ABtn'
import EditEmployeeModal from '../../widgets/EditEmployeeModal/ui/EditEmployeeModal'
import EmployeesTree from '../../widgets/EmployeesList/ui/EmployeesTree'

export default {
  name: 'CreationModule',
  components: {
    EmployeesTree,
    EditEmployeeModal,
    ABtn
  },
  data () {
    return {
      showNoItemsBox: true
    }
  },
  methods: {
    onUsersUpdated (users) {
      this.showNoItemsBox = !users.length
    },
    async openCreationModal () {
      const user = await this.$refs.editEmployeeModal.open()

      if (user) {
        console.log(user)
        await this.$store.employee.addNew(user)
        this.$refs.employeesTree.update()
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
    padding: 0 16px 0 0;
  }
  .employees-tree {
    margin-top: 32px;
    max-height: 60vh;
    max-width: 80vw;
    overflow: auto;
  }

  .no-items-box {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    font-size: 32px;
    background-color: #eee;
  }

</style>
