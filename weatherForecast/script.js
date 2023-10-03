let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "50eca3a4e41a7a4fe1cdbc42af4f23c5";
let inputValue = document.getElementById("inputCity");
let weatherImages = document.getElementById("weatherShow");
async function getWeatherData() {
  if (inputValue.value === "") {
    alert("plz add a city name")
  }
  else {
    let response = await fetch(`${apiUrl}${inputValue.value}&appid=${apiKey}`);
    let FetchedData = await response.json();
    console.log(FetchedData)
    document.getElementById("cityName").innerHTML = FetchedData.name;
    document.getElementById("humidityShow").innerHTML = FetchedData.main.humidity + "%";
    document.getElementById("windSpeedShow").innerHTML = Math.round(FetchedData.wind.speed) + " km/hr";
    document.getElementById("tempratureShow").innerHTML = Math.round(FetchedData.main.temp) + "°C";
    document.getElementById("imageDetail").innerHTML= FetchedData.weather[0].main;
    
    if (FetchedData.weather[0].main === "Clouds") {
      weatherImages.src = "images/clouds.png"
    }
    else if (FetchedData.weather[0].main === "Mist") {
      weatherImages.src = "images/mist.png"
    }
    else if (FetchedData.weather[0].main === "Snow") {
      weatherImages.src = "images/snow.png"
    }
    else if (FetchedData.weather[0].main === "Drizzle") {
      weatherImages.src = "images/drizzle.png"
    }
    else if (FetchedData.weather[0].main === "Rain") {
      weatherImages.src = "images/rain.png"
    }
    else {
      weatherImages.src = "images/clear.png"
    }

  }
};