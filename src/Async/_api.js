/**
 * !!!
 * 这段代码只是用来保存业务相关的代码
 * 仅供参考
 */

import {Observable} from 'rx'
import config       from './config'

const No = {
  groupno: '00',                // 集团编号
  orgno: '00000006',            // 机构编号
  platformno: '00000001',       // 平台编号
  terminalno: '02'              // 终端来源
}

const DEBUG = false

const errHandle = (err) => {
  const STATUS_CODE = err.status
  if(STATUS_CODE === 401 && !__DEV__) document.location.href = __LOGIN_URL__
  // return Observable.throw(err)
  return Observable.return({err})
}

class Api {
  constructor() {
    this.version = '0.0.1'
  }

  do(methods, url, dater, option={}) {
    // 所有的请求必须待 编号信息
    let data = _.assign({}, dater, No)
    if(DEBUG)  {
      console.log (
        ` [before] do accept: ======================
          URL: url |
          METHODS: methods |
          DATA: ${JSON.stringify(data)}
          ===================================
        `)
    }

    const BASE_URL     = option.noproxy == true ? '/' : __PROXY_BASE_URL__
    const URL          = `${BASE_URL}${url}`
    const METHODS      = methods.toUpperCase()
    const CONTENT_TYPE = METHODS == "POST" ? "application/x-www-form-urlencoded"
                                          : "application/json"
    const DATA         = METHODS == "POST" ? $.param(data) : _.assign({}, data, {t: new Date().getTime()})
    const $promise     = $.ajax({
                            type: METHODS,
                            url: URL,
                            contentType: CONTENT_TYPE,
                            data: DATA
                          })
    if(DEBUG)  {
      console.log (
        ` [after] do result: =================
          BASE_URL: ${BASE_URL} |
          URL: ${URL} |
          METHODS: ${METHODS} |
          CONTENT_TYPE: ${CONTENT_TYPE} |
          DATA: ${JSON.stringify(DATA)}
          =============================
        `)
    }

    return Observable.fromPromise($promise).catch(errHandle)
  }

  get(url, param, option) {
    return this.get$(...arguments).toPromise()
  }

  post(url, param, option) {
    return this.post$(...arguments).toPromise()
  }

  get$(url, param, option) {
    return this.do('GET', url, param, option)
  }

  post$(url, data, option) {
    return this.do('POST', url, data, option)
  }
}

export default new Api()
