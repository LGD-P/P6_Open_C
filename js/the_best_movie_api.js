
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
    /*console.log(theBestMovieData)*/
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

async function getBestMovieDataInModal (urlToFetch){
    const globalReponse = await getJson (urlToFetch)
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
    getboxOffice.replaceChildren(boxOffice);
    const resume = reponses.description;
    getSynopsis.replaceChildren(resume);

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




async function fillModal (id) {
    
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



