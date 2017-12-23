(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["leen-helper"] = factory();
	else
		root["leen-helper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * class helper
 */
exports.default = {
  ifActive: function ifActive(express) {
    return express ? 'active' : '';
  },


  /**
   * 顺序的查找所有的, 所有的class 是否都在 classString 里
   * hasClass(classString, 'a', 'b', ....)
   */
  hasClass: function hasClass() {
    var _ref = [].concat(Array.prototype.slice.call(arguments)),
        className = _ref[0],
        args = _ref.slice(1);

    var has = true;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var wantClass = _step.value;

        if (className.indexOf(wantClass.toString()) < 0) {
          has = false;
          break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return has;
  },


  /**
   * 顺序查看所有的class， 是否所有的 class 都不在 classString 里
   * hassClass(classString, 'a', 'b', ...)
   */
  noClass: function noClass() {
    var _ref2 = [].concat(Array.prototype.slice.call(arguments)),
        className = _ref2[0],
        args = _ref2.slice(1);

    var none = true;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var checkClass = _step2.value;

        if (className.indexOf(checkClass.toString()) > -1) {
          none = false;
          break;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return none;
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var week = function week(date) {
    return "周" + "日一二三四五六".split("")[date.getDay()];
};

function formate(date, fmt) {
    //author: meizz
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
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
}

exports.week = week;
exports.formate = formate;
exports.default = {
    name: 'Date lib',
    week: week,
    formate: formate
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /**
     * 获取光标在短连接输入框中的位置
     * @param  {HTMLElementInput} elem 框DOM
     * @return {*}
     */
    getCursorPosition: function getCursorPosition(elem) {
        if (navigator.userAgent.indexOf("MSIE") > -1) {
            // IE
            var range = document.selection.createRange();
            range.text = '';
            range.setEndPoint('StartToStart', elem.createTextRange());
            return range.text.length;
        } else {
            return elem.selectionStart;
        }
    },

    /*
    * 设置输入域(input/textarea)光标的位置
    * @param {HTMLInputElement/HTMLTextAreaElement} elem
    * @param {Number} index
    */
    setCursorPosition: function setCursorPosition(elem, index) {
        var val = elem.value;
        var len = val.length;

        // 超过文本长度直接返回
        if (len < index) return;
        setTimeout(function () {
            elem.focus();
            if (elem.setSelectionRange) {
                // 标准浏览器
                elem.setSelectionRange(index, index);
            } else {
                // IE9-
                var range = elem.createTextRange();
                range.moveStart("character", -len);
                range.moveEnd("character", -len);
                range.moveStart("character", index);
                range.moveEnd("character", 0);
                range.select();
            }
        }, 10);
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function onResize(cb) {
  (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, cb, false);
    doc.addEventListener('DOMContentLoaded', cb, false);
  })(document, window);
}

exports.onResize = onResize;
exports.default = {
  onResize: onResize
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Simple format function borrowed from PureMask.js
 * {@link https://github.com/romulobrasil/PureMask.js}
 *
 * @param {String} data String to mask (input value)
 * @param {String} [mask] Mask format, like `####-##`
 * @returns {string} Formatted text
 */
function mask(data, mask) {
  // don't do anything if mask is undefined/null/etc
  if (!mask) return data;

  var maskStartRegExp = /^([^#ANX]+)/;

  if (data.length == 1 && maskStartRegExp.test(mask)) {
    data = maskStartRegExp.exec(mask)[0] + data;
  }

  var text = '';

  // Adds a char offset to allow testing on optional values
  var cOffset = 0;

  // Cleans data to  avoid value loss on dynamic mask changing
  for (var i = 0; i < mask.length; i++) {
    var m = mask.charAt(i);
    switch (m) {
      case '#':
        break;
      case 'A':
        break;
      case '?':
        break;
      case 'N':
        break;
      case 'X':
        break;
      default:
        data = data.replace(m, '');
    }
  }
  for (var _i = 0, x = 1; x && _i < mask.length; ++_i) {
    // Uses the optional mask character offset
    var c = data.charAt(_i - cOffset);
    var _m = mask.charAt(_i);

    switch (_m) {
      case '#':
        if (/\d/.test(c)) {
          text += c;
        } else {
          x = 0;
        }break;
      case 'A':
        if (/[a-z]/i.test(c)) {
          text += c;
        } else {
          x = 0;
        }break;
      case 'N':
        if (/[a-z0-9]/i.test(c)) {
          text += c;
        } else {
          x = 0;
        }break;
      // Skips testing if optional field is specified
      case '?':
        cOffset++;break;
      case 'X':
        text += c;break;
      default:
        text += _m;

        // preserve characters that are in the same spot we need to insert a mask
        // character by shifting the data over to the right (issue #5, & #7)
        if (c && c !== _m) {
          data = ' ' + data;
        }

        break;
    }
  }

  return text;
}

exports.mask = mask;
exports.default = {
  mask: mask
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var trim = function trim(x) {
  return x.replace(/^\s+|\s+$/gm, '');
};

exports.trim = trim;
exports.default = {
  trim: trim
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 把对象参数转换成url字符串参数格式 
 * {a:1, b:2} => a=1&b=2
 * 
 * @param {Object} obj 
 * @return {String} 
 */
var ObjectToUrlParams = function ObjectToUrlParams(obj) {
  var str = "";
  for (var key in obj) {
    if (str != "") {
      str += "&";
    }
    str += key + "=" + encodeURIComponent(obj[key]);
  }

  return str;
};

/**
 * 获取url参数值
 * 
 * @param {String} 参数名 
 * @param {Any} 参数值
 */
var getUrlParams = function getUrlParams(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if (results == null) return "";else return decodeURIComponent(results[1].replace(/\+/g, " "));
};

exports.ObjectToUrlParams = ObjectToUrlParams;
exports.getUrlParams = getUrlParams;
exports.default = { ObjectToUrlParams: ObjectToUrlParams, getUrlParams: getUrlParams };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urler = exports.stringer = exports.dater = exports.formater = exports.domer = exports.eventer = exports.classer = undefined;

var _class = __webpack_require__(0);

var _class2 = _interopRequireDefault(_class);

var _event = __webpack_require__(3);

var _event2 = _interopRequireDefault(_event);

var _dom = __webpack_require__(2);

var _dom2 = _interopRequireDefault(_dom);

var _formate = __webpack_require__(4);

var _formate2 = _interopRequireDefault(_formate);

var _date = __webpack_require__(1);

var _date2 = _interopRequireDefault(_date);

var _string = __webpack_require__(5);

var _string2 = _interopRequireDefault(_string);

var _url = __webpack_require__(6);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.classer = _class2.default;
exports.eventer = _event2.default;
exports.domer = _dom2.default;
exports.formater = _formate2.default;
exports.dater = _date2.default;
exports.stringer = _string2.default;
exports.urler = _url2.default; /**
                                * my js helper function
                                * 帮助函数库
                                */

exports.default = { classer: _class2.default, eventer: _event2.default, domer: _dom2.default, formater: _formate2.default, dater: _date2.default, stringer: _string2.default, urler: _url2.default };

/***/ })
/******/ ]);
});