
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modalImage");



/*
* This function open modal when click on image 
* Except for the best movie.
*/

Array.from(document.querySelectorAll(".imgThumbnail")).forEach(item => {
   item.addEventListener("click", event => {
      modal.style.display = "block";
      modalImage.src = event.target.src;
   });
});


/*
* This function open modal when click on info button of 
*  the best movie.
*/

document.querySelector(".best-movie-button").addEventListener( "click", event => {
   modal.style.display = "block";
   modalImage.src = document.querySelector("#best-movie").src;
   
});


/*
* This function just close modal.
*/

document.querySelector(".close").addEventListener("click", () => {
   modal.style.display = "none";
});





