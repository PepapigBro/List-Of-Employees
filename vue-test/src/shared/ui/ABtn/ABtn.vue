<template>
  <button
    class="button"
    :style="btnStyles"
    :class="btnClasses">
    <slot></slot>

    <img v-if="iconPath"
         :src="iconPath"
         />
  </button>
</template>

<script>

const availableSizes = Object.freeze({
  xs: {name: 'xs', size: '2em'},
  sm: {name: 'sm', size: '3em'},
  md: {name: 'md', size: '4em'}
})

export default {
  name: 'ABtn',
  props: {
    bordered: {type: Boolean, default: false},
    iconPath: {type: String, default: null},
    size: {
      type: String,
      validator: function (value) {
        return availableSizes[value]
      },
      default: availableSizes.xs.name
    }
  },
  data () {
    return {
    }
  },
  computed: {
    btnStyles () {
      return {
        'font-size': this.sizePx,
        '': this.bordered
      }
    },
    btnClasses () {
      return {
        'bordered': this.bordered,
        'not-bordered': !this.bordered
      }
    },
    sizePx () {
      return availableSizes[this.size].size
    }
  }
}
</script>

<style scoped>
 .button {
    display: inline-block;
    padding: 0.5em 0.5em;
    background: #fff;
    color: tomato;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .button.not-bordered{
    border: none
  }
  .button.bordered{
    border: 2px solid tomato;
    border-radius: 3px;
  }

  .button.bordered:hover {
    background: tomato;
    color: #fff;
  }
</style>
