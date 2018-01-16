// 页面全局对象
export const docElement = document.documentElement
export const docBody = document.body
export const screen = window.screen

/**
 * 获取基本信息
 * https://github.com/LeenJQ/leen-mobile/blob/master/Basic.md
 * 
 */
// 获取 DPR （设备像素比) 
export const getDPR = () => window.devicePixelRatio

// 屏幕尺寸
export const getScreenSize = ()=>{{ 
    w: screen.width
    h: screen.height
}}

// 获取窗口尺寸
export const getWindowSize = ()=>{{
    w: window.innerWidth
    h: window.innerHeight
}}

// 获取滚动距离
export const getScrollOffset = ()=>{{
  x: window.pageXOffset
  y: window.pageYOffset
}}

// 获取视图
export const getViewPortSize = ()=>{{
  w: docElement.clientWidth
  h: docElement.clientHeight
}} 

/**
 * DOM 元素
 */

// 获取 DOM 元素原始类型
export const getElementType = function(element) {
  return Object.prototype.toString.call(element).slice(8, -1)
}

// 获取 DOM 元素的 CSS 样式规则对象
export const getElementStyleObj = function(element) {
  return document.defaultView.getComputedStyle(element, null)
}

/**
 * 简单的html模版函数
 * html 字符串转换成 DOM 对象
 */
export const tpl = function(tplStr) {
  let frag = document.createDocumentFragment(),
    div = document.createElement('DIV'),
    nodes,
    el;

  div.innerHTML = tplStr
  nodes = div.children

  if(nodes.length > 1) {
    el = div    
    frag.appendChild(div)
  } else {
    el = div.children[0]
    frag.appendChild(el)
  }

  return {
    frag,
    el,
    insert(parent) {
      parent.appendChild(frag)
      return el
    }
  }
}