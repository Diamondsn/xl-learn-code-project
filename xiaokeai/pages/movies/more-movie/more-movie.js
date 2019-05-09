// pages/movies/more-movie/more-movie.js
var app=getApp();
var util = require("../../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var leibie=options.leibie;

     this.setData({leibie:leibie});
     //当前版本可以在这里进行设置导航栏标题
    //  wx.setNavigationBarTitle({
    //    title: leibie
    //  })

    var dataUrl="";
    switch(leibie){
      case "正在热映":
        var dataUrl = app.globalData.g_doubanurl + "/v2/movie/in_theaters";
      break;
      case "即将上映":
        var dataUrl = app.globalData.g_doubanurl + "/v2/movie/in_theaters";
      break;
      case "Top250":
        var dataUrl = app.globalData.g_doubanurl + "/v2/movie/in_theaters";
      break;
    }
    this.setData({dataUrl:dataUrl});
    this.setData({start:0});
    this.getDouBanData(dataUrl + "?start=0&count=10");
  },
  getDouBanData: function (url) {
    var that = this;
    wx.request({
      url: url,
      method: "GET",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        that.processDouBanData(res.data)
      },
      fail: function () {
        console.log("fail")
      },
      complete: function () {

      }
    })
  },
  processDouBanData: function (DouBanData) {
    var prevarr=this.data.movies||[];
    var arr = [];
    for (var idx in DouBanData.subjects) {
      var subject = DouBanData.subjects[idx];
      var title = subject.title;
      if (title.length > 6) {
        title = title.slice(0, 6) + "...";
      }
      var temp = {
        starsarr: util.convertStarsNumber(subject.rating.average),
        title: title,
        score: subject.rating.average,
        coverImg: subject.images.large,
        movieId: subject.id
      }
      arr.push(temp);
    }
    arr=prevarr.concat(arr);
    var start=this.data.start;
    start+=10;
    var readyData= { movies: arr};
    this.setData(readyData);
    this.setData({start:start});
    wx.hideNavigationBarLoading();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.leibie,
    })
  },

  onScrollLower:function(event){
    var nexturl = this.data.dataUrl+"?start="+this.data.start+"&count=10";
    this.getDouBanData(nexturl);
    wx.showNavigationBarLoading();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var refreshUrl = this.data.dataUrl+"?start=0&count=10";
    this.setData({movies:[]});
    this.getDouBanData(refreshUrl);
    wx.showNavigationBarLoading();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
     
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})