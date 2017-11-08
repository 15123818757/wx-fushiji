// pages/onlineShop/onlineShop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  // 跳转到购物车
  goCart : function(){
    wx.navigateTo({
      url: '../cart/cart',
    })
  },
  // 跳转到我的订单
  goMyOrder: function () {
    wx.navigateTo({
      url: '../myOrder/myOrder',
    });
  },
  // 返回首页
  goIndex : function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },
  // 积分中心
  goJifen : function(){
    wx.navigateTo({
      url: '../gift/gift',
    })
  },
  goShop : function(){
    wx.navigateTo({
      url: '../clothes/clothes'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})