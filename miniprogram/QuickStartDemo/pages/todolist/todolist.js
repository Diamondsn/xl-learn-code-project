const app = getApp()

Page({
  data: {
     list: [],
     content: ''
  },
  bindAdd: function (e){
    console.log(e)
    if(!this.data.content)return;
    this.data.list=this.data.list.concat([this.data.content]);
    this.setData({
      list: this.data.list,
      content: ''
    })
  },
  bindInput: function(e){
    this.setData({
      content: e.detail.value
    })
  }
})