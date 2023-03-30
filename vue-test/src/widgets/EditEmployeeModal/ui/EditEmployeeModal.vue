<template>
  <a-modal ref="modal" header="Создание пользователя">
    <div class="container">
      <div class="left-column">
        <label class="input-label"> Имя </label>
        <label class="input-label"> Телефон </label>
        <label class="input-label">Руководитель </label>
      </div>

      <div class="right-column">
        <a-input
          v-model="user.name"
          with-border
          placeholder="Имя"
          class="input"
        />
        <a-input
          v-model="user.phone"
          with-border
          placeholder="Телефон"
          class="input"
        />
        <a-select
          v-model="user.parentId"
          :items="items"
          placeholder="Руководитель"
          label="name"
          class="input"
        />
      </div>
    </div>
  </a-modal>
</template>

<script>
import AModal from '../../../shared/ui/AModal/AModal'
import AInput from '../../../shared/ui/AInput/AInput'
import ASelect from '../../../shared/ui/ASelect/ASelect'

export default {
  name: 'EditEmployeeModal',
  components: {
    AModal,
    AInput,
    ASelect
  },
  data () {
    return {
      user: {},
      items: []
    }
  },
  methods: {
    async open () {
      console.log('open', this.$store)
      this.$store.employee.fetchEmployees().then(items => { this.items = items })
      return this.$refs.modal.open()
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  margin-top: 16px;
}

.left-column {
  display: flex;
  flex-direction: column;
}
.right-column {
  display: flex;
  flex-direction: column;
}

.input {
  margin: 10px 0 10px 0;
  width: 100%;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.input-label {
  margin: 10px 0;
  text-align: left;
  padding: 10px 30px 10px 0;
  font-size: 16px;
}
</style>
