// pages/myOrder/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left : "0"
  },
  show_1 : function(){
    this.setData({ left : "0" })
  },
  show_2: function () {
    this.setData({ left: "20%" })
  },
  show_3: function () {
    this.setData({ left: "40%" })
  },
  show_4: function () {
    this.setData({ left: "60%" })
  },
  show_5: function () {
    this.setData({ left: "80%" })
  },
  goPay : function(){
    wx.navigateTo({
      url: '../jiesuan/jiesuan',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})