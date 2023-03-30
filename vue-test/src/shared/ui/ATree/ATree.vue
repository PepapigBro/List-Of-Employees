<template>
  <div>
  <div v-for="item in currentLevelItems" :key="item.id">
    <div @click="toggleItem(item)" class="row">
        <div class="icon">
          <div v-if="hasChildren(item)" class="expand-icon">
              {{ isItemExpanded(item) ? "[-]" : "[+]" }}
          </div>
        </div>

        <slot :item="item">
          <div class="row-title">{{ itemLabel(item) }}</div>
        </slot>

      </div>

      <div class="sub-tree">
        <a-tree
          v-if="isItemExpanded(item)"
          :items="items"
          :parent-id="item.id"
          :itemLabel="itemLabel"
        >
        <template v-slot="{ item }">
          <slot :item="item"></slot>
        </template>
        </a-tree>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ATree',
  props: {
    items: {
      type: Array,
      required: true
    },
    parentId: {
      type: String,
      default: null
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
  mounted () {
  },
  computed: {
    currentLevelItems () {
      const currentLevelItems = this.items.filter(i => i.parentId === this.parentId || (!i.parentId && !this.parentId))
      return currentLevelItems
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
      return this.currentLevelItems.filter(child => child.parentId === item.id)
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

.icon {
  width: 24px;
}
.row-title {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 24px;
}

.expand-icon {
  font-size: 16px;
  width: 24px;
}

.sub-tree {
  padding-left: 24px;
}

</style>
