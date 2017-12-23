/**
 * 判断一个对象是否为指定的类型
 * @param {any} obj  要判断的对象
 * @param {String} type 要确认的类型
 */

var is = function (obj,type) { 
	return (type === "Null" && obj === null) || 
		(type === "Undefined" && obj === void 0 ) || 
		(type === "Number" && isFinite(obj)) || 
		Object.prototype.toString.call(obj).slice(8,-1) === type; 
} 

export {is}

export default is