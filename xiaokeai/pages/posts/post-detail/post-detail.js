var postsData = require("../../../data/posts-data.js");
Page({
  data: {
   isPlayingMusic:false
  },
  onLoad: function(option) {
    var postId = option.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    this.setData({
      postData: postData
    });

    var postsCollected = wx.getStorageSync("postsCollected");
    if (postsCollected) {
      var postCollected = postsCollected[postId];
      if (postCollected) {
        this.setData({
          collected: postCollected
        });
      }
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync("postsCollected", postsCollected);
    }
  },
  onCollectionTap: function() {
    //this.getStorageSyc();
    this.getStorageAsy();
  },
  getStorageAsy: function() {
    var that = this;
    wx.getStorage({
      key: 'postsCollected',
      success: function(res) {
        var postsCollected = res.data;
        var postCollected = postsCollected[that.data.currentPostId];
        postCollected = !postCollected;
        postsCollected[that.data.currentPostId] = postCollected;
        wx.setStorageSync("postsCollected", postsCollected);
        that.setData({
          collected: postCollected
        });
        wx.showToast({
          title: postCollected ? "收藏成功" : "取消成功",
          duration: 500
        })
      },
    })
  },
  getStorageSyc: function() {
    var postsCollected = wx.getStorageSync("postsCollected");
    var postCollected = postsCollected[this.data.currentPostId];
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    wx.setStorageSync("postsCollected", postsCollected);
    this.setData({
      collected: postCollected
    });
    wx.showToast({
      title: postCollected ? "收藏成功" : "取消成功",
      duration: 500
    })
  },
  onShareTap: function(event) {
    wx.showActionSheet({
      itemList: [
        "分享到微信好友",
        "分享到朋友圈",
        "分享到QQ",
        "分享到微博"
      ],
      itemColor: "#405f80",
      success: function(res) {
        //res.cancle 用户是不是取消了
        //res.tapIndex 用户点击的数组序号从0开始
        var items = [
          "分享给微信好友",
          "分享到朋友圈",
          "分享到QQ",
          "分享到微博"
        ];
        wx.showToast({
          title: items[res.tapIndex],
        })
      }
    })
  },
  onMusicTap:function(event){
    var isPlayingMusic=this.data.isPlayingMusic;
if(!isPlayingMusic){
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/C100004HLusI2lLjZy.m4a?fromtag=38',
      title: '女儿情 - 万晓利',
      converImgUrl: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000"
    });
    this.setData({isPlayingMusic:true})
}else{
    wx.pauseBackgroundAudio();
  this.setData({ isPlayingMusic: false })
}
  }

})