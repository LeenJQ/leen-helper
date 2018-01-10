import {onResize} from '../DOM/event'

function compute(UI_WIDTH=750) {
  var docEl = document.documentElement
  var clientWidth = docEl.clientWidth;
  if (!clientWidth) return;
  if(clientWidth>=UI_WIDTH){
      docEl.style.fontSize = '100px';
  }else{
      docEl.style.fontSize = 100 * (clientWidth / UI_WIDTH) + 'px';
  }
}

export default function() {
    onResize(compute())
}