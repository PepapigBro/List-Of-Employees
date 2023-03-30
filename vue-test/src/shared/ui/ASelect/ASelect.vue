<template>
  <div>
    <select v-model="selectedItem"
            :class="selectClasses">
      <option v-for="item in items"
              :key="item.id"
              style="width: 100%"
              :value="item.id">{{ item[label] }}</option>
    </select>
  </div>

</template>

<script>
export default {
  name: 'ASelect',
  props: {
    placeholder: {
      type: String,
      default: 'Please select'
    },
    label: {
      type: String,
      default: 'label'
    },
    items: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedItem: null
    }
  },
  computed: {
    selectClasses () {
      return {
        'disabled': this.disabled
      }
    }
  },
  watch: {
    selectedItem (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

select {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  width: 100%;
}

select.disabled{
  pointer-events: none;
}

.item {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.with-border input {
  border: 3px solid #363535;
}

.placeholder {
  color: #393939;
}
</style>
