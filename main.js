const cities = [
  { name: "minsk", id: "minsk" },
  { name: "warsaw", id: "warsaw" },
  { name: "kyiv", id: "kyiv" }
];

async function getWeather(cityName) {
  const apiKey = '31e317c69034405b046f44f15c1886a1'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=ru`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const tempElement = document.getElementById(`${cityName}-temp`);
    const cityElement = document.getElementById(`${cityName}-city`);
    const icoElement = document.getElementById(`${cityName}-ico`);
    const textElement = document.getElementById(`${cityName}-text`);

    tempElement.textContent = `${Math.round(data.main.temp)}°C`;
    cityElement.textContent = data.name;
    icoElement.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
    textElement.textContent = data.weather[0].description;
  } catch (error) {
    console.error("Ошибка при получении данных о погоде:", error);
  }
}

async function updateWeather() {
  for (const city of cities) {
    await getWeather(city.name);
  }
}

updateWeather();












































































































///////
const body = document.querySelector('body');
const minsk = document.querySelector('.minsk');
const warsaw = document.querySelector('.warsaw');
const kyiv = document.querySelector('.kyiv');

let timeoutId = null;

minsk.addEventListener('mouseover', function(){
  clearTimeout(timeoutId);
  body.style.backgroundImage = "url('./img/minsk.webp')";
});

minsk.addEventListener('mouseout', function(){
  timeoutId = setTimeout(function() {
    body.style.backgroundImage = "url('./img/bg.png')";
  }, 2000); 
});

warsaw.addEventListener('mouseover', function(){
  clearTimeout(timeoutId);
  body.style.backgroundImage = "url('./img/warsaw.jpeg')";
});

warsaw.addEventListener('mouseout', function(){
  timeoutId = setTimeout(function() {
    body.style.backgroundImage = "url('./img/bg.png')";
  }, 2000); 
});

kyiv.addEventListener('mouseover', function(){
  clearTimeout(timeoutId);
  body.style.backgroundImage = "url('./img/kyiv.jpeg')";
});

kyiv.addEventListener('mouseout', function(){
  timeoutId = setTimeout(function() {
    body.style.backgroundImage = "url('./img/bg.png')";
  }, 2000); 
});
