function formatDate() {
  let now = new Date();
  //let day = now.getDay();
  let newDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = newDay[now.getDay()];

  let currentDate = document.querySelector("#current-date");
  let currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinutes = now.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  currentDate.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let cloudElement = document.querySelector("#clouds");
  cloudElement.innerHTML = response.data.weather[0].main;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#windspeed");
  windElement.innerHTML = response.data.wind.speed;
  let dateElement = document.querySelector("#current-date");
  formatDate;
}

let apiKey = "2266db8caa8236c84abb00d76c94d010";
//let cityname = "Amsterdam";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
