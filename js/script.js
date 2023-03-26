/*SCROLLING ELEMENT IN CAROUSSEL */



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
  
  
  

  /* UNIQUE BEST MOVIE API CALL */


const bestMovieAlone = "sort_by=-imdb_score"
const bestMovieImg = document.querySelector(".best-movie-img");
const bestMovieTitle = document.querySelector(".best-movie-title");
const bestMovieResume = document.querySelector(".best-movie-remuse");




/*
* This function fetch 'search' apply to a
* http://localhost:8000/api/v1/titles/? and 
* get json back as answer
*/
async function getJson (search) {
    const adress = "http://localhost:8000/api/v1/titles/?";
    const reponse = await fetch(adress+ search);
    const json = await reponse.json();
    return json
};




/*
* This function fech a movie  whit ID to get json data back
*/
async function fetchMovie (idOrOther){
    const reponse = await fetch("http://localhost:8000/api/v1/titles/"+idOrOther);
    const json = await reponse.json();
    /*console.log(json)*/
    return json
}


/*
* This function use global search to get best movie
* then get info we need in array to display in DOM
*/

async function getTheBestMovieData (search) {
    const theBestMovieData = [];
    const globalReponse = await getJson (search);
    const detailReponse = await fetchMovie(globalReponse.results[0].id);
    theBestMovieData.push(detailReponse.title, detailReponse.description,detailReponse.image_url);
    /*console.log(theBestMovieData)*/
    return theBestMovieData

}

/*
* This function display data for best movie in DOM
*/

async function fillDomWithBestMovie (url, img, title, resume) {
    const bestMovieData = await getTheBestMovieData(url);
    title.replaceChildren(bestMovieData[0]);
    resume.replaceChildren(bestMovieData[1]);
    img.src = bestMovieData[2];

}

fillDomWithBestMovie(bestMovieAlone,bestMovieImg,bestMovieTitle,bestMovieResume);




/* CARROUSSELS */ 
                    
const bestEverSearch = "sort_by=-imdb_score"
const historySearch = "genre=history&sort_by=-imdb_score"
const sciFySearch = "genre=Sci-Fi&sort_by=-imdb_score"
const crimeSearch = "genre=Crime&sort_by=-imdb_score"



/*
* This function check genre pages 
* to get 7 movies url in an array
*/
async function getSevenUrls (genreSearch) {
    const urlForMovies = [];
    const secondPage = "&page=2"
    const firstPart = await getJson(genreSearch);
    for (let i = 0; i <firstPart.results.length; i++) {
        urlForMovies.push(firstPart.results[i].url)
      }
      /*console.log('Première partie de la liste :' ,urlForMovies)*/
    if (urlForMovies.length < 8){
        /*console.log("Condition vérifiée !")*/
        const secondPart = await getJson(genreSearch + secondPage)
        for (let i = 0; i < (8 - urlForMovies.length); i++)
            urlForMovies.push(secondPart.results[i].url)
    }
    /*console.log('Liste complète :' ,urlForMovies);*/
    return urlForMovies
};





/*
* This function get in an array
* All sorted data we need from each 7 movies
*/

async function sevenMoviesDatasByGenre (genreSearch) {
    const allData = []
    const genre = await  getSevenUrls (genreSearch);
    for (let i =0 ; i<genre.length ; i ++)
        allData.push(await fetchMovie(genre[i].replace("http://localhost:8000/api/v1/titles/","")));
    
    
    const sortedData = []
    for (let i=0; i < allData.length; i++) 
        sortedData.push([
            allData[i].image_url, 
            allData[i].id
        ])
    console.log(sortedData)
    return sortedData
};




/*
* This function creat img in DOM from each
* url movies  
*/

async function creatElementInCaroussel (containerNumber, genreSearch) {
    const data = await sevenMoviesDatasByGenre (genreSearch);
    
    for (let i =0 ; i< data.length; i ++) {
        const containerSelection = document.querySelector(".container" + containerNumber);
        const thumbnailDiv = document.createElement("img");
        thumbnailDiv.classList.add("imgThumb","imgThumbnail"+i);
        thumbnailDiv.src = data[i][0];    
        thumbnailDiv.setAttribute('data-id', data[i][1]);
        thumbnailDiv.setAttribute('alt', data[i][1])
        containerSelection.appendChild(thumbnailDiv);   
        
  
    }
};

