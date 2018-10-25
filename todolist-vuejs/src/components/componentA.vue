<template>
<div>
    <h1>{{msg}}</h1>
    <h1>{{msgFromFather}}</h1>
    <button v-on:click="ClickA">ClickMe</button>
</div>
</template>

<script>
export default {
    data(){
        return{
            msg:"Hello Component A"
        }
    },
    props:["msgFromFather"],
    methods:{
        ClickA:function(){
            this.msgFromFather=this.msg;
        }
    },
}
</script>

<style>
</style>