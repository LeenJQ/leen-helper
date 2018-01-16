export const week = (date) => ("周" + "日一二三四五六".split("")[date.getDay()])

// 
/**
 * 
 * @param {Date} date - 时间戳，如 new Date('2017/01/01'), 
 * !!! 请用 2017/01/01 这种格式， 不要使用 2017-01-01，这会在 IOS 出错
 * @param {*} fmt - 格式如 yyyy-MM-dd hh:mm:ss
 */
export function formate (date=new Date(), fmt="yyyy/MM/dd hh:mm:ss") { //author: meizz
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