const categoryBest = creatElementInCaroussel(0,bestEverSearch);
const categoryHistory = creatElementInCaroussel(1,historySearch);
const categorySciFy = creatElementInCaroussel(2,sciFySearch);
const categoryCrime = creatElementInCaroussel(3,crimeSearch);





 /* MODAL PART  */




const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modalImage");
const modalElement = document.querySelector(".modal-element .list")



const getTitle = document.getElementById('Title-R');
const getGenre = document.getElementById('Genre-R');
const getDate = document.getElementById('Date-R');
const getRated= document.getElementById('Rated-R');
const getScore = document.getElementById('Score_Imdb-R');
const getMaker = document.getElementById('Maker-R');
const getActors = document.getElementById('Actors-R');
const getDuration = document.getElementById('Duration-R');
const getCountry= document.getElementById('Country-R');
const getboxOffice = document.getElementById('Box_Office-R');
const getSynopsis = document.getElementById('Synopsis-R');




/*
* This function get all datas from the best
* movie to be displayed in modal
*/

async function getBestMovieDataInModal (genreSearch){
    const globalReponse = await getJson (genreSearch)
    const reponses = await fetchMovie(globalReponse.results[0].id)
    console.log(reponses)
    const title = reponses.title;
    getTitle.replaceChildren(title);
    const genre = reponses.genres;
    getGenre.replaceChildren(genre.join(" - "));
    const date = reponses.year;
    getDate.replaceChildren(date);
    const rated = reponses.votes;
    getRated.replaceChildren(rated);
    const score = reponses.imdb_score;
    getScore.replaceChildren(score);
    const maker = reponses.directors[0];
    getMaker.replaceChildren(maker);
    const actors = reponses.actors;
    getActors.replaceChildren(actors.join(" - "));
    const duration = reponses.duration;
    getDuration.replaceChildren(duration,'min');
    const countries = reponses.countries;
    getCountry.replaceChildren(countries.join(" - "));
    const boxOffice = reponses.worldwide_gross_income;
    if (boxOffice === null) {
        getboxOffice.replaceChildren("Pas d'information");
    } else {
        getboxOffice.replaceChildren(boxOffice);
    };

    const resume = reponses.description;
    getSynopsis.replaceChildren(resume);

  };






async function fillModalWithMovieFromCarroussel (id) {
    
    const reponses = await fetchMovie(id);
    /*console.log(reponses)*/
    
    const title = reponses.title;
    getTitle.replaceChildren(title);
    const genre = reponses.genres;
    getGenre.replaceChildren(genre.join(" - "));
    const date = reponses.year;
    getDate.replaceChildren(date);
    const rated = reponses.votes;
    getRated.replaceChildren(rated);
    const score = reponses.imdb_score;
    getScore.replaceChildren(score);
    const maker = reponses.directors[0];
    getMaker.replaceChildren(maker);
    const actors = reponses.actors;
    getActors.replaceChildren(actors.join(" - "));
    const duration = reponses.duration;
    getDuration.replaceChildren(duration,'min');
    const countries = reponses.countries;
    getCountry.replaceChildren(countries.join(" - "));
    const boxOffice = reponses.worldwide_gross_income;
    if (boxOffice === null) {
        getboxOffice.replaceChildren("Pas d'information");
    } else {
        getboxOffice.replaceChildren(boxOffice);
    };
    const resume = reponses.description;
    getSynopsis.replaceChildren(resume);

};





/*
* This part open modal when click on info button of 
*  the best movie.
*/

document.querySelector(".best-movie-button").addEventListener( "click", () => {
    modal.style.display = "block";
    modalImage.src = document.querySelector("#best-movie").src
    modalElement = getBestMovieDataInModal(bestMovieAlone)
 });
 




/*
* This part open modal when click on image 
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
*This function creat carroussel Event
*/

function carrousselEvent(containerNumber) {
    Array.from(document.querySelectorAll(containerNumber)).forEach(item => {
        item.addEventListener("click", event => {
           modal.style.display = "block";
           modalImage.src = event.target.src;
           const id = event.target.attributes[2].nodeValue;   
           modalElement = fillModalWithMovieFromCarroussel (id);
           
        });
     });
};


carrousselEvent(".container0");
carrousselEvent(".container1");
carrousselEvent(".container2");
carrousselEvent(".container3");




/*
* This function just close modal.
*/

document.querySelector(".close").addEventListener("click", () => {
   modal.style.display = "none";
});





