
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modalImage");

Array.from(document.querySelectorAll(".imgThumbnail")).forEach(item => {
   item.addEventListener("click", event => {
      modal.style.display = "block";
      modalImage.src = event.target.src;
   });
});

document.querySelector(".close").addEventListener("click", () => {
   modal.style.display = "none";
});

