
const best_movie_alone = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"

const img = document.querySelector(".best-movie-img")
const title = document.querySelector(".best-movie-title")






/*
* This function fetch a url and 
* get json back as answer
*/
async function getJson (url) {
    const reponse = await fetch(url);
    const json = await reponse.json();
    return json
};



async function displayBestMovieImg (img) {
    const json = await getJson(best_movie_alone);
    const data =  json.results[0].image_url ;
    return img.src = data;
};

displayBestMovieImg (img);


/*
*This function put best movie title in main page 
*/

async function displayBestMovieTitle (title) {
    const json = await getJson(best_movie_alone);
    const data = json.results[0].title;
    return title.replaceChildren(data);
};

displayBestMovieTitle(title);



/*
* This function get obly the best movie url
*/

async function getBestMovieUrl () {
    const json = await getJson(best_movie_alone);
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
    /*console.log(dataArray)*/
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
* This function will fill best-movie modal with 
* data if best-movie
*/
async function fillModalWithBestMovieData () {
    const reponses = await getBestMovieDataInArray ();
    console.log(reponses);
    const title = reponses[1];
    getTitle.replaceChildren(title);
    const genre = reponses[2];
    getGenre.replaceChildren(genre);
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

