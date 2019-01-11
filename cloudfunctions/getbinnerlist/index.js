// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//1.获取数据库的实例
const db = cloud.database()
// 2.获取集合的引用
const binner = db.collection('binner')

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const binnerlist = await binner.get()


  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    binnerlist
  }
}