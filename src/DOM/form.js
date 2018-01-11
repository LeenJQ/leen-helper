/**
 * =================================
 * 表单元素相关
 * =================================
 */

/**
 * Input 相关
 */

/**
 * @function getCursorPosition
 * 获取光标在短连接输入框中的位置
 * 
 * @param  {HTMLElementInput} elem 框DOM
 * @return {*}
 */
export const getCursorPosition = function(elem){
  if(navigator.userAgent.indexOf("MSIE") > -1) { // IE
      var range = document.selection.createRange();
      range.text = '';
      range.setEndPoint('StartToStart',elem.createTextRange());
      return range.text.length;
  } else {
      return elem.selectionStart;
  }
}

/**
  * @function setCursorPosition
  * 设置输入域(input/textarea)光标的位置
  *
  * @param {HTMLInputElement/HTMLTextAreaElement} elem
  * @param {Number} index
  */
export const setCursorPosition = function(elem, index) {
   var val = elem.value
   var len = val.length

   // 超过文本长度直接返回
   if (len < index) return
   setTimeout(function() {
       elem.focus()
       if (elem.setSelectionRange) { // 标准浏览器
           elem.setSelectionRange(index, index)   
       } else { // IE9-
           var range = elem.createTextRange()
           range.moveStart("character", -len)
           range.moveEnd("character", -len)
           range.moveStart("character", index)
           range.moveEnd("character", 0)
           range.select()
       }
   }, 10)
}
