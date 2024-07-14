async function fetchWeather(url) {
    try {
        let response = await fetch(url);

        if (response.ok) {
            let json = await response.json();
            let cards = document.getElementById('weather-cards');
        
            for (const data of json.list) {
                const date = new Date(data.dt * 1000);
                const day = date.getDate().toString().padStart(2, '0');
                const month = date.toLocaleString('en-US', { month: 'long' });
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                const temp = Math.round(data.main.temp);
                const weather = data.weather[0].main;
                const description = data.weather[0].description;
                const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

                let card = document.createElement('div');
                card.classList.add('weather-card');
                card.innerHTML = `
                    <div class="date">${month} ${day}</div>
                    <div class="info">
                        <div class="time">${hours}:${minutes}</div>
                        <img src="${icon}" alt="${weather.toLowerCase()}">
                        <div class="temperature">${temp}&#176;C</div>
                        <div class="description">${description.charAt(0).toUpperCase() + description.slice(1)}</div>
                    </div>
                `;

                cards.append(card);
            }
        }
    } 
    catch(error) {
        alert(error);
    }
}

const key  = '3ee8c029cd21228fd192a3bd11884839';
const city = 'Kharkiv';
const url  = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`;

fetchWeather(url);