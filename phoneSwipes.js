document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchmove', preventRefresh);

function preventRefresh(event) {
    // Check if the user is swiping down (negative deltaY)
    if (event.touches[0].clientY > 0 && event.touches[0].clientY < 10) {
      // Prevent the default refresh behavior
      event.preventDefault();
    }
}

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            fArrowLeft();
        } else {
            fArrowRight();
        }                       
    } else {
        if ( yDiff > 0 ) {
            fArrowUp();
        } else { 
            fArrowDown();
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};