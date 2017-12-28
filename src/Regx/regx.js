/**
 * 匹配 url
 * 
 * 来自 《js编程精粹》
 * 
 * 例: 》》》
 * var url =  "http://www.ora.com:80/goodparts?q#fragment";
 * var result = parse_url.exec(url);
 * var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
 * var blanks = '     ';
 * for(var i = 0; i < names.length; i += 1) {
 *    console.log(names[i] + ';' + blanks.substring(nams[i].length), result[i]);
 * }
 * 
 * 输出: 》》》
 * url:    http://www.ora.com:80/goodparts?q#fragment
 * scheme: http
 * slash:  //
 * host:   www.ora.com
 * port:   80
 * path:   goodparts
 * query:  q 
 * hash:   fragment
 * 
 * @param {String} u url
 * @returns {Regx|BOOLEAN} 如果没有参数直接返回表达式，有则返回是否匹配
 */
const url = (u) => {
  const regx = /^(?:([A-Za-z]+):)?(\/{0, 3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
  return !u ? regx : regx.test(u);
}

/**
 * 判断给定参数是否为整数
 * @param {String|Number} num 要验证的数字
 */
const number = (num) => {
  const regx = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
  return !num ? num : regx.test(num);
}

export default {url, number}