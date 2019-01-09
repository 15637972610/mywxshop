// pages/classify/classify.js
// const ajax = require('../../utils/ajax.js');
// const utils = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyItems: [],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.classifyShow();
  },
  classifyShow: function (success) {
    var that = this;
    // ajax.request({
    //   method: 'GET',
    //   url: 'classify/getShopClassifyList?key=' + utils.key,
    //   success: data => {
    //     that.setData({
    //       classifyItems: data.result
    //     })
    //     console.log(data.result)
    //   }
    // })
    var classifyItems = [{
      "id": 1,
      "name": "个人护理",
      "ishaveChild": true,
      "shopClassifyDtoList": [{
        "id": 2,
        "name": "洗护套装",
        "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2017/11/06/142/62863029-eb85-4d1a-bdf6-8a67fa91ce3b_300x375_80.jpg"
      }, {
        "id": 3,
        "name": "卸妆",
        "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2017/02/24/134/6d33dac3-8de7-4980-86be-907a112b1ecf_300x375_80.jpg"
      }, {
        "id": 4,
        "name": "护肤套装",
        "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2018/06/22/46/96f4e409-faaa-487c-ba8e-a2685e07b62c_300x375_80.png"
      }]
    }, {
      "id": 5,
      "name": "护肤彩妆",
      "ishaveChild": true,
      "shopClassifyDtoList": [{
        "id": 6,
        "name": "面膜",
        "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/06/22/117/15296371356181_300x375_80.png"
      }, {
        "id": 7,
        "name": "面霜",
        "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/06/25/183/15299035136290_300x375_80.png"
      }, {
        "id": 8,
        "name": "晚霜",
        "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/07/06/72/15308438751848_300x375_80.jpg"
      }, {
        "id": 9,
        "name": "香水",
        "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2018/05/02/31/e94cfce3-b13d-45de-90e9-baaa15263338_300x375_80.png"
      }]
    }, {
      "id": 10,
      "name": "母婴",
      "ishaveChild": false,
      "shopClassifyDtoList": []
    }, {
      "id": 11,
      "name": "护肤",
      "ishaveChild": true,
      "shopClassifyDtoList": [{
        "id": 12,
        "name": "气垫bb",
        "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381301.jpg"
      }, {
        "id": 13,
        "name": "隔离霜",
        "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161215/148179053369.jpg"
      }, {
        "id": 14,
        "name": "修容/高光",
        "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381411.jpg"
      }, {
        "id": 15,
        "name": "遮瑕",
        "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815181.jpg"
      }, {
        "id": 16,
        "name": "腮红",
        "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815759.jpg"
      }, {
        "id": 17,
        "name": "粉底",
        "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153817721.jpg"
      }, {
        "id": 18,
        "name": "粉饼",
        "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153816983.jpg"
      }, {
        "id": 19,
        "name": "蜜粉/散粉",
        "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153819354.jpg"
      }]
    }]

    that.setData({classifyItems})
    
      
    // console.log("=================================================")
    // console.log("classifyShow" + JSON.stringify(that.classifyItems))

    
  },
})