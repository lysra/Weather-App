function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];
  return `${day}, ${hours}:${minutes}`;
}

let dateElement = document.querySelector(".dayTime");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".cityHeader");
  let cityInput = document.querySelector("#city-input");
  searchInput.innerHTML = cityInput.value;

  let apiKey = "17fb87d500b2c9f67a8f850ff3995daa";
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector(".search-form");
form.addEventListener("submit", citySearch);

function displayWeather(response) {
  let displayTemperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".currentTemperature");
  temperatureElement.innerHTML = displayTemperature;

  let weatherDescription = response.data.weather[0].description;
  let descriptionElement = document.querySelector(".description");
  descriptionElement.innerHTML = weatherDescription;

  let displayHumidity = response.data.main.humidity;
  let humidityElement = document.querySelector(".humidity");
  humidityElement.innerHTML = displayHumidity;

  let displayWind = response.data.wind.speed;
  let windElement = document.querySelector(".wind");
  windElement.innerHTML = displayWind;
}
