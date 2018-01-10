import {onResize} from '../DOM/event'
import {docElement, viewPortWidth} from '../BOM/browserInfo'

function compute(UI_WIDTH=750) {
  if (!viewPortWidth) return;
  if(viewPortWidth>=UI_WIDTH){
    docElement.style.fontSize = '100px';
  }else{
    docElement.style.fontSize = 100 * (viewPortWidth / UI_WIDTH) + 'px';
  }
}

export default function() {
    onResize(compute())
}