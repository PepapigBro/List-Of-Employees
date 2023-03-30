<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <header>
        <div class="header-title"><h3>{{ header }}</h3></div>
        <a-btn @click="close" :icon-path="$getImagePath('close_icon.png')" size="sm"></a-btn>
      </header>

      <slot></slot>
      <hr />

      <footer>
        <slot name="actions" :close="close" :confirm="confirm">
          <a-btn @click="confirm">{{ okBtnText }}</a-btn>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import ABtn from '../../../shared/ui/ABtn/ABtn.vue'

export default {
  name: 'AModal',
  popupController: null,
  components: {
    ABtn
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
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
.popup {
  display: flex;
  flex-direction: column;
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

footer {
  display: flex;
  justify-content: flex-end;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title{
  /* margin: 0 30px 0 0; */
}

</style>
