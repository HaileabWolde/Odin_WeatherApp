import "./styles.css";
const APIKEY = 'WCVGTG5MW2HXEPAUAUJJWGHPA';
const fa_search = document.querySelector('.fa-search');
const cityInput = document.getElementById('city');


async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${APIKEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
fa_search.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeatherData(city);
    } else {
        alert('Please enter a city name');
    }});