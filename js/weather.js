const API_KEY = "8fac3bc0f8f65f92b81b9a53372555b0";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weatherContainer = document.querySelector(
        "#weather span:last-child"
      );
      city.innerText = data.name;
      weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
