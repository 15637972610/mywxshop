// miniprogram/pages/detail/detail.js
// const ajax = require('../../utils/ajax.js');
// const utils = require('../../utils/util.js');
var imgUrls = [];
var detailImg = [];
var goodsId = null;
var goods = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLike: false,
    showDialog: false,
    goods: null,
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
    // ajax.request({
    //   method: 'GET',
    //   url: 'collection/addShopCollection?key=' + utils.key + '&goodsId=' + goodsId,
    //   success: data => {
    //     console.log("收藏返回结果：" + data.message)
    //     wx.showToast({
    //       title: data.message,
    //       icon: 'success',
    //       duration: 2000
    //     });
    //   }
    // })
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({ url: '../cart1/cart1' })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    goodsId = options.goodsId;
    console.log('goodsId:' + goodsId);
    //加载商品详情
    that.goodsInfoShow();
  },
  goodsInfoShow: function (success) {
    var that = this;
    var goods = {
      "imgUrls": ["https://m.360buyimg.com/n12/jfs/t15760/240/2364180613/156292/ef903739/5aa1f8d5Ndd42acd3.jpg!q70.jpg;\r\n", "https://m.360buyimg.com/n12/jfs/t16735/365/798991195/114913/a848902f/5aa91508N7af5e1e0.jpg!q70.jpg;\r\n", "https://m.360buyimg.com/n12/jfs/t15526/221/2478166606/101122/3c868736/5aa91508Nf6c8342c.jpg!q70.jpg;\r\n", "https://m.360buyimg.com/n12/jfs/t17386/204/804389544/111193/9e032db/5aa91508N6823e2be.jpg!q70.jpg;\r\n", "https://m.360buyimg.com/n12/jfs/t14494/208/2545278027/128306/d2a0be37/5aa91508N4dbb8741.jpg!q70.jpg;\r\n", "https://m.360buyimg.com/n12/jfs/t15007/221/2573118534/202338/cd94e7e8/5aa91508N00af7315.jpg!q70.jpg\r\n"],
      "title": "朵玺Dr.Douxi赋活新生卵壳膜100g 紧致毛孔 锁水保湿 白色",
      "price": 249,
      "privilegePrice": 280,
      "detailImg": ["https://img10.360buyimg.com/imgzone/jfs/t15274/79/2422919843/349134/17bcd260/5a9e880fNff929e75.jpg", "https://img10.360buyimg.com/imgzone/jfs/t17044/228/668258528/204068/838bea39/5a9e880fNaea3579d.jpg", "https://img10.360buyimg.com/imgzone/jfs/t18841/260/639063252/306396/137e665f/5a9e8810N06aedfa4.jpg", "https://img10.360buyimg.com/imgzone/jfs/t19258/148/662223497/297520/28ff243a/5a9e8810Nf2f538c2.jpg", "https://img10.360buyimg.com/imgzone/jfs/t19453/254/653770633/308718/77c99727/5a9e8811Nc19aac86.jpg", "https://img10.360buyimg.com/imgzone/jfs/t15340/267/2439419638/355328/e0b26f3f/5a9e8811Na42a7292.jpg"],
      "imgUrl": "https://m.360buyimg.com/n12/jfs/t15760/240/2364180613/156292/ef903739/5aa1f8d5Ndd42acd3.jpg!q70.jpg",
      "buyRate": 0,
      "goodsId": "15",
      "count": 1,
      "totalMoney": 249
    }
    
        that.setData({
          goods: goods
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

  },
  /**
   * sku 弹出
   */
  toggleDialog: function () {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  /**
   * sku 关闭
   */
  closeDialog: function () {
    console.info("关闭");
    this.setData({
      showDialog: false
    });
  },
  /* 减数 */
  delCount: function (e) {
    console.log("刚刚您点击了减1");
    var count = this.data.goods.count;
    // 商品总数量-1
    if (count > 1) {
      this.data.goods.count--;
    }
    // 将数值与状态写回  
    this.setData({
      goods: this.data.goods
    });
    this.priceCount();
  },
  /* 加数 */
  addCount: function (e) {
    console.log("刚刚您点击了加1");
    var count = this.data.goods.count;
    // 商品总数量-1  
    if (count < 10) {
      this.data.goods.count++;
    }
    // 将数值与状态写回  
    this.setData({
      goods: this.data.goods
    });
    this.priceCount();
  },
  //价格计算
  priceCount: function (e) {
    this.data.goods.totalMoney = this.data.goods.price * this.data.goods.count;
    this.setData({
      goods: this.data.goods
    })
  },
  /**
   * 加入购物车
   */
  addCar: function (e) {
    var goods = this.data.goods;
    goods.isSelect = false;
    var count = this.data.goods.count;

    var title = this.data.goods.title;
    if (title.length > 13) {
      goods.title = title.substring(0, 13) + '...';
    }

    // 获取购物车的缓存数组（没有数据，则赋予一个空数组）  
    var arr = wx.getStorageSync('cart') || [];
    console.log("arr,{}", arr);
    if (arr.length > 0) {
      // 遍历购物车数组  
      for (var j in arr) {
        // 判断购物车内的item的id，和事件传递过来的id，是否相等  
        if (arr[j].goodsId == goodsId) {
          // 相等的话，给count+1（即再次添加入购物车，数量+1）  
          arr[j].count = arr[j].count + 1;
          // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）  
          try {
            wx.setStorageSync('cart', arr)
          } catch (e) {
            console.log(e)
          }
          //关闭窗口
          wx.showToast({
            title: '加入购物车成功！',
            icon: 'success',
            duration: 2000
          });
          this.closeDialog();
          // 返回（在if内使用return，跳出循环节约运算，节约性能） 
          return;
        }
      }
      // 遍历完购物车后，没有对应的item项，把goodslist的当前项放入购物车数组  
      arr.push(goods);
    } else {
      arr.push(goods);
    }
    // 最后，把购物车数据，存放入缓存  
    try {
      wx.setStorageSync('cart', arr)
      // 返回（在if内使用return，跳出循环节约运算，节约性能） 
      //关闭窗口
      wx.showToast({
        title: '加入购物车成功！',
        icon: 'success',
        duration: 2000
      });
      this.closeDialog();
      return;
    } catch (e) {
      console.log(e)
    }


  }
})