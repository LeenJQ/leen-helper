//检查是否浏览器运行环境
export const inBrowser =
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) !== '[object Object]'

//浏览器客户端类型
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA)
export const isWechat = UA && UA.indexOf('micromessenger') > 0
