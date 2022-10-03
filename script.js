const url = 'https://api.openweathermap.org/data/2.5/';
const apiKey = config.MY_KEY;
const searchBar = document.getElementById('citySearchBar');

const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBar.value);
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(query)
    .then(weather => {
        return weather.json();
    })
    .then(displayResult);
}

const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let feelTemp = document.querySelector('.feels-like-temp');
    feelTemp.innerText = `Feels Like: ${Math.round(result.main.feels_like)}°C`;

    let humidity = document.querySelector('.humidity');
    humidity.innerText = `Humidity: ${result.main.humidity}%`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;

    let minMax = document.querySelector('.min-max');
    minMax.innerText = `Min: ${Math.round(result.main.temp_min)}°C Max: ${Math.round(result.main.temp_max)}°C`;
}

searchBar.addEventListener('keypress', setQuery);