///SCROLLING ELEMENT ///

////////////////////////////////////////////

// We set variables from class and id we need

let container = document.getElementById("img");

// We set the button to use carroussel

let buttonRight = document.getElementById("arrow_right");
let buttonLeft = document.getElementById("arrow_left");


// we creat two functions to aminate thumbnail from arrow button

buttonLeft.addEventListener("click", function () {
  container.scrollLeft -= 125;
  console.log("click gauche");
});

buttonRight.addEventListener("click", function () {
 container.scrollLeft += 125;
 console.log("click droit");
});