// miniprogram/pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,//订单列表显示或隐藏
    iscart: true,//订单为空界面显示或隐藏
    currentTab: 0,//默认导航条
    // 商品详情介绍
    carts: [
      {
        id: 1,
        pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
        name: "日本资生堂洗颜",
        price: 200,
        isSelect: true,
        // 数据设定
        count: 2
      },
      {
        id: 2,
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
        name: "倩碧焕妍活力精华露",
        price: 340,
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 3,
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        name: "特效润肤露",
        price: 390,
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 4,
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
        name: "倩碧水嫩保湿精华面霜",
        price: 490,
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 5,
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
        name: "兰蔻清莹柔肤爽肤水",
        price: 289,
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 6,
        pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_middle.jpg",
        name: "LANCOME兰蔻小黑瓶精华",
        price: 230,
        isSelect: false,
        // 数据设定
        count: 1
      },

      {
        id: 7,
        pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
        name: "日本资生堂洗颜",
        price: 200,
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 8,
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
        name: "倩碧焕妍活力精华露",
        price: 340,
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 9,
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        name: "特效润肤露",
        price: 390,
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 10,
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
        name: "倩碧水嫩保湿精华面霜",
        price: 490,
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 11,
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
        name: "兰蔻清莹柔肤爽肤水",
        price: 289,
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 12,
        pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_middle.jpg",
        name: "LANCOME兰蔻小黑瓶精华",
        price: 230,
        isSelect: false,
        // 数据设定
        count: 1
      },


    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.navbarShow()

  },
  navbarShow: function (success) {
    var that = this;
    var navbars = [{
      "id": 1,
      "navbarName": "全部",
      "clickUrl": null,
      "seq": 1
    }, {
      "id": 2,
      "navbarName": "待付款",
      "clickUrl": null,
      "seq": 2
    }, {
      "id": 3,
      "navbarName": "待收货",
      "clickUrl": null,
      "seq": 3
    }, {
      "id": 4,
      "navbarName": "已完成",
      "clickUrl": null,
      "seq": 4
    }, {
      "id": 5,
      "navbarName": "已取消",
      "clickUrl": null,
      "seq": 5
    }]
    that.setData({
      navbars
    })
    
  },

  // 导航切换监听
  navbarTap: function (e) {
    console.debug(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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