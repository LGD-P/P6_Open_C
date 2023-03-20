const bestEverUrl = "http://localhost:8000/api/v1/titles/?-imdb_score"
const historyUrl = "http://localhost:8000/api/v1/titles/?genre=history&sort_by=-imdb_score"
const sciFyUrl = "http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score"
const crimeUrl = "http://localhost:8000/api/v1/titles/?genre=Crime&sort_by=-imdb_score"



/*
* This function check genre pages 
* to get 7 movies url in an array
*/
async function getSevenUrls (genreUrl) {
    const urlForMovies = [];
    const secondPage = "&page=2"
    const firstPart = await getJson(genreUrl);
    for (let i = 0; i <firstPart.results.length; i++) {
        urlForMovies.push(firstPart.results[i].url)
      }
      /*console.log('Première partie de la liste :' ,urlForMovies)*/
    if (urlForMovies.length < 8){
        /*console.log("Condition vérifiée !")*/
        const secondPart = await getJson(genreUrl + secondPage)
        for (let i = 0; i < (8 - urlForMovies.length); i++)
            urlForMovies.push(secondPart.results[i].url)
    }
    /*console.log('Liste complète :' ,urlForMovies);*/
    return urlForMovies
};



/*
* This fuynction get in an array
* All data from 7 movies
*/

async function sevenMoviesDatasByGenre (urlCategory) {
    const allData = []
    const genre = await  getSevenUrls (urlCategory);
    for (let i =0 ; i< genre.length; i ++)
        allData.push(await getJson(genre[i]));
    console.log(allData)
    return allData
};


/*
* This function creat img in DOM from each
* url movie  
*/

async function creatElementTest (containerNumber, genreUrl) {
    const data = await sevenMoviesDatasByGenre (genreUrl);
    
    for (let i =0 ; i< data.length; i ++) {
        const containerSelection = document.querySelector(".container" + containerNumber);
        const thumbnailDiv = document.createElement("img");
        thumbnailDiv.classList.add("imgThumbnail");
        thumbnailDiv.src = data[i].image_url;    
        containerSelection.appendChild(thumbnailDiv);
    };

};

const test = creatElementTest(0,bestEverUrl);
const test2 =  creatElementTest(1,historyUrl);
const test3 = creatElementTest(2,sciFyUrl);
const test4 = creatElementTest(3,crimeUrl);
