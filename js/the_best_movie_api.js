
const best_movie_alone = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"

const img = document.querySelector(".best-movie")
const title = document.querySelector(".best-movie-title")



async function displayBestMovieImg (img) {
    const reponse = await fetch(best_movie_alone);
    const json = await reponse.json();
    const data =  json.results[0].image_url ;
    return img.src = data;
};

displayBestMovieImg (img);


/*
*This function put best movie title in main page 
*/

async function displayBestMovieTitle (title) {
    const reponse = await fetch(best_movie_alone);
    const json = await reponse.json();
    const data = json.results[0].title;
    return title.replaceChildren(data);
};

displayBestMovieTitle(title);



/*
* This function get obly the best movie url
*/

async function getBestMovieUrl () {
    const reponse = await fetch(best_movie_alone);
    const json = await reponse.json();
    const url = json.results[0].url;
    return url;
    
};


/*
* This function get all datas from the best
* movie to be displayed in modal
*/

async function getBestMovieDataInArray (){
    const url = await getBestMovieUrl ();
    const fetchUrl = await fetch(url);
    const toJson = await fetchUrl.json();
    const dataArray = [];
    dataArray.push(
      toJson.image_url,
      toJson.title,
      toJson.genres[0],
      toJson.description,
      toJson.year,
      toJson.votes,
      toJson.imdb_score,
      toJson.directors[0],
      toJson.actors,
      toJson.duration,
      toJson.countries[0],
      toJson.worldwide_gross_incom
    );
    dataArray.splice(dataArray.indexOf("undefined"), 1, "Pas d'information");
    console.log(dataArray)
    return dataArray;
  };


  const bestMovieResume = document.querySelector(".best-movie-remuse")


/*
*This function put best movie resume in main page 
*/

async function displayBestMovieResume (resume) {
    const reponse = await getBestMovieDataInArray ();
    const answer = reponse[3];
    resume.replaceChildren(answer);
};


displayBestMovieResume(bestMovieResume);




const getTitle = document.getElementById('Title');
const getGenre = document.getElementById('Genre');
const getDate = document.getElementById('Date');
const getRated= document.getElementById('Rated');
const getScore = document.getElementById('Score_Imdb');
const getMaker = document.getElementById('Maker');
const getActors = document.getElementById('Actors');
const getDuration = document.getElementById('Duration');
const getCountry= document.getElementById('Country');
const getboxOffice = document.getElementById('Box_Office');
const getSynopsis = document.getElementById('Synopsis');





/*
* This function will fill best-movie modal with 
* data if best-movie
*/
async function fillModalWithBestMovieData () {
    const reponses = await getBestMovieDataInArray ();
    const title = reponses[1];
    getTitle.replaceChildren("Titre :  ",title);
    const genre = reponses[2];
    getGenre.replaceChildren("Genre :  ", genre);
    const date = reponses[4];
    getDate.replaceChildren("Date :  ", date);
    const rated = reponses[5];
    getRated.replaceChildren("Classement :  ", rated);
    const score = reponses[6];
    getScore.replaceChildren('Score :  ', score);
    const maker = reponses[7];
    getMaker.replaceChildren("Réalisateur :  ", maker);
    const actors = reponses[8];
    getActors.replaceChildren("Acteurs : ", actors);
    const duration = reponses[9];
    getDuration.replaceChildren("Durée :  ", duration,'min');
    const countries = reponses[10];
    getCountry.replaceChildren("Pays d'Origine : ", countries);
    const boxOffice = reponses[11];
    getboxOffice.replaceChildren("Entrée au Box Office :  ", boxOffice);
    const resume = reponses[3];
    getSynopsis.replaceChildren("Résumé :  ", resume);
};

