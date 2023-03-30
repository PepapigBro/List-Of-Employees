<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <div @click="toggleItem(item)" class="row">
        <div class="icon">
          <div v-if="hasChildren(item)" class="expand-icon">
            {{ isItemExpanded(item) ? "[-]" : "[+]" }}
          </div>
        </div>

        <slot>
          <div class="row-title">{{ itemLabel(item) }}</div>
        </slot>
      </div>
      <div class="sub-tree">
        <a-tree
          v-if="isItemExpanded(item)"
          :items="getChildItems(item)"
          :itemLabel="itemLabel"
        />
    </div>
    </li>
  </ul>
</template>

<script>
export default {
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

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}

.row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px 0;
  cursor: pointer;
}

.row-title {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 24px;
}

.icon {
  width: 32px;
}
.expand-icon {
  font-size: 16px;
}

.sub-tree {
  margin-left: 16px;
}

</style>
