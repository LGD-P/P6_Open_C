const bestEverUrl = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
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
* This function get in an array
* All sorted data we need from each 7 movies
*/

async function sevenMoviesDatasByGenre (urlCategory) {
    const allData = []
    const genre = await  getSevenUrls (urlCategory);
    for (let i =0 ; i< genre.length; i ++)
        allData.push(await getJson(genre[i]));
    
    const sortedData = []
    for (let i=0; i < allData.length; i++) 
        sortedData.push([
            allData[i].image_url, 
            /*
            allData[i].title,
            allData[i].genres[0],
            allData[i].description,
            allData[i].year,
            allData[i].votes,
            allData[i].imdb_score,
            allData[i].directors[0],
            allData[i].actors,
            allData[i].duration,
            allData[i].countries[0],
            allData[i].worldwide_gross_incom,
            */
            allData[i].id
        ])
    /*console.log(sortedData)*/
    return sortedData
};




/*
* This function creat img in DOM from each
* url movies  
*/

async function creatElementInCaroussel (containerNumber, genreUrl) {
    const data = await sevenMoviesDatasByGenre (genreUrl);
    
    for (let i =0 ; i< data.length; i ++) {
        const containerSelection = document.querySelector(".container" + containerNumber);
        const thumbnailDiv = document.createElement("img");
        thumbnailDiv.classList.add("imgThumb","imgThumbnail"+i);
        thumbnailDiv.src = data[i][0];    
        thumbnailDiv.setAttribute('data-id', data[i][1]);
        thumbnailDiv.setAttribute('alt', data[i][1])
        containerSelection.appendChild(thumbnailDiv);   
        /* faire un set attribut avec l'id du film et ensuite */
  
    }
};

const categoryBest = creatElementInCaroussel(0,bestEverUrl);
const categoryHistory = creatElementInCaroussel(1,historyUrl);
const categorySciFy = creatElementInCaroussel(2,sciFyUrl);
const categoryCrime = creatElementInCaroussel(3,crimeUrl);
