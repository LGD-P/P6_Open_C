const best_movie_alone = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"

const img = document.querySelector(".best-movie")
const title = document.querySelector(".best-movie-title")


fetch(best_movie_alone)
    .then(res => res.json())
    .then(data =>  img.src = data.results[0].image_url)
    
    
fetch(best_movie_alone)
    .then(res => res.json())    
    .then(test => title.replaceChildren(test.results[0].title))
    











