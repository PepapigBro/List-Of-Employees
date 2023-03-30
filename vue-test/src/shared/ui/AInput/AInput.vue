<template>
  <div :class="{ 'with-border': withborder }"
        class="input-wrapper">
    <input
      type="text"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    withborder: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    value (newValue) {
      this.inputValue = newValue
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

input {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.with-border input {
  border: 3px solid #363535;
}
</style>
