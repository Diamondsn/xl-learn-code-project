<template>
  <div>
    <h1>ToDoList</h1>
    <input v-model="content" @keydown.enter="handleClick"/>
    <button @click="handleClick">提交</button>
    <button @click="handleDeleteStorage">清空缓存</button>
    <ul>
      <todo-item v-for="(item, index) in items" :key="index" :content="item" :index="index"
      @delete="handleDelete"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
const STORAGE_KEY = 'vueclitodolist'
function fetch () {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || []
}
function save (items) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}
function deleteItems () {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([]))
}
export default {
  data () {
    return {
      content: '',
      items: fetch()
    }
  },
  components: {
    'todo-item': TodoItem
  },
  methods: {
    handleClick () {
      if (this.content) {
        this.items.push(this.content)
      }
      this.content = ''
    },
    handleDelete (index) {
      this.items.splice(index, 1)
    },
    handleDeleteStorage () {
      deleteItems()
    }
  },
  watch: {
    items: function () {
      save(this.items)
    }
  }
}
</script>

<style scoped>
</style>
