// pages/movies.js
var app = getApp();
var util=require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    containerShow:true,
    searchResultShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var inTheatersUrl = app.globalData.g_doubanurl + "/v2/movie/in_theaters" + "?start=0&count=3";;
    var commingSoonUrl = app.globalData.g_doubanurl + "/v2/movie/coming_soon" + "?start=0&count=3";;
    var top250Url = app.globalData.g_doubanurl + "/v2/movie/top250" + "?start=0&count=3";;
    this.getDouBanData(inTheatersUrl,"inTheaters");
    this.getDouBanData(commingSoonUrl,"comingSoon");
    this.getDouBanData(top250Url,"top250");
  },
  getDouBanData: function(url,key) {
    var that=this;
    wx.request({
      url: url,
      method: "GET",
      header: {
        "Content-Type": "json"
      },
      success: function(res) {
        that.processDouBanData(res.data,key);
      },
      fail: function() {
        console.log("fail")
      },
      complete: function() {

      }
    })
  },

  processDouBanData:function(DouBanData,key){
    var arr=[];
    for(var idx in DouBanData.subjects){
         var subject=DouBanData.subjects[idx];
         var title=subject.title;
         if(title.length>6){
           title=title.slice(0,6)+"...";
         }
         var temp={
           starsarr: util.convertStarsNumber(subject.rating.average),
           title:title,
           score:subject.rating.average,
           coverImg:subject.images.large,
           movieId: subject.id
         }
         arr.push(temp);
    }
    var leibiemap={};
    leibiemap["inTheaters"]="正在热映";
    leibiemap["comingSoon"]="即将上映";
    leibiemap["top250"]="Top250";
   var readyData={};
   readyData[key]={movies:arr,leibie:leibiemap[key]};
   this.setData(readyData);
  },

  onMoreTap:function(event){
     var leibie=event.currentTarget.dataset.leibie;
     console.log(leibie);
    wx.navigateTo({
      url: '/pages/movies/more-movie/more-movie?leibie='+leibie,
    })
  },

  onBindFocus:function(event){
     console.log(event);
     this.setData({
       containerShow: false,
       searchResultShow: true
     });
  },

  onBindChange:function(event){
    console.log(event);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})