function onResize(cb) {
  (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, cb, false);
    doc.addEventListener('DOMContentLoaded', cb, false);
  })(document, window); 
}

export {onResize}

export default {
  onResize
}