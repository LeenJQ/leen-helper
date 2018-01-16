/**
 * class 属性帮助函数
 */

/**
 * 顺序的查找所有的, 所有的class 是否都在 classString 里
 * hasClass(classString, 'a', 'b', ....)
 */
export function hasClass() {
  const [className, ...args] = [...arguments]
  let has = true

  for(let wantClass of args) {
    if( !_classMatch(className, wantClass) ) {
      has = false
      break;
    }
  }

  return has
}

/**
 * 顺序查看所有的class， 是否所有的 class 都不在 classString 里
 * hassClass(classString, 'a', 'b', ...)
 */
export function noClass() {
  const [className, ...args] = [...arguments]
  let none = true

  for(let checkClass of args) {
    if( _classMatch(className, checkClass) ) {
      none = false
      break;
    }
  }

  return none
}

/* helper */
function _classMatch(str, want) {
  return (' '+str+' ').indexOf(' '+want.toString()+' ') > -1
}