
const historyUrl = "http://localhost:8000/api/v1/titles/?genre=history&sort_by=-imdb_score"
const sciFyUrl = "http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score"
const crimeUrl = "http://localhost:8000/api/v1/titles/?genre=Crime&sort_by=-imdb_score"



/*
* This function check genre pages 
* to get 7 movies url
*/
async function getSevenUrls (genreUrl) {
    const urlForMovies = [];
    const secondPage = "&page=2"
    const firstPart = await getJson(genreUrl);
    for (let i = 0; i <firstPart.results.length; i++) {
        urlForMovies.push(firstPart.results[i].url)
      }
      console.log('Première partie de la liste :' ,urlForMovies)
    if (urlForMovies.length < 8){
        console.log("Condition vérifiée !")
        const secondPart = await getJson(url + secondPage)
        for (let i = 0; i < (8 - urlForMovies.length); i++)
            urlForMovies.push(secondPart.results[i].url)
    }
    console.log(urlForMovies);
    return urlForMovies
};


const crimGenre = getSevenUrls (crimeUrl);
const sciFyGenre = getSevenUrls (sciFyUrl);
const historyGenre = getSevenUrls (historyUrl);