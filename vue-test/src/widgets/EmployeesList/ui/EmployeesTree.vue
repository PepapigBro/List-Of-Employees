<template>
  <a-tree :items="employees"
          :item-label="(item) => item.name"
          @sort="sortNodes">
          <template v-slot="{ item }">
            <div class="row-title" >
              <div class="column-title">{{ item.name }}</div>
              <div class="column-phone">{{ item.phone }}</div>
            </div>
          </template>
  </a-tree>
</template>

<script>
import EmployeeRow from '../../../entities/EmployeeRow/ui/EmployeeRow'
import ATree from '../../../shared/ui/ATree/ATree'
import sortEmployees from '../api/sortEmployees'

export default {
  name: 'EmployeesTree',
  components: {
    ATree,
    EmployeeRow
  },
  emits: ['users-updated'],
  data () {
    return {
      employees: [],
      treeKey: 0
    }
  },
  mounted () {
    this.update()
  },
  methods: {
    async update () {
      this.employees = await this.$store.employee.fetchEmployees()
      this.$emit('users-updated', this.employees)
    },
    sortNodes (field) {
      this.employees = sortEmployees(this.employees, field)
    }
  }
}
</script>

<style scoped>
.row-title {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}

.column-phone {
  margin-left: 32px;
}

</style>
