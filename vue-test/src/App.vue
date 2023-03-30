<template>
  <div id="app">
    <div class="container">
     <employees-page/>
    </div>
  </div>
</template>

<script>
import EmployeesPage from './pages/EmployeesPage'

export default {
  name: 'App',
  components: {
    EmployeesPage
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;
}
</style>
