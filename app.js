const apiKey = "2f69913182cd573c395fcd6d30f5fa44";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data)
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.setAttribute.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.setAttribute.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.setAttribute.src = "images/mist.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.setAttribute.src = "images/snow.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    
    setTimeout(()=>{
        searchBox.value = "";
    }, 1000);
});



