<template>
  <a-modal ref="modal"
          header="Создание пользователя">
    <div class="container">
      <a-input v-model="user.name"
               with-border
               placeholder="Имя"
               class="input"/>
      <a-input v-model="user.phone"
               with-border
               placeholder="Телефон"
               class="input"/>
    </div>

  </a-modal>
</template>

<script>
import AModal from '../../../shared/ui/AModal/AModal'
import AInput from '../../../shared/ui/AInput/AInput'

export default {
  name: 'EditEmployeeModal',
  components: {
    AModal,
    AInput
  },
  data () {
    return {
      user: {}
    }
  },
  mounted () {
  },
  methods: {
    async open () {
      return this.$refs.modal.open()
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
  }

  .input{
    margin: 10px 0 0 0;
  }
</style>
