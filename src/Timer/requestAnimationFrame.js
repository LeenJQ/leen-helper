let requestAnimationFrame = window.requestAnimationFrame 
                            || window.mozRequestAnimationFrame 
                            || window.webkitRequestAnimationFrame
                            || window.msRequestAnimationFrame

export default requestAnimationFrame