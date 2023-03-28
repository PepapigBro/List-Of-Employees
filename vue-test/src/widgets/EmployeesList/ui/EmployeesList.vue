<template>
  <ATree :nodes="nodes"
          @sort="sortNodes">
          <template #default="{node}">
            <employee-row :node="node"/>
          </template>
  </ATree>
</template>

<script>
import EmployeeRow from '../../../entities/EmployeeRow/ui/EmployeeRow'
import ATree from '../../../shared/ui/ATree/ATree'
import fetchEmployees from '../api/fetchEmployees'
import sortEmployees from '../api/sortEmployees'

export default {
  name: 'EmployeesList',
  components: {
    ATree,
    EmployeeRow
},
  data () {
    return {
      nodes: []
    }
  },
  mounted(){
    this.congigureTree()
  },
  methods:{
    async congigureTree(){
      this.nodes = await fetchEmployees()
    },
    sortNodes(field){
      this.nodes = sortEmployees(this.nodes, field)
    }
  }
}
</script>

<style scoped>

</style>
