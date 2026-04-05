const apiKey = 'YOUR_API_KEY';
const city = 'YOUR_CITY';

// Function to fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchWeather();