// Step 1
const apiKey = "ea3bc5d58e1a5432c4dc0cfcb3fcb65b"; 

// Step 2
const cityInput = document.getElementById("cityInput");
const btn = document.getElementById("btn");
const weatherInfo = document.getElementById("weather-info");

// Step 3
btn.addEventListener("click", () => {
  // Step 4
  const city = cityInput.value;

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  // Step 5
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Step 7
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const windSpeed = data.wind.speed;

      const weatherHTML = `
        <p>The weather in ${city} is ${weatherDescription}</p>
        <p>The temperature is  ${temperature}°C with a wind speed of  ${windSpeed} m/s </p>
      `;

      weatherInfo.innerHTML = weatherHTML;
    })
    .catch((error) => {
      // Step 6
      console.error("Error:", error);
      weatherInfo.innerHTML = "Error fetching weather data.";
    });
});
