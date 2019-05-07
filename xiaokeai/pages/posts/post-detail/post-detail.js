var postsData = require("../../../data/posts-data.js");
var app=getApp();

Page({
  data: {
    isPlayingMusic: false
  },
  onLoad: function(option) {
    var globalData=app.globalData;
   
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
    var that = this;
    wx.onBackgroundAudioPlay(function() {
      that.setData({
        isPlayingMusic: true
      });

      app.globalData.g_isPlayingMusic=true;
      app.globalData.g_currentPostId = that.data.currentPostId;
    })
    wx.onBackgroundAudioPause(function() {
      that.setData({
        isPlayingMusic: false
      });

      app.globalData.g_isPlayingMusic = false;
      app.globalData.g_currentPostId=null;
    })


    if (app.globalData.g_isPlayingMusic && this.data.currentPostId===app.globalData.g_currentPostId){
      this.setData({
        isPlayingMusic: true
      });
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
  onMusicTap: function(event) {
    var isPlayingMusic = this.data.isPlayingMusic;
    var currentPostId = this.data.currentPostId;
    var postdata = postsData.postList[currentPostId];
    if (!isPlayingMusic) {
      wx.playBackgroundAudio({
        dataUrl: postdata.music.url,
        title: postdata.music.title,
        converImgUrl: postdata.music.coverImg
      });
      this.setData({
        isPlayingMusic: true
      })
    } else {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    }
  }

})