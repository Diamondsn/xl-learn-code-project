<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew()" />
    <button v-on:click="deleteStorage">Delete</button>
   <ol>
   <li v-for="item in items" v-bind:class={Finished:item.isFinished} v-on:click="toggleFinished(item)" v-bind:key="item">{{item.label}}</li>
   </ol>
   <p>child tells me:{{childWords}}</p>
   <ComponentA msgFromFather="six"></ComponentA>
   <HelloWorld></HelloWorld>8
  </div>
</template>

<script>
import Store from './store.js'
import ComponentA from "./components/ComponentA"
import HelloWorld from "./components/HelloWorld"
export default {
  data(){
    return{
      title:'this is a to-do list',
      items:Store.fetch(),
      newItem:'',
      childWords:'',
    }
  },
  components:{ComponentA,HelloWorld},
  methods:{
    toggleFinished:function(item){
      item.isFinished=!item.isFinished;
    },
    addNew:function(){
       this.items.push({
         label:this.newItem,
isFinished:false
       });
        this.newItem="";
        
    },
    deleteStorage:function(){
      Store.delete();
      this.items=[];
    },
    tellfather:function(msg){
      this.childWords=msg;
    }
  },
  watch:{
     items:{
         handler:function(items){
            Store.save(items);
         },
         deep:true
     }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.Finished {
text-decoration:underline;
}

button {
 color:red;
 background-color:pink;
}
</style>
