// Selezionare gli elementi corretti dell'HTML
let searchBtn = document.getElementById('searchBtn');
let movie = document.getElementById('search');

console.log(movie)

// Funzione per fare la richiesta all'API di IMDb
const API_KEY = 'k_h7ez6m46';

// Esempio di utilizzo
searchBtn.addEventListener('click', function () {
    let space = document.getElementById('movie-container');
    if (space == '') {
        let loder = document.getElementById('laoder');
        loder.classList.add('.loaderActive');
    }


    const URL = `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${encodeURIComponent(movie.value)}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.onload = function () {
        if (this.status >= 200) {
            console.log("risposta arrivata correttamente");
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            // title add 
            let title = document.getElementById('title');
            title.innerHTML = 'title: ' + data.results[0].title;
            // description add 
            let description = document.getElementById('description');
            description.innerHTML = 'story: ' + data.results[0].description;
            //poster add
            let poster = document.getElementById('posterImg');
            poster.src = data.results[0].image;
            /* 2° request */
            const idImdb = data.results[0].id;


            const RATING_URL = `https://imdb-api.com/API/Ratings/${API_KEY}/${idImdb}`
            let rating = new XMLHttpRequest();
            rating.open('GET', RATING_URL);
            rating.onload = function () {
                if (this.status >= 200) {
                    console.log("risposta arrivata correttamente");
                    let rating_data = JSON.parse(rating.responseText);
                    console.log(rating_data);
                    //rating add
                    let year = document.getElementById('year');
                    year.innerHTML = 'year: ' + rating_data.year;
                    //rating add
                    let rating = document.getElementById('rating');
                    rating.innerHTML = 'Ratings: ' + rating_data.imDb;
                } else {
                    {
                        console.log("errore nella richiesta");
                        statusText;
                        rating.statusText
                    }
                }
            }

            rating.send();

            /* 3° request trailer */

            const trailer_url = `https://imdb-api.com/API/Trailer/${API_KEY}/${idImdb}`
            let trailer = new XMLHttpRequest();
            trailer.open('GET', trailer_url);
            trailer.onload = function () {
                if (this.status >= 200) {
                    console.log("risposta arrivata correttamente");
                    let trailer_data = JSON.parse(trailer.responseText);
                    console.log(trailer_data);
                  
                    //trailer add
                    let video = document.getElementById('video');
                    video.src = trailer_data.link;
                } else {
                    {
                        console.log("errore nella richiesta");
                        statusText;
                        trailer.statusText
                    }
                }
            }
            trailer.send();

        } else {
            {
                console.log("errore nella richiesta");
                statusText;
                xhr.statusText
            }

        }
    }
    xhr.send();



});