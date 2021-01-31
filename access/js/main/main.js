function slideLeft (className) { 
    if (currentTranslate === 0) {
        currentTranslate = -maxTransform;
    } 
    currentTranslate += 100;
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.transform = 'translateX('+currentTranslate+'%)';
    }
}

function slideRight () {            
  currentTranslate += -100;
  if (currentTranslate === -maxTransform) {
    currentTranslate = 0;
  } 
  for(var i = 0; i < slides.length; i++) {
      slides[i].style.transform = 'translateX('+currentTranslate+'%)';
  }
}

function slideMiddleLeft () { 
    if (currentTranslateMiddle === 0) {
        currentTranslateMiddle = -maxTransformMiddle;
    } 
    currentTranslateMiddle += 100;
    for(var i = 0; i < slidesMiddle.length; i++) {
        slidesMiddle[i].style.transform = 'translateX('+currentTranslateMiddle+'%)';
    }
}

function slideMiddleRight () {  
    currentTranslateMiddle += -100;
    if (currentTranslateMiddle === -maxTransformMiddle) {
        currentTranslateMiddle = 0;
    } 
    for(var i = 0; i < slidesMiddle.length; i++) {
        slidesMiddle[i].style.transform = 'translateX('+currentTranslateMiddle+'%)';
    }
}

window.onload = function() {
    var button = document.getElementById('next');
    var buttonMiddle = document.getElementById('middle-banner-next');
    button.click();
    buttonMiddle.click();
    setInterval(function(){
        button.click();
        buttonMiddle.click();
    }, 10000);  // this will make it click again every 1000 miliseconds
}