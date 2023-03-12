let container = document.querySelector(".container");
let buttonLeft = document.querySelector(".arrow_left"); 
let buttonRight = document.querySelector(".arrow_right");



buttonLeft.onclick = () => {
    container.scrollLeft -= 125;
    console.log("click gauche");
};

buttonRight.onclick = () => {
    container.scrollLeft += 125;
    console.log("click droit");
};


