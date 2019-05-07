Page({
  onTap:function(e){
      //  wx.navigateTo({
      //    url: '../posts/posts',
      //  })

       wx.redirectTo({
         url: '../posts/posts',
       })
  }
})