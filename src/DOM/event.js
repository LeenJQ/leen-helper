/**
 * 浏览器事件
 */

/**
 * @function onResize
 * 监听窗口大小变化事件
 * 
 * @param {Function} cb 回调函数
 */
export function onResize(cb) {
  (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, cb, false);
    doc.addEventListener('DOMContentLoaded', cb, false);
  })(document, window); 
}

/**
 * @function getEventXY
 * 获取事件坐标
 * 
 * @param {Event}
 * @return {Object}
 *  {
 *    x, // 相对于浏览器坐标
 *    y,
 *    pX, // 相对于页面坐标（html）
 *    pY,
 *    sX, // 相对于屏幕坐标
 *    sY
 *  }
 */
export const getEventXY = (e) => {{
  x: e.clientX
  y: e.clientY
  pX: e.pageX
  pY: e.pageY
  sX: e.screenX
  sY: e.screenY
}}