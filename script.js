const apiKey = 'f19787ae1432068d8c47f0fdb264c519';
const city = 'Odessa';

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        updateWeatherWidget(data);
    } catch (error) {
        console.error('Fetch weather failed:', error);
        document.querySelector('.description').textContent = 'Failed to load weather data';
    }
}

function updateWeatherWidget(data) {
    const weatherWidget = document.getElementById('weather-widget');
    weatherWidget.querySelector('.description').textContent = data.weather[0].description;
    weatherWidget.querySelector('.temp').textContent = `${data.main.temp}°C`;
    weatherWidget.querySelector('.humidity').textContent = `Вологість: ${data.main.humidity}%`;
}

document.getElementById('refresh-btn').addEventListener('click', fetchWeather);

fetchWeather();
