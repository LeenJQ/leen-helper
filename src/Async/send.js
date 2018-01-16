/**
 * @function send
 * 
 * 创建一个 IMG 元素 HTTP GET Request
 * 好处：跨域，消耗低，不关心结果
 * 
 * 这段代码来自：https://github.com/hoosin/Ejs/blob/master/src/E.js
 * 因为觉得写的不错，就直接拿过来了
 * @param {Object} obj 参数列表对象 {url:'',data:{},callback:function(){}}
 * @private
*/
export default function send(obj) {

  if (!obj.callback) obj.callback = function () {
  }

  var d = param(obj.data)
  var url = obj.url + (obj.url.indexOf('?') < 0 ? '?' : '&') + d


  /**
   * 如果 url 超长，不运行，避免资源异常。
   * 各浏览器 HTTP Get 请求 URL 最大长度并不相同，几类常用浏览器最大长度及超过最大长度后提交情况如下：
   *  - IE6.0 :url 最大长度2083个字符，超过最大长度后无法提交。
   *  - IE7.0 :url 最大长度2083个字符，超过最大长度后仍然能提交，但是只能传过去2083个字符。
   *  - firefox 3.0.3 :url 最大长度7764个字符，超过最大长度后无法提交。
   *  - Opera 9.52 :url 最大长度7648个字符，超过最大长度后无法提交。
   *  - Google Chrome 2.0.168 :url 最大长度 7713 个字符，超过最大长度后无法提交。
   * 考虑这个专职服务移动端,在 firefox、Opera、Chrome 取最短的 7713
   */

  if (url.length > 7713) return

  // if (window.navigator.onLine) { // 用于判断是否脱机，但是兼容性好像不行，以防万一，我注释掉了
    var img = new Image(1, 1)
    img.onload = img.onerror = img.onabort = function () {
      obj.callback()
      img.onload = img.onerror = img.onabort = null
      img = null
    }
    img.src = url
  // }
}