var app=new Vue({
    el:"#app",
    //template:"<h1>挂载点模板</h1>",
    data:{
        msg:"Hello Vue",
        content:"this is content",
        firstName:"",
        lastName:"",
        count:0
    },
    computed:{
        fullName:function(){
            return this.firstName+this.lastName;
        }
    },
    watch:{
        // firstName:function(){
        //         this.count++;
        // },
        // lastName:function(){
        //         this.count++;
        // }
        fullName:function(){
            this.count++;
        }
    }
});