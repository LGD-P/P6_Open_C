///SCROLLING ELEMENT IN CARROUSSEL ///

////////////////////////////////////////////


/* SCROLL LEFT */

document.querySelectorAll("button.arrow_left").forEach( buttonLeft => {
  buttonLeft.addEventListener("click", () => {
      let container = buttonLeft.nextElementSibling;
      container.scrollLeft -=125;
  });    
});



/* SCROLL RIGHT */
document.querySelectorAll("button.arrow_right").forEach( buttonRight => {
  buttonRight.addEventListener("click", () => {
      let container = buttonRight.previousElementSibling;
      container.scrollLeft += 125;
  });    
});
