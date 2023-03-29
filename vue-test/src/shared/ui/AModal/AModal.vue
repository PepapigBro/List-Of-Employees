<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <h3>{{ header }}</h3>
      <hr />
      <slot></slot>
      <hr />
      <div class="footer">
        <slot name="actions" :close="close" :confirm="confirm">
          <a-btnVue @click="confirm">{{ okBtnText }}</a-btnVue>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import ABtnVue from '../../../shared/ui/ABtn/ABtn.vue'

export default {
  name: 'AModal',
  popupController: null,
  components: {
    ABtnVue
  },
  props: {
    header: {type: String, default: 'Хидер'},
    okBtnText: {type: String, default: 'Сохранить'}
  },
  data () {
    return {
      isOpen: false
    }
  },
  mounted () {
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    handleKeydown (e) {
      if (this.isOpen && e.key === 'Escape') {
        this.close()
      }
    },
    open () {
      let resolveFunc
      let rejectFunc
      const popupPromise = new Promise((resolve, reject) => {
        resolveFunc = resolve
        rejectFunc = reject
      })

      this.$options.popupController = { resolve: resolveFunc, reject: rejectFunc }
      this.isOpen = true

      return popupPromise
    },

    confirm () {
      this.$options.popupController.resolve(true)
      this.isOpen = false
    },

    close () {
      this.$options.popupController.resolve(false)
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
.popup {
  top: 50px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 101;
  background-color: white;
  border-radius: 10px;
}

.popup h3 {
  text-align: center;
  margin: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.footer {
  text-align: right;
}
</style>
