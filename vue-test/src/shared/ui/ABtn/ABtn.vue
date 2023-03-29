<template>
  <button
    class="button"
    :style="btnStyles"
    :class="btnClasses"
    @click="$emit('click', $event)">
    <div>
      <slot></slot>
    </div>
    <img v-if="iconPath"
        :style="iconStyles"
         :src="iconPath"
         />
  </button>
</template>

<script>

const availableSizes = Object.freeze({
  xs: {name: 'xs', size: '1em'},
  sm: {name: 'sm', size: '1.2em'},
  md: {name: 'md', size: '1.5em'}
})

export default {
  name: 'ABtn',
  emits: ['click'],
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
    iconStyles () {
      return {
        'height': this.sizePx
      }
    },
    btnStyles () {
      return {
        'font-size': this.sizePx,
        'padding': this.iconPath ? '' : '0.5em 0.5em'
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
    display: flex;

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

  img {
    aspect-ratio: 1/1;
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
  }
</style>
