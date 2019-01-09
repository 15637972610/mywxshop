const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
module.exports = {
  formatTime: formatTime,
  key: '5b40de6158e9421e858e85d2ed97b3a7'
}
//备注: 开发者key需要到“实战开发助手”小程序获取，直接配置就可以使用，如果每日次数用完可以申请增加次数