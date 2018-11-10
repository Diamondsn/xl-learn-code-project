<template>
  <div>
    <h1>ToDoList</h1>
    <input v-model="content"/>
    <button @click="handleClick">提交</button>
    <ul>
      <li v-for="(item,index) in items" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      items: []
    }
  },
  methods: {
    handleCllick () {
      this,items.push(this.content);
      this.content='';
    }
  }
}
</script>

<style>
</style>
