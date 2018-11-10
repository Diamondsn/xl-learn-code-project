<template>
  <div>
    <h1>ToDoList</h1>
    <input v-model="content" @keydown.enter="handleClick"/>
    <button @click="handleClick">提交</button>
    <ul>
      <todo-item v-for="(item, index) in items" :key="index" :content="item" :index="index"
      @delete="handleDelete"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
export default {
  data () {
    return {
      content: '',
      items: []
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
    }
  }
}
</script>

<style scoped>
</style>
