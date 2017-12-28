/**
 * class helper
 */
export default {
  ifActive(express) {
    return express ? 'active' : ''
  },

  /**
   * 顺序的查找所有的, 所有的class 是否都在 classString 里
   * hasClass(classString, 'a', 'b', ....)
   */
  hasClass() {
    const [className, ...args] = [...arguments]
    let has = true

    for(let wantClass of args) {
      if( className.indexOf(wantClass.toString()) < 0 ) {
        has = false
        break;
      }
    }

    return has
  },

  /**
   * 顺序查看所有的class， 是否所有的 class 都不在 classString 里
   * hassClass(classString, 'a', 'b', ...)
   */
  noClass() {
    const [className, ...args] = [...arguments]
    let none = true

    for(let checkClass of args) {
      if( className.indexOf(checkClass.toString()) > -1 ) {
        none = false
        break;
      }
    }

    return none
  }

}