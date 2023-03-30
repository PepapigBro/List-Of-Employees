<template>
  <a-tree :items="employees"
          :item-label="(item) => item.name"
          @sort="sortNodes">
          <!-- <template #default="{node}">
            <employee-row :node="node"/>
          </template> -->
  </a-tree>
</template>

<script>
import EmployeeRow from '../../../entities/EmployeeRow/ui/EmployeeRow'
import ATree from '../../../shared/ui/ATree/ATree'
import sortEmployees from '../api/sortEmployees'

export default {
  name: 'EmployeesList',
  components: {
    ATree,
    EmployeeRow
  },
  data () {
    return {
      employees: []
    }
  },
  mounted () {
    this.congigureTree()
  },
  methods: {
    async congigureTree () {
      this.employees = await this.$store.employee.fetchEmployees()
    },
    sortNodes (field) {
      this.employees = sortEmployees(this.employees, field)
    }
  }
}
</script>

<style scoped>

</style>
