// miniprogram/pages/goodslist/goodslist.js

const ajax = require('../../utils/ajax.js');
const utils = require('../../utils/util.js');
var sectionData = [];
var ifLoadMore = null;
var activityId = null;
var page = 1; //默认第一页
Page({

  data: {
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: []
  },

  onLoad: function(options) {
    activityId = options.activityId;
    page = 1;
    ifLoadMore = null;
    console.log('activityId:' + activityId);
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });

        //加载首组图片
        // this.loadImages();
        this.brandShow();
      }
    })
  },

  onImageLoad1: function(e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width; //图片原始宽度
    let oImgH = e.detail.height; //图片原始高度
    let imgWidth = this.data.imgWidth; //图片设置的宽度
    let scale = imgWidth / oImgW; //比例计算
    let imgHeight = oImgH * scale; //自适应高度

    let images = this.data.brandGoods;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id + "" === imageId) {
        imageObj = img;
        break;
      }
    }

    imageObj.height = imgHeight;

    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    //判断当前图片添加到左列还是右列
    if (col1.length <= col2.length) {
      col1.push(imageObj);
    } else {
      col2.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
    };

    //当前这组图片已加载完毕，则清空图片临时加载区域的内容
    if (!loadingCount) {
      data.images = [];
    }

    this.setData(data);
  },

  brandShow: function(success) {
    var that = this;
    var loadingCount = 8
    var brandGoods = [{
      "id": 15,
      "name": "朵玺Dr.Douxi赋活新生卵壳膜100g 紧...",
      "price": 249,
      "privilegePrice": 280,
      "imgUrl": "https://m.360buyimg.com/n12/jfs/t15760/240/2364180613/156292/ef903739/5aa1f8d5Ndd42acd3.jpg!q70.jpg",
      "details": "https://img10.360buyimg.com/imgzone/jfs/t15274/79/2422919843/349134/17bcd260/5a9e880fNff929e75.jpg;https://img10.360buyimg.com/imgzone/jfs/t17044/228/668258528/204068/838bea39/5a9e880fNaea3579d.jpg;https://img10.360buyimg.com/imgzone/jfs/t18841/260/639063252/306396/137e665f/5a9e8810N06aedfa4.jpg;https://img10.360buyimg.com/imgzone/jfs/t19258/148/662223497/297520/28ff243a/5a9e8810Nf2f538c2.jpg;https://img10.360buyimg.com/imgzone/jfs/t19453/254/653770633/308718/77c99727/5a9e8811Nc19aac86.jpg;https://img10.360buyimg.com/imgzone/jfs/t15340/267/2439419638/355328/e0b26f3f/5a9e8811Na42a7292.jpg",
      "remark": null,
      "createDate": null,
      "updateDate": null,
      "clickRate": 334,
      "buyRate": 0,
      "stock": 0,
      "isHot": "0",
      "isNew": "1",
      "classifyId": null,
      "discount": "8.9",
      "activityId": null,
      "shopGoodsImageList": null,
      "desc": null
    }, {
      "id": 14,
      "name": "资生堂（Shiseido） uno吾诺润肤乳 ...",
      "price": 69,
      "privilegePrice": 74,
      "imgUrl": "https://m.360buyimg.com/n12/jfs/t14245/264/2640031642/90352/2b2d65e6/5ab0d170Na0dbfc6b.jpg!q70.jpg",
      "details": "https://img10.360buyimg.com/imgzone/jfs/t18601/100/1488193806/455710/715ee1eb/5acc7dbaN394b07c7.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t4435/24/1347119550/338397/d2f1183b/58dc7f79Nd4a578ff.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t4399/108/1299140071/648400/50847ef3/58dc7f7bN026453ff.jpg;https://img20.360buyimg.com/imgzone/jfs/t18415/357/1511316267/201463/a4c2ea93/5acd6e90Nc695aed4.jpg;https://img30.360buyimg.com/popWareDetail/jfs/t6094/343/4783275113/493381/c64f4fa9/5966ea52N3d199f29.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t4285/139/746539837/193963/2c3f8b8f/58b9381cN4179d716.jpg",
      "remark": null,
      "createDate": null,
      "updateDate": null,
      "clickRate": 80,
      "buyRate": 0,
      "stock": 0,
      "isHot": "0",
      "isNew": "1",
      "classifyId": null,
      "discount": "9.3",
      "activityId": null,
      "shopGoodsImageList": null,
      "desc": null
    }, {
      "id": 13,
      "name": "菲诗小铺（The Face Shop）草本洗面...",
      "price": 34,
      "privilegePrice": 49,
      "imgUrl": "https://m.360buyimg.com/n12/jfs/t17719/147/802204468/122356/6e810e00/5aaa1492N4523d8f5.jpg!q70.jpg",
      "details": "https://img30.360buyimg.com/popWaterMark/jfs/t16921/140/728074494/189145/fabe6cc4/5aa23c7fNee473b86.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t19381/269/257490754/133067/e0c9854d/5a66cc62Ncb8808a1.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t18727/262/257641816/43609/c28d03a7/5a66cc62Na35b9f26.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t19234/275/257491352/178454/fbe2242a/5a66cc63N8579e997.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t16444/162/1935726472/177120/4f872b02/5a66cc62Ne8c9f6ca.jpg;",
      "remark": null,
      "createDate": null,
      "updateDate": null,
      "clickRate": 149,
      "buyRate": 0,
      "stock": 0,
      "isHot": "0",
      "isNew": "1",
      "classifyId": null,
      "discount": "6.9",
      "activityId": null,
      "shopGoodsImageList": null,
      "desc": null
    }, {
      "id": 12,
      "name": "雅漾（Avene） 舒护活泉喷雾 300ml ...",
      "price": 79,
      "privilegePrice": 88,
      "imgUrl": "https://m.360buyimg.com/n12/jfs/t19426/169/1079101854/93418/bddfc677/5aba62feN9915aca9.jpg!q70.jpg",
      "details": "https://img30.360buyimg.com/imgzone/jfs/t15778/152/2018388292/283487/78b4226/5a7199abN377c5acc.jpg;https://img13.360buyimg.com/imgzone/jfs/t15307/143/2153811354/528347/bbe080a5/5a7199afN7bbe70c9.jpg;https://img14.360buyimg.com/imgzone/jfs/t15340/321/2146593792/211921/a1ba5559/5a7199b2Ncd635447.jpg;https://img10.360buyimg.com/imgzone/jfs/t15967/323/2029792112/280335/4855c4f6/5a7199b4N9a6efde8.jpg;https://img14.360buyimg.com/imgzone/jfs/t18499/261/398515014/200226/4a7badf5/5a7199b4N36224b7f.jpg;https://img14.360buyimg.com/imgzone/jfs/t14458/223/2150936673/117725/934e5dda/5a7199b4N770eb9ec.jpg;https://img10.360buyimg.com/imgzone/jfs/t15196/226/2168341031/222946/32acabf5/5a7199b7N0f4522e1.jpg;https://img13.360buyimg.com/imgzone/jfs/t17677/313/379268295/86694/904ba8d/5a7199b7Na5e77c0a.jpg\n",
      "remark": null,
      "createDate": null,
      "updateDate": null,
      "clickRate": 66,
      "buyRate": 0,
      "stock": 0,
      "isHot": "0",
      "isNew": "1",
      "classifyId": null,
      "discount": "9.0",
      "activityId": null,
      "shopGoodsImageList": null,
      "desc": null
    }, {
      "id": 7,
      "name": "日本城野医生Dr.Ci.Labo毛孔细致化妆水...",
      "price": 85,
      "privilegePrice": 89,
      "imgUrl": "https://m.360buyimg.com/n12/jfs/t18067/352/1303510983/58673/cf7b2280/5ac4cff1N63f73a22.jpg!q70.jpg",
      "details": "https://img11.360buyimg.com/cms/jfs/t16906/54/833236005/285759/a76b529c/5aab7897N99b5ff48.jpg;https://img10.360buyimg.com/imgzone/jfs/t15508/352/1652696048/105724/c31328ca/5a583251N697ca464.png;https://img10.360buyimg.com/imgzone/jfs/t16048/81/1438197820/113734/98e09ca/5a583251N982ede7e.png;https://img10.360buyimg.com/imgzone/jfs/t17359/171/21457964/229892/63ac5339/5a583252Nffc86622.png;https://img10.360buyimg.com/imgzone/jfs/t18445/363/19488915/114532/7c718ac7/5a583252N5e711663.png;https://img10.360buyimg.com/imgzone/jfs/t16024/251/1629757050/165967/1f46986c/5a583252Ne988de2a.png;https://img10.360buyimg.com/imgzone/jfs/t19456/351/18597451/130829/b2312ada/5a583252Nbfbcdaad.png;https://img10.360buyimg.com/imgzone/jfs/t16723/358/25683295/60168/4cbca657/5a58324fNe91693c3.png;https://img10.360buyimg.com/imgzone/jfs/t18712/275/1283423874/84742/cffa4517/5ac202ddN752e0532.jpg;https://img10.360buyimg.com/imgzone/jfs/t18982/99/1234677650/108066/4e586e7e/5ac202e3N27e086e8.jpg;https://img10.360buyimg.com/imgzone/jfs/t18604/88/1216756183/91530/8ee5a8b0/5ac202e8N1c959bf7.jpg",
      "remark": null,
      "createDate": null,
      "updateDate": null,
      "clickRate": 61,
      "buyRate": 0,
      "stock": 0,
      "isHot": "0",
      "isNew": "1",
      "classifyId": null,
      "discount": "9.6",
      "activityId": null,
      "shopGoodsImageList": null,
      "desc": null
    }, {
      "id": 6,
      "name": "蜜浓MINON保湿氨基酸化妆水干燥肌1号清爽型...",
      "price": 120,
      "privilegePrice": 134,
      "imgUrl": "https://m.360buyimg.com/n12/jfs/t11317/136/1884111176/211775/3542f11f/5a0ea60dNbda1e1b2.jpg",
      "details": "https://img14.360buyimg.com/cms/jfs/t12343/316/887057782/88519/4f284e41/5a150e8aN196a8ddf.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t13423/77/599425883/227205/b686f603/5a0ea625N8bed3a2f.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t13813/67/549698794/288838/f1e40476/5a0ea625N037d736d.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t11137/246/2037892138/241468/d9a835ac/5a0ea623Na6078b08.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t12652/18/570642179/135879/fcbd068e/5a0ea625N6e8a3c30.jpg",
      "remark": null,
      "createDate": null,
      "updateDate": null,
      "clickRate": 15,
      "buyRate": 0,
      "stock": 0,
      "isHot": "0",
      "isNew": "1",
      "classifyId": null,
      "discount": "9.0",
      "activityId": null,
      "shopGoodsImageList": null,
      "desc": null
    }, {
      "id": 5,
      "name": "日本 KOSE 高丝 Softymo 卸妆油/...",
      "price": 55,
      "privilegePrice": 64,
      "imgUrl": "https://m.360buyimg.com/n12/jfs/t18610/76/237290611/158630/3e18be33/5a65b300N1c9655b0.jpg",
      "details": "https://img14.360buyimg.com/cms/jfs/t12343/316/887057782/88519/4f284e41/5a150e8aN196a8ddf.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t19450/229/492270126/703676/15d6f3df/5a7fb806N6a7d57c3.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t19150/228/500504275/437763/365ed16/5a7fb805Ne22c7f21.jpg",
      "remark": null,
      "createDate": null,
      "updateDate": null,
      "clickRate": 73,
      "buyRate": 0,
      "stock": 0,
      "isHot": "0",
      "isNew": "1",
      "classifyId": null,
      "discount": "8.6",
      "activityId": null,
      "shopGoodsImageList": null,
      "desc": null
    }, {
      "id": 1,
      "name": "日本资生堂（Shiseido）洗颜专科洗面奶洁...",
      "price": 49,
      "privilegePrice": 56,
      "imgUrl": "https://m.360buyimg.com/n12/jfs/t18736/261/941932619/72745/c6e929e3/5ab05c6fN30744488.jpg!q70.jpg",
      "details": "https://img14.360buyimg.com/cms/jfs/t12343/316/887057782/88519/4f284e41/5a150e8aN196a8ddf.jpg;https://img30.360buyimg.com/popWareDetail/jfs/t7519/163/2579412574/2717557/15183116/59b25453N4b18df13.png;https://img30.360buyimg.com/popWaterMark/jfs/t7903/192/2911505409/810278/276f63e/59e019a5N44f1daa3.jpg;https://img30.360buyimg.com/popWaterMark/jfs/t7903/192/2911505409/810278/276f63e/59e019a5N44f1daa3.jpg",
      "remark": null,
      "createDate": null,
      "updateDate": null,
      "clickRate": 298,
      "buyRate": 0,
      "stock": 0,
      "isHot": "0",
      "isNew": "1",
      "classifyId": null,
      "discount": "8.8",
      "activityId": null,
      "shopGoodsImageList": null,
      "desc": null
    }]



    that.setData({
      brandGoods,
      loadingCount,
    })




  },

  catchTapCategory: function(e) {
    var that = this;
    var goodsId = e.currentTarget.dataset.goodsid;
    console.log('goodsId:' + goodsId);
    //新增商品用户点击数量
    that.goodsClickShow(goodsId);
    //跳转商品详情
    wx.navigateTo({
      url: '../detail/detail?goodsId=' + goodsId
    })
  },
  goodsClickShow(goodsId) {
    console.log('增加商品用户点击数量');
    var that = this;
    // ajax.request({
    //   method: 'GET',
    //   url: 'goods/addGoodsClickRate?key=' + utils.key + '&goodsId=' + goodsId,
    //   success: data => {
    //     console.log("用户点击统计返回结果：" + data.message)
    //   }
    // })
  },
})