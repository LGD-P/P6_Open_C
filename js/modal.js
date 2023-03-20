
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modalImage");
const modalElement = document.querySelector(".list")



/*
* This function open modal when click on image 
* Except for the best movie.
* querySelector is on parent because of dynamic creation
*/


Array.from(document.querySelectorAll(".container")).forEach(item => {
   item.addEventListener("click", event => {
      modal.style.display = "block";
      modalImage.src = event.target.src;
   });
});




/*
* This function open modal when click on info button of 
*  the best movie.
*/

document.querySelector(".best-movie-button").addEventListener( "click", () => {
   modal.style.display = "block";
   modalImage.src = document.querySelector("#best-movie").src;
   modalElement = fillModalWithBestMovieData();
   
});


/*
* This function just close modal.
*/

document.querySelector(".close").addEventListener("click", () => {
   modal.style.display = "none";
});





