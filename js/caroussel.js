///SCROLLING ELEMENT IN CAROUSSEL ///

////////////////////////////////////////////


/* SCROLL LEFT */

/**
 * Get all arrow_left button 
 * and move the closer .container attached 
 * in right way
 */

document.querySelectorAll("button.arrow_left").forEach( buttonLeft => {
  buttonLeft.addEventListener("click", () => {
      const container = buttonLeft.nextElementSibling;
      container.scrollLeft -=125;
  });    
});



/* SCROLL RIGHT */

/**
 * Get all arrow_right button 
 * and move the closer .container attached 
 * in right way
 */



document.querySelectorAll("button.arrow_right").forEach( buttonRight => {
  buttonRight.addEventListener("click", () => {
      const container = buttonRight.previousElementSibling;
      container.scrollLeft += 125;
  });    
});


