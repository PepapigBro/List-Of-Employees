<template>
  <div class="container">
    <header class="tree-row">
      <div v-for="column in columns"
      :key="column.field"
      :style="{'width': column.width}"
      class="column-title"
      @click="sort(column)"
      >
      {{ column.title }}
      </div>
    </header>
    <div v-for="item in currentLevelItems"
        :key="item.id" class="column">
        <div class="tree-row">
    <div v-for="(column, index) in columns"
      :key="column.field"
      :style="{'width': column.width}"
      >

    <div @click="toggleItem(item)" class="row"
    >
        <div v-if="index == 0"
             class="icon">
          <div v-if="hasChildren(item)" class="expand-icon">
              {{ isItemExpanded(item) ? "[-]" : "[+]" }}
          </div>
        </div>
        <slot :item="item" :column="column">
          <div class="row-title">{{ item[column.field] }}</div>
        </slot>
      </div>
    </div>
    </div>

    <div class="sub-tree">
        <a-tree
          v-if="isItemExpanded(item)"
          :items="items"
          :columns="columns"
          :parent-id="item.id"
        >
        <template v-slot="{ item, column }">
          <slot :item="item" :column="column">
            <div class="row-title">{{ item[column.field] }}</div>
          </slot>
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
    columns: {
      type: Array,
      default: () => [],
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
    },
    sort (column) {
      column.asc = !column.asc
      const sortField = column.field
      const compare = (a, b) => {
        if (a[sortField] < b[sortField]) {
          return column.asc ? 1 : -1
        } else {
          return column.asc ? -1 : 1
        }
      }

      this.items = this.items.sort(compare)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.column{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.tree-row {
  display: flex;
  justify-content: space-between;
  column-gap: 32px;
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

.column-title {
  cursor: pointer;
}

</style>
