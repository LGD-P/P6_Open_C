
const bestMovieAlone = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"

const bestMovieImg = document.querySelector(".best-movie-img");
const bestMovieTitle = document.querySelector(".best-movie-title");
const bestMovieResume = document.querySelector(".best-movie-remuse");




/*
* This function fetch a url and 
* get json back as answer
*/
async function getJson (url) {
    const reponse = await fetch(url);
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

async function getTheBestMovieData (url) {
    const theBestMovieData = [];
    const globalReponse = await getJson (url);
    const detailReponse = await fetchMovie(globalReponse.results[0].id);
    theBestMovieData.push(detailReponse.title, detailReponse.description,detailReponse.image_url);
    console.log(theBestMovieData)
    return theBestMovieData

}

/*
* This function displaye data for best movie in DOM
*/

async function fillDomWithBestMovie (url, img, title, resume) {
    const bestMovieData = await getTheBestMovieData(url);
    title.replaceChildren(bestMovieData[0]);
    resume.replaceChildren(bestMovieData[1]);
    img.src = bestMovieData[2];

}

fillDomWithBestMovie(bestMovieAlone,bestMovieImg,bestMovieTitle,bestMovieResume);






/*
* This function get all datas from the best
* movie to be displayed in modal
*/

async function getBestMovieDataInArray (urlToFetch){
    const globalReponse = await getJson (urlToFetch)
    const detailReponse = await fetchMovie(globalReponse.results[0].id)
    const dataArray = [];
    dataArray.push(
      detailReponse.image_url,
      detailReponse.title,
      detailReponse.genres,
      detailReponse.description,
      detailReponse.year,
      detailReponse.votes,
      detailReponse.imdb_score,
      detailReponse.directors[0],
      detailReponse.actors,
      detailReponse.duration,
      detailReponse.countries[0],
      detailReponse.worldwide_gross_incom
    );
    dataArray.splice(dataArray.indexOf("undefined"), 1, "Pas d'information");
    /*console.log(dataArray)*/
    return dataArray;
  };






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





/*       CHANGER LE NOM DE CETTE FONCTION !!
* This function will fill best-movie modal with 
* data if best-movie
*/
async function fillModalWithBestMovieData (urlToFetch) {
    const reponses = await getBestMovieDataInArray (urlToFetch);
    const title = reponses[1];
    getTitle.replaceChildren(title);
    const genre = reponses[2];
    getGenre.replaceChildren(genre.join(" - "));
    const date = reponses[4];
    getDate.replaceChildren(date);
    const rated = reponses[5];
    getRated.replaceChildren(rated);
    const score = reponses[6];
    getScore.replaceChildren(score);
    const maker = reponses[7];
    getMaker.replaceChildren(maker);
    const actors = reponses[8];
    getActors.replaceChildren(actors.join(" - "));
    const duration = reponses[9];
    getDuration.replaceChildren(duration,'min');
    const countries = reponses[10];
    getCountry.replaceChildren(countries);
    const boxOffice = reponses[11];
    getboxOffice.replaceChildren(boxOffice);
    const resume = reponses[3];
    getSynopsis.replaceChildren(resume);

};



async function imgClickedByUser () { document.addEventListener('click',(e) =>{
    
    const elementClass = e.target.className;
    const result = parseInt(elementClass.at(-1));
    console.log(result);
    return result;
    });
};



async function fillModalWithSevenMovies (urlToFetch) {
    
    const reponses = await sevenMoviesDatasByGenre (urlToFetch);
    const clickedClass = await imgClickedByUser ();
    
    console.log(reponses);
    console.log(reponses[clickedClass]);

    const title = reponses[clickedClass][1];
    getTitle.replaceChildren(title);
    const genre = reponses[clickedClass][2];
    getGenre.replaceChildren(genre.join(" - "));
    const date = reponses[clickedClass][4]
    getDate.replaceChildren(date)
    const rated = reponses[clickedClass][5]
    getRated.replaceChildren(rated)
    const score = reponses[clickedClass][6]
    getScore.replaceChildren(score)
    const maker = reponses[clickedClass][7]
    getMaker.replaceChildren(maker)
    const actors = reponses[clickedClass][8]
    getActors.replaceChildren(actors.join(" - "))
    const duration = reponses[clickedClass][9]
    getDuration.replaceChildren(duration,'min')
    const countries = reponses[clickedClass][10]
    getCountry.replaceChildren(countries)
    const boxOffice = reponses[clickedClass][11]
    getboxOffice.replaceChildren(boxOffice)
    const resume = reponses[clickedClass][3]
    getSynopsis.replaceChildren(resume)
              

};



