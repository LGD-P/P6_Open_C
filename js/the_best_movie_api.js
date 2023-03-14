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

async function display_best_movie_img (img) {
    const reponse = await fetch(best_movie_alone);
    const json = await reponse.json();
    const data = await json.results[0].image_url ;
    return img.src = data;
};
    
display_best_movie_img(img);


/*
*This function put best movie title in main page 
*/

async function display_best_movie_title (title) {
    const reponse = await fetch(best_movie_alone);
    const json = await reponse.json();
    const data = await json.results[0].title;
    return title.replaceChildren(data);
};

display_best_movie_title(title);

