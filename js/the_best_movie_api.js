
const best_movie_alone = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"

const img = document.querySelector(".best-movie")
const title = document.querySelector(".best-movie-title")

/*
fetch(best_movie_alone)
    .then(res =>  {return res.json();})
    .then(data =>  {img.src = data.results[0].image_url});
 */   

/*
fetch(best_movie_alone)
    .then(res => res.json())        
    .then(test => title.replaceChildren(test.results[0].title))
*/

/*
*This function replace best movie img in main page 
*/

async function displayBestMovieImg (img) {
    const reponse = await fetch(best_movie_alone);
    const json = await reponse.json();
    const data = await json.results[0].image_url ;
    return img.src = data;
};

displayBestMovieImg (img);


/*
*This function put best movie title in main page 
*/

async function displayBestMovieTitle (title) {
    const reponse = await fetch(best_movie_alone);
    const json = await reponse.json();
    const data = await json.results[0].title;
    return title.replaceChildren(data);
};

displayBestMovieTitle(title);



/*
* This function get obly the best movie url
*/

async function getBestMovieUrl () {
    const reponse = await fetch(best_movie_alone);
    const json = await reponse.json();
    const url = await json.results[0].url;
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
    return dataArray;
  };


getBestMovieDataInArray ();



  const bestMovieResume = document.querySelector(".best-movie-remuse")


/*
*This function put best movie resume in main page 
*/

async function displayBestMovieResume (resume) {
    const reponse = await getBestMovieDataInArray ();
    const answer = reponse[2];
    console.log(answer);
    return resume.replaceChildren(answer);
};


displayBestMovieResume(bestMovieResume);