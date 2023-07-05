let city = document.getElementById('city');
let searchBtn = document.getElementById('search');
const API_KEY = `93697fbbb078a5951980ce5fd10d4b14`;
searchBtn.addEventListener('click', function () {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=${API_KEY}&units=metric`;

    let xhr = new XMLHttpRequest;
    xhr.open('GET', URL);
    xhr.onload = function () {
        if (this.status >= 200) {
            console.log("risposta arrivata correttamente");
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            /* temp */
            let temp = document.getElementById('temp');
            temp.innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i>  ' + data.main.temp + '°';
            temp.style.display = 'flex';
            /* city */
            let cityname = document.getElementById('cityname');
            cityname.innerHTML = data.name;
            cityname.style.display = 'flex';
            /* condtion */
            let condition = document.getElementById('condition');
            condition.innerHTML = data.weather[0].main;
            condition.style.display = 'flex';
            /* description */
            let description = document.getElementById('description');
            description.innerHTML = data.weather[0].description;
            description.style.display = 'flex';
            /* icons */
            let icon = document.getElementById('icon');
            icon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            let iconContainer = document.getElementById('weather-icon');
            iconContainer.style.display = 'flex';
        } else {
            console.log("errore nella richiesta");
        }
    }
    xhr.send();
});