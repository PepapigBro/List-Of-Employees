<template>
  <a-modal ref="modal"
          header="Создание пользователя">
    <slot>

    </slot>
  </a-modal>
</template>

<script>
import AModal from '../../../shared/ui/AModal/AModal'

export default {
  name: 'EditEmployeeModal',
  components: {
    AModal
  },
  data () {
    return {
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
</style>
