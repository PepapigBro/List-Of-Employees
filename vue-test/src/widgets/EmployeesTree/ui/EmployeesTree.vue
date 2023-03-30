<template>
  <a-tree :items="employees"
          :columns="columns">
          <template v-slot="{ item, column }">
            <div class="cell" >{{ item[column.field] }}</div>
          </template>
  </a-tree>
</template>

<script>
import ATree from '../../../shared/ui/ATree/ATree'
import Column from '../../../shared/ui/ATree/Column'

export default {
  name: 'EmployeesTree',
  components: {
    ATree
  },
  emits: ['users-updated'],
  data () {
    return {
      employees: [],
      columns: [
        new Column({title: 'Имя', field: 'name'}),
        new Column({title: 'Телефон', field: 'phone'})
      ]
    }
  },
  mounted () {
    this.update()
  },
  methods: {
    async update () {
      this.employees = await this.$store.employee.fetchEmployees()
      this.$emit('users-updated', this.employees)
    }
  }
}
</script>

<style scoped>
.cell {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 24px;
}
</style>
