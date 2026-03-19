const apiKey = "";

function weatherSVGs(id) {
    const weatherSVGs = {
        "clear-day": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="${id}" x1="150" x2="234" y1="119.2" y2="264.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".5" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><g transform="translate(64 64)"><circle cx="192" cy="192" r="84" fill="url(#${id})" stroke="#f8af18" stroke-miterlimit="10" stroke-width="6"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M192 61.7V12m0 360v-49.7m92.2-222.5 35-35M64.8 319.2l35.1-35.1m0-184.4-35-35m254.5 254.5-35.1-35.1M61.7 192H12m360 0h-49.7"/></g></svg>`,
        "clear-night": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="${id}" x1="54.3" x2="187.2" y1="29" y2="259.1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".5" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient></defs><path fill="url(#${id})" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M373.3 289.6A133.4 133.4 0 01239 157.2 130.5 130.5 0 01243.5 124 133 133 0 00124 255.6c0 73.1 60 132.4 134.2 132.4 62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 01-14.8.8Z"/></svg>`,
        "cloudy": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="${id}" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".5" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#${id})" stroke="#e6effc" stroke-miterlimit="10" stroke-width="6" d="M372 252l-2.5.1A83.9 83.9 0 00216.6 188a56 56 0 00-84.6 48 56.6 56.6 0 00.8 9 60 60 0 0011.2 119l4-.2v.2h224a56 56 0 000-112z"/></svg>`,
        "partly-cloudy-day": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="${id}" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".5" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="${id}s" x1="78" x2="118" y1="63.4" y2="132.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".5" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><g transform="translate(81 145)"><circle cx="17" cy="62" r="40" fill="url(#${id}s)" stroke="#f8af18" stroke-width="4"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-width="12" d="M17-4.6V-30m0 184v-25.4M64.1 15l18-17.9M-48 127l18-17.9M-30 15-48-3M82.1 127.1l-18-18M-75 62H-100m184 0h-25.4"/><path fill="url(#${id})" stroke="#e6effc" stroke-width="6" d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"/></g></svg>`,
        "partly-cloudy-night": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="${id}" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".5" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="${id}n" x1="34.7" x2="119.2" y1="18.6" y2="165" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".5" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient></defs><g transform="translate(81 145)"><path fill="url(#${id}n)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M81.6 85.4a84.8 84.8 0 01-85.4-84.3A83.3 83.3 0 01-1 20 84.7 84.7 0 00-77 103.7 84.8 84.8 0 008.4 188a85.2 85.2 0 0082.6-63.1 88 88 0 01-9.4.5Z"/><path fill="url(#${id})" stroke="#e6effc" stroke-width="6" d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"/></g></svg>`,
        "partly-cloudy-day-rain": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="${id}" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".5" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="${id}s" x1="78" x2="118" y1="63.4" y2="132.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".5" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="${id}r" x1="1381.3" x2="1399.5" y1="-1144.7" y2="-1097.4" gradientTransform="rotate(-9 8002.567 8233.063)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0b65ed"/><stop offset=".5" stop-color="#0a5ad4"/><stop offset="1" stop-color="#0950bc"/></linearGradient></defs><g transform="translate(81 145)"><circle cx="17" cy="62" r="40" fill="url(#${id}s)" stroke="#f8af18" stroke-width="4"/><path fill="url(#${id})" stroke="#e6effc" stroke-width="6" d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"/><g transform="translate(110.5 198.5)"><path fill="url(#${id}r)" stroke="#0a5ad4" d="M8.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"/><path fill="url(#${id}r)" stroke="#0a5ad4" d="M64.5 109.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"/><path fill="url(#${id}r)" stroke="#0a5ad4" d="M120.5 74.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"/></g></g></svg>`,
        "snow": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="${id}" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".5" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="${id}w" x1="11.4" x2="32.8" y1="5.9" y2="43.1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".5" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient></defs><path fill="url(#${id})" stroke="#e6effc" stroke-miterlimit="10" stroke-width="6" d="M372 252l-2.5.1A83.9 83.9 0 00216.6 188a56 56 0 00-84.6 48 56.6 56.6 0 00.8 9 60 60 0 0011.2 119l4-.2v.2h224a56 56 0 000-112z"/><g transform="translate(177.9 337.5)" fill="url(#${id}w)" stroke="#86c3db"><path d="m41.7 31-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 00-4-7l-5.8 3.3a13.6 13.6 0 00-5.6-3.3V4.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2L6.6 11a4 4 0 00-4 7l5.8 3.3a13.7 13.7 0 000 6.5L2.5 31a4 4 0 004 7l5.8-3.3a13.6 13.6 0 005.6 3.2v6.6a4 4 0 008.2 0v-6.6a14.2 14.2 0 005.6-3.2l6 3.3a4 4 0 004-7.5zm-22.7-1.3a6 6 0 115.2-10.5 6 6 0 01-5.2 10.5z"/><path d="m97.7 121-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 00-4.1-7l-5.8 3.3a13.6 13.6 0 00-5.6-3.3v-6.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2l-5.8-3.3a4 4 0 00-4.1 7l5.8 3.3a13.7 13.7 0 000 6.5l-5.8 3.2a4 4 0 004.1 7l5.8-3.3a13.6 13.6 0 005.7 3.2v6.6a4 4 0 008 0V128a14.2 14.2 0 005.7-3.2l5.8 3.3a4 4 0 004.1-7.5zM75 119.7a6 6 0 115.2-10.5 6 6 0 01-5.2 10.5z"/><path d="m153.7 71-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 00-4.1-7l-5.8 3.3a13.6 13.6 0 00-5.6-3.3v-6.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2l-5.8-3.3a4 4 0 00-4.1 7l5.8 3.3a13.7 13.7 0 000 6.5l-5.8 3.2a4 4 0 004.1 7l5.8-3.3a13.6 13.6 0 005.7 3.2v6.6a4 4 0 008 0v-6.6a14.2 14.2 0 005.7-3.2l5.8 3.3a4 4 0 004.1-7.5zM131 69.7a6 6 0 115.2-10.5 6 6 0 01-5.2 10.5z"/></g></svg>`
    };

    return weatherSVGs;
}

function currentTime(data) {
    const nowUTC = Math.floor(Date.now() / 1000);
    const cityTime = new Date((nowUTC + data.timezone) * 1000);
    const hours = cityTime.getUTCHours().toString().padStart(2,'0');
    const minutes = cityTime.getUTCMinutes().toString().padStart(2,'0');

    return { hours, minutes };
}

function updateTime(id, data) {
    const time = currentTime(data);
    const timeElements = document.querySelectorAll(`.current-time-${id}`);

    timeElements.forEach((el) => {
        el.textContent = `${time.hours}:${time.minutes}`;
    })
}

function cityWeather(id, data) {

    updateTime(id, data);

    const weatherInfo = { tempRn: document.querySelectorAll(`.temp-rn-p-${id}`), aboutRn: document.querySelectorAll(`.about-rn-${id}`), aboutFeels: document.querySelectorAll(`.about-feels-${id}`), wind: document.querySelectorAll(`.wind-${id}`), humidity: document.querySelectorAll(`.humidity-${id}`), visibility: document.querySelectorAll(`.visibility-${id}`), pressure: document.querySelectorAll(`.pressure-${id}`), wd: document.querySelectorAll(`.wd-${id}`)};

    weatherInfo.tempRn.forEach((el)=> el.textContent = Math.round(data.main.temp)+"°")
    weatherInfo.aboutRn.forEach((el)=> el.textContent = data.weather[0].description.replace(/\b\w/g, c => c.toUpperCase()))
    weatherInfo.aboutFeels.forEach((el)=> el.textContent = "feels like "+Math.round(data.main.feels_like)+"°")
    weatherInfo.wind.forEach((el)=> {
        const speed = Math.round(data.wind.speed);
        const direction = getWindDirection(data.wind.deg);
        const windText = `${speed} m/s ${direction}`;
        el.textContent = windText;
    })
    weatherInfo.humidity.forEach((el)=> el.textContent = data.main.humidity+"%")
    weatherInfo.visibility.forEach((el)=> el.textContent = Math.round(data.visibility / 1000)+"km")
    weatherInfo.pressure.forEach((el)=> el.textContent = data.main.pressure +" hPa")
    const weatherImages = {
        "clear sky": "clear_sky.jpg",
        "scattered clouds": "scattered_clouds.jpg",
        "broken clouds": "broken_clouds.jpg",
        "overcast clouds": "overcast_clouds.jpg",
        "light rain": "light_rain.jpg",
        "few clouds": "few_clouds.jpg",
        "light snow": "snow.jpg",
        "snow": "snow.jpg"
    };

    const description = data.weather[0].description.toLowerCase();
    const imageName = weatherImages[description];

    if (imageName) {
        weatherInfo.wd.forEach((el) => {
            el.style.backgroundImage = `url("images/${imageName}")`;
        });
    }

    setInterval(() => {
        updateTime(id, data);
    }, 60000);
}

function cityHourlyWeather(id, svgIcons, data) {

    const hourlyWeatherArray = []

    for(i = 1; i < 25; i++) {
        const WeatherInfo = { hourTime: document.querySelector(`.hour-${i}-${id} > .hour-time`), svgContainer: document.querySelector(`.hour-${i}-${id} > .svg-container`), chanceOfPrecipitation: document.querySelector(`.hour-${i}-${id} > .chance-of-precipitation`), hourlyWeatherDeg: document.querySelector(`.hour-${i}-${id} > .hourly-weather-deg`) };
        hourlyWeatherArray.push(WeatherInfo);
    }

    for(i = 0; i < 12; i++) {
        hourlyWeatherArray[i].hourTime.textContent = `${i+1} a.m`;
    }

    for(i = 0; i < 12; i++) {
        hourlyWeatherArray[i+12].hourTime.textContent = `${i+1} p.m`;
    }

    for(i = 0; i < 24; i++) {
        hourlyWeatherArray[i].svgContainer.innerHTML = `${svgIcons[i]}`;
        hourlyWeatherArray[i].chanceOfPrecipitation.textContent = `${data.hourly.precipitation_probability[i]}%`;
        hourlyWeatherArray[i].hourlyWeatherDeg.textContent = `${Math.round(data.hourly.temperature_2m[i])}°`;
    }
}

function cityDailyWeather(id, svgIcons, data) {

    const dailyWeatherArray = []

    for(i = 1; i < 9; i++) {
        const WeatherInfo = { dayOfTheWeek: document.querySelector(`.day-${i}-${id} > .day-of-the-week`), minMaxTemp: document.querySelector(`.day-${i}-${id} > .min-max-temp`), svgContainer: document.querySelector(`.day-${i}-${id} > .svg-container-2`) };
        dailyWeatherArray.push(WeatherInfo);
    }

    const week = dayOfTheWeek(data)

    for(i = 0; i < 8; i++) {
        dailyWeatherArray[i].dayOfTheWeek.textContent = week[i];
        dailyWeatherArray[i].minMaxTemp.textContent = `${Math.round(data.daily.temperature_2m_min[i])} / ${Math.round(data.daily.temperature_2m_max[i])}`;
        dailyWeatherArray[i].svgContainer.innerHTML = `${svgIcons[i]}`;
    }
}

// ----------------------------- KHAKRIV -----------------------------

async function fetchWeatherKharkiv() {
    try {
        const res = await fetch("/api/get-weather?city=kharkiv");
        const data = await res.json();

        cityWeather(1, data)
    } catch(err) {
        console.log(`error ${err}`)
    }
}

async function fetchWeatherKharkivDpandUv() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=49.9808&longitude=36.2527&current_weather=true&hourly=dewpoint_2m,uv_index&timezone=auto`;

    try {
        const res = await fetch(url);
        const data = await res.json();
    
        const h = data.hourly;
        const dewpoint = Math.round(h.dewpoint_2m[0]);
        const uvIndex  = Math.round(h.uv_index[0]);

        document.querySelectorAll(".uv-1").forEach((uvOne)=> {
            uvOne.textContent = uvIndex+" UV"
        })
        document.querySelectorAll(".dp-1").forEach((dpOne)=> {
            dpOne.textContent = dewpoint+" °C"
        })
    } catch (err) {
        console.error("Ошибка при получении данных:", err);
    }
}

async function fetchHourlyWatherKharkiv() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=49.9808&longitude=36.2527&hourly=weathercode,is_day,temperature_2m,precipitation_probability,cloudcover&timezone=auto&forecast_days=1";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const icons = await fetchWeatherIcons(49.9808, 36.2527)
        const svgIcons = icons.map((iconName, index) => {
        // уникальный ID
            const uniqueId = `grad-${index}-1`;
            const allIcons = weatherSVGs(uniqueId); 
            return allIcons[iconName] || allIcons["cloudy"];
        });
        cityHourlyWeather(1, svgIcons, data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

async function fetchDailyWatherKharkiv() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=49.9808&longitude=36.2527&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=8";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const icons = await fetchWeatherIcons(49.9808, 36.2527)
        const svgIcons = icons.map((iconName, index) => {
        // уникальный ID
            const uniqueId = `grad-${index}-5`;
            const allIcons = weatherSVGs(uniqueId); 
            return allIcons[iconName] || allIcons["cloudy"];
        });
        cityDailyWeather(1, svgIcons, data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

// ----------------------------- ZABRZE -----------------------------

async function fetchWeatherZabrze() {
    try {
        const res = await fetch("/api/get-weather?city=zabrze");
        const data = await res.json();

        cityWeather(2, data)
    } catch(err) {
        console.log(`error ${err}`)
    }
}

async function fetchWeatherZabrzeDpandUv() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=50.3249&longitude=18.7858&current_weather=true&hourly=dewpoint_2m,uv_index&timezone=auto`;

    try {
        const res = await fetch(url);
        const data = await res.json();
    
        const h = data.hourly;
        const dewpoint = Math.round(h.dewpoint_2m[0])
        const uvIndex  = Math.round(h.uv_index[0]);   

        document.querySelectorAll(".uv-2").forEach((uvTwo)=> {
            uvTwo.textContent = uvIndex+" UV"
        })
        document.querySelectorAll(".dp-2").forEach((dpTwo)=> {
            dpTwo.textContent = dewpoint+" °C"
        })
    } catch (err) {
        console.error("Ошибка при получении данных:", err);
    }
}

async function fetchHourlyWatherZabrze() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=50.3249&longitude=18.7858&hourly=weathercode,is_day,temperature_2m,precipitation_probability,cloudcover&timezone=auto&forecast_days=1";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const icons = await fetchWeatherIcons(50.3249, 18.7858)
        const svgIcons = icons.map((iconName, index) => {
        // уникальный ID
            const uniqueId = `grad-${index}-2`;
            const allIcons = weatherSVGs(uniqueId); 
            return allIcons[iconName] || allIcons["cloudy"];
        });
        cityHourlyWeather(2, svgIcons, data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

async function fetchDailyWatherZabrze() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=50.3249&longitude=18.7858&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=8";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const icons = await fetchWeatherIcons(50.3249, 18.7858)
        const svgIcons = icons.map((iconName, index) => {
        // уникальный ID
            const uniqueId = `grad-${index}-6`;
            const allIcons = weatherSVGs(uniqueId); 
            return allIcons[iconName] || allIcons["cloudy"];
        });
        cityDailyWeather(2, svgIcons, data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

// ----------------------------- GOTTMADINGEN -----------------------------

async function fetchWeatherGottmadingen() {
    try {
        const res = await fetch("/api/get-weather?city=gottmadingen");
        const data = await res.json();

        cityWeather(3, data)
    } catch(err) {
        console.log(`error ${err}`)
    }
}

async function fetchWeatherGottmadingenDpandUv() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=47.7351&longitude=8.7769&current_weather=true&hourly=dewpoint_2m,uv_index&timezone=auto`;

    try {
        const res = await fetch(url);
        const data = await res.json();
    
        const h = data.hourly;
        const dewpoint = Math.round(h.dewpoint_2m[0])
        const uvIndex  = Math.round(h.uv_index[0]);   

        document.querySelectorAll(".uv-3").forEach((uvThree)=> {
            uvThree.textContent = uvIndex+" UV"
        })
        document.querySelectorAll(".dp-3").forEach((dpThree)=> {
            dpThree.textContent = dewpoint+" °C"
        })
    } catch (err) {
        console.error("Ошибка при получении данных:", err);
    }
}

async function fetchHourlyWatherGottmadingen() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=47.7351&longitude=8.7769&hourly=temperature_2m,precipitation_probability,cloudcover&timezone=auto&forecast_days=1";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const icons = await fetchWeatherIcons(47.7351, 8.7769)
        const svgIcons = icons.map((iconName, index) => {
        // уникальный ID
            const uniqueId = `grad-${index}-3`;
            const allIcons = weatherSVGs(uniqueId); 
            return allIcons[iconName] || allIcons["cloudy"];
        });
        cityHourlyWeather(3, svgIcons, data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

async function fetchDailyWatherGottmadingen() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=47.7351&longitude=8.7769&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=8";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const icons = await fetchWeatherIcons(47.7351, 8.7769)
        const svgIcons = icons.map((iconName, index) => {
        // уникальный ID
            const uniqueId = `grad-${index}-7`;
            const allIcons = weatherSVGs(uniqueId); 
            return allIcons[iconName] || allIcons["cloudy"];
        });
        cityDailyWeather(3, svgIcons, data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

// ----------------------------- SANDANSKI -----------------------------

async function fetchWeatherSandanski() {
    try {
        const res = await fetch("/api/get-weather?city=sandanski");
        const data = await res.json();

        cityWeather(4, data)
    } catch(err) {
        console.log(`error ${err}`)
    }
}

async function fetchWeatherSandanskiDpandUv() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=41.5667&longitude=23.2833&current_weather=true&hourly=dewpoint_2m,uv_index&timezone=auto`;

    try {
        const res = await fetch(url);
        const data = await res.json();
    
        const h = data.hourly;
        const dewpoint = Math.round(h.dewpoint_2m[0])
        const uvIndex  = Math.round(h.uv_index[0]);   

        document.querySelectorAll(".uv-4").forEach((uvFour)=> {
            uvFour.textContent = uvIndex+" UV"
        })
        document.querySelectorAll(".dp-4").forEach((dpFour)=> {
            dpFour.textContent = dewpoint+" °C"
        })
    } catch (err) {
        console.error("Ошибка при получении данных:", err);
    }
}

async function fetchHourlyWatherSandanski() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=41.5667&longitude=23.2833&hourly=temperature_2m,precipitation_probability,cloudcover&timezone=auto&forecast_days=1";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const icons = await fetchWeatherIcons(41.5667, 23.2833)
        const svgIcons = icons.map((iconName, index) => {
        // уникальный ID
            const uniqueId = `grad-${index}-4`;
            const allIcons = weatherSVGs(uniqueId); 
            return allIcons[iconName] || allIcons["cloudy"];
        });
        cityHourlyWeather(4, svgIcons, data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

async function fetchDailyWatherSandanski() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=41.5667&longitude=23.2833&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=8";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const icons = await fetchWeatherIcons(41.5667, 23.2833)
        const svgIcons = icons.map((iconName, index) => {
        // уникальный ID
            const uniqueId = `grad-${index}-8`;
            const allIcons = weatherSVGs(uniqueId); 
            return allIcons[iconName] || allIcons["cloudy"];
        });
        cityDailyWeather(4, svgIcons, data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

function getWindDirection(deg) {
    const directions = [
        "N", "NNE", "NE", "ENE",
        "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW",
        "W", "WNW", "NW", "NNW"
    ];

    const index = Math.round(deg / 22.5) % 16;
    return directions[index];
}

async function fetchWeatherIcons(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=weathercode,is_day&timezone=auto&forecast_days=1`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const h = data.hourly;

        return h.time.map((_, i) => {
            const code = h.weathercode[i];
            const isDay = !!h.is_day[i];

            // 0: Чистое небо
            if (code === 0) return isDay ? "clear-day" : "clear-night";
            
            // 1, 2: Преимущественно ясно / Переменная облачность
            if (code === 1 || code === 2) return isDay ? "partly-cloudy-day" : "partly-cloudy-night";
            
            // 3, 45, 48: Пасмурно, Туман
            if ([3, 45, 48].includes(code)) return "cloudy";

            // 51-67, 80-82, 95-99: Все виды дождя, мороси и гроз
            // Добавляем сюда коды 66, 67 (ледяной дождь) — визуально это дождь
            if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code)) {
                return isDay ? "partly-cloudy-day-rain" : "partly-cloudy-night-rain";
            }

            // 71-77, 85, 86: Снег, снежные зерна, снежные ливни
            if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";

            return "cloudy"; // Безопасный возврат
        });
    } catch (err) {
        console.error("Ошибка API:", err);
        return [];
    }
}

function dayOfTheWeek(data) {
    const todayFromApi = data.daily.time[0];

    return data.daily.time.map((dateStr) => {
    // Добавляем 'T00:00', чтобы JS не сдвигал дату на день назад из-за часового пояса
    const date = new Date(dateStr + 'T00:00');
        
    if (dateStr === todayFromApi) {
        return "Today";
    }

    // Возвращаем Mon, Tue и т.д.
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    });
}

let Cities = [];
let timeout = null;
let cityInfo;
const searchInput = document.querySelector(".search-bar > input")
const weatherProject1 = document.querySelector(".weather-project")

// function renderSearchHtml() {
//     weatherProject1.innerHTML = `
//     <h1 class="weather-h1" id="h1-1">Kharkiv</h1>
//         <div class="weather" id="weather-1">
//             <div class="weather-details-1 wd-1">
//                 <p class="current-time current-time-1"></p>
//                 <div class="details">
//                     <div class="temp-rn">
//                         <p class="temp-rn-p temp-rn-p-1"></p>
//                     </div>
//                     <div class="more-info">
//                         <p class="about-rn about-rn-1"></p>
//                         <p class="about-feels about-feels-1"></p>
//                     </div>
//                 </div>
//             </div>
//             <div class="weather-details-2">
//                 <div class="details-2-more">
//                     <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/></svg> Wind</span>
//                     <p class="wind-1"></p>
//                 </div>
//                 <div class="details-2-more">
//                     <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm170-148.5Q720-317 720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180q100 0 170-68.5Z"/></svg> Humidity</span>
//                     <p class="humidity-1"></p>
//                 </div>
//                 <div class="details-2-more">
//                     <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg> Visibility</span>
//                     <p class="visibility-1"></p>
//                 </div>
//                 <div class="details-2-more">
//                     <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M160-400v-80h640v80H160Zm0-120v-80h640v80H160ZM440-80v-128l-64 64-56-56 160-160 160 160-56 56-64-62v126h-80Zm40-560L320-800l56-56 64 64v-128h80v128l64-64 56 56-160 160Z"/></svg> Pressure</span>
//                     <p class="pressure-1"></p>
//                 </div>
//                 <div class="details-2-more">
//                     <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm98 382q-70-70-70-170t70-170q70-70 170-70t170 70q70 70 70 170t-70 170q-70 70-170 70t-170-70Zm283.5-56.5Q640-413 640-480t-46.5-113.5Q547-640 480-640t-113.5 46.5Q320-547 320-480t46.5 113.5Q413-320 480-320t113.5-46.5ZM480-480Z"/></svg> UV Index</span>
//                     <p class="uv-1"></p>
//                 </div>
//                 <div class="details-2-more">
//                     <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm170-148.5Q720-317 720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180q100 0 170-68.5Z"/></svg> Dew Point</span>
//                     <p class="dp-1"></p>
//                 </div>
//             </div>
//         </div>`
// }

async function searchForCity() {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchInput.value}&count=1&format=json`
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)

    if(!data.results) {
        console.log("City is not found");
        return null;
    }
    else {
        const city = data.results[0];
        cityInfo = {
            name: city.name,
            lat: city.latitude,
            long: city.longitude
        };
    }
}

async function fetchWeatherNew() {
    try {
        const res = await fetch(`/api/get-weather?city=${cityInfo.name}`);
        const data = await res.json();

        const uniqueId = Math.random().toString(36).substring(2, 9)
        const tempWeatherBlock = `
        <h1 class="weather-h1" id="h1-1">Kharkiv</h1>
        <div class="weather" id="weather-1">
            <div class="weather-details-1 wd-1">
                <p class="current-time current-time-1"></p>
                <div class="details">
                    <div class="temp-rn">
                        <p class="temp-rn-p temp-rn-p-1"></p>
                    </div>
                    <div class="more-info">
                        <p class="about-rn about-rn-1"></p>
                        <p class="about-feels about-feels-1"></p>
                    </div>
                </div>
            </div>
            <div class="weather-details-2">
                <div class="details-2-more">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/></svg> Wind</span>
                    <p class="wind-1"></p>
                </div>
                <div class="details-2-more">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm170-148.5Q720-317 720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180q100 0 170-68.5Z"/></svg> Humidity</span>
                    <p class="humidity-1"></p>
                </div>
                <div class="details-2-more">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg> Visibility</span>
                    <p class="visibility-1"></p>
                </div>
                <div class="details-2-more">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M160-400v-80h640v80H160Zm0-120v-80h640v80H160ZM440-80v-128l-64 64-56-56 160-160 160 160-56 56-64-62v126h-80Zm40-560L320-800l56-56 64 64v-128h80v128l64-64 56 56-160 160Z"/></svg> Pressure</span>
                    <p class="pressure-1"></p>
                </div>
                <div class="details-2-more">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm98 382q-70-70-70-170t70-170q70-70 170-70t170 70q70 70 70 170t-70 170q-70 70-170 70t-170-70Zm283.5-56.5Q640-413 640-480t-46.5-113.5Q547-640 480-640t-113.5 46.5Q320-547 320-480t46.5 113.5Q413-320 480-320t113.5-46.5ZM480-480Z"/></svg> UV Index</span>
                    <p class="uv-1"></p>
                </div>
                <div class="details-2-more">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm170-148.5Q720-317 720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180q100 0 170-68.5Z"/></svg> Dew Point</span>
                    <p class="dp-1"></p>
                </div>
            </div>
        </div>`
        weatherProject1.innerHTML = tempWeatherBlock;
        Cities.unshift(tempWeatherBlock)
        cityWeather(uniqueId, data)
    } catch(err) {
        console.log(`error ${err}`)
    }
}

async function fetchWeatherKharkivDpandUv() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=49.9808&longitude=36.2527&current_weather=true&hourly=dewpoint_2m,uv_index&timezone=auto`;

    try {
        const res = await fetch(url);
        const data = await res.json();
    
        const h = data.hourly;
        const dewpoint = Math.round(h.dewpoint_2m[0]);
        const uvIndex  = Math.round(h.uv_index[0]);

        document.querySelectorAll(".uv-1").forEach((uvOne)=> {
            uvOne.textContent = uvIndex+" UV"
        })
        document.querySelectorAll(".dp-1").forEach((dpOne)=> {
            dpOne.textContent = dewpoint+" °C"
        })
    } catch (err) {
        console.error("Ошибка при получении данных:", err);
    }
}

async function fetchHourlyWatherKharkiv() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=49.9808&longitude=36.2527&hourly=weathercode,is_day,temperature_2m,precipitation_probability,cloudcover&timezone=auto&forecast_days=1";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const icons = await fetchWeatherIcons(49.9808, 36.2527)
        const svgIcons = icons.map((iconName, index) => {
        // уникальный ID
            const uniqueId = `grad-${index}-1`;
            const allIcons = weatherSVGs(uniqueId); 
            return allIcons[iconName] || allIcons["cloudy"];
        });
        cityHourlyWeather(1, svgIcons, data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

async function fetchDailyWatherKharkiv() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=49.9808&longitude=36.2527&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=8";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const icons = await fetchWeatherIcons(49.9808, 36.2527)
        const svgIcons = icons.map((iconName, index) => {
        // уникальный ID
            const uniqueId = `grad-${index}-5`;
            const allIcons = weatherSVGs(uniqueId); 
            return allIcons[iconName] || allIcons["cloudy"];
        });
        cityDailyWeather(1, svgIcons, data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}


document.addEventListener("DOMContentLoaded", ()=> {
    fetchWeatherKharkiv();
    fetchWeatherKharkivDpandUv();
    fetchHourlyWatherKharkiv();
    fetchDailyWatherKharkiv();

    fetchWeatherZabrze();
    fetchWeatherZabrzeDpandUv();
    fetchHourlyWatherZabrze();
    fetchDailyWatherZabrze();

    fetchWeatherGottmadingen();
    fetchWeatherGottmadingenDpandUv();
    fetchHourlyWatherGottmadingen();
    fetchDailyWatherGottmadingen();

    fetchWeatherSandanski();
    fetchWeatherSandanskiDpandUv();
    fetchHourlyWatherSandanski();
    fetchDailyWatherSandanski();

    searchInput.addEventListener("input", ()=> {

        clearTimeout(timeout)
        timeout = setTimeout(()=> {
            searchForCity();
        }, 500)
    })
})