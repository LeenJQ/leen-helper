/**
 * 把对象参数转换成url字符串参数格式 
 * {a:1, b:2} => a=1&b=2
 * 
 * @param {Object} obj 
 * @return {String} 
 */
const ObjectToUrlParams = (obj) => {
  var str = "";
  for (var key in obj) {
      if (str != "") {
          str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
  }

  return str
}

/**
 * 获取url参数值
 * 
 * @param {String} 参数名 
 * @param {Any} 参数值
 */
const getUrlParams = (name)  => {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

export {ObjectToUrlParams, getUrlParams}
export default {ObjectToUrlParams, getUrlParams}
