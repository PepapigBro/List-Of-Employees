<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <div @click="toggleItem(item)">
        {{ itemLabel(item) }}
        <span v-if="hasChildren(item)">
          {{ isItemExpanded(item) ? '[-]' : '[+]' }}
        </span>
      </div>
      <a-tree v-if="isItemExpanded(item)" :items="getChildItems(item)" :itemLabel="itemLabel" />
    </li>
  </ul>
</template>

<script>
export default {
  // components: {
  //   ATree
  // },
  name: 'ATree',
  props: {
    items: {
      type: Array,
      required: true
    },
    itemLabel: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      expandedItems: []
    }
  },
  methods: {
    toggleItem (item) {
      if (this.isItemExpanded(item)) {
        this.expandedItems.splice(this.expandedItems.indexOf(item.id), 1)
      } else {
        this.expandedItems.push(item.id)
      }
    },
    isItemExpanded (item) {
      return this.expandedItems.includes(item.id)
    },
    hasChildren (item) {
      return this.items.some(child => child.parentId === item.id)
    },
    getChildItems (item) {
      return this.items.filter(child => child.parentId === item.id)
    }
  }

}
</script>
