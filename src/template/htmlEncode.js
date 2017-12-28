// HTML 字符串转译编码
function htmlEncode (str) {
  if (str.length == 0 || typeof str !== 'string') { return '' }
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/ /g, '&nbsp;')
            .replace(/\'/g, '&#39;')
            .replace(/\"/g, '&quot;')
            // .replace(/\n/g, '<br/>')
}

// HTML 字符串转译解码
function htmlDecode (str) {
  if (str.length == 0 || typeof str !== 'string') { return '' }
  return str.replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&nbsp;/g, ' ')
            .replace(/&#39;/g, '\'')
            .replace(/&quot;/g, '\"')
            // .replace(/<br[\/]?>/g, '\n')    
}