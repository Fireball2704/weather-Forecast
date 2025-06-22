const apiKey = "94d571cf664da514cc8358acceab94c1";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found. Try again.");

    const data = await response.json();
    const { name, main, weather } = data;

    weatherResult.innerHTML = `
      <h2>${name}</h2>
      <p><img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}"></p>
      <p>Temperature: ${main.temp}°C</p>
      <p>Condition: ${weather[0].description}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `❌ ${error.message}`;
  }
}
