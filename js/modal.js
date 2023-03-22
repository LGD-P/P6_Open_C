
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modalImage");
const modalElement = document.querySelector(".modal-element .list")







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

Array.from(document.querySelectorAll(".container0")).forEach(item => {
   item.addEventListener("click", event => {
      modal.style.display = "block";
      modalImage.src = event.target.src;
      modalElement = fillModalWithBestMovieData(bestEverUrl);
      
   });
});


Array.from(document.querySelectorAll(".container1")).forEach(item => {
   item.addEventListener("click", event => {
      modal.style.display = "block";
      modalImage.src = event.target.src;
      modalElement = fillModalWithBestMovieData (historyUrl);

   });
});


Array.from(document.querySelectorAll(".container2")).forEach(item => {
   item.addEventListener("click", event => {
      modal.style.display = "block";
      modalImage.src = event.target.src;
      modalElement = fillModalWithBestMovieData (sciFyUrl);
      
   });
});


Array.from(document.querySelectorAll(".container3")).forEach(item => {
   item.addEventListener("click", event => {
      modal.style.display = "block";
      modalImage.src = event.target.src;
      modalElement =  fillModalWithSevenMovies (crimeUrl);
      
   });
});



/*
* This function open modal when click on info button of 
*  the best movie.
*/

document.querySelector(".best-movie-button").addEventListener( "click", () => {
   modal.style.display = "block";
   modalImage.src = document.querySelector("#best-movie").src
   modalElement = fillModalWithBestMovieData(bestMovieAlone)
});


/*
* This function just close modal.
*/

document.querySelector(".close").addEventListener("click", () => {
   modal.style.display = "none";
});





