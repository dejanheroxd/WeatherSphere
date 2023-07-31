"use strict";
const cityInput = document.getElementById("city-input");
const cityNameElement = document.getElementById("city-name");
const weatherTypeElement = document.getElementById("weather-type");
const tempElement = document.getElementById("temp");
const windElement = document.getElementById("wind");
const visibilityElement = document.getElementById("visibility");

const searchCity = async (city) => {
  const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "971c17266cmsh555944c3d13ed82p147deejsnfacb4eb7bfa4",
      "X-RapidAPI-Host": "the-weather-api.p.rapidapi.com",
    },
  };

  // Get Api Data
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    updateWeatherData(result);
  } catch (error) {
    console.error(error);
  }
};

const getInputSearch = () => {
  const city = cityInput.value;
  searchCity(city);
};

// Update DOM with Weather Data
const updateWeatherData = (data) => {
  cityNameElement.innerText = data?.data?.city || "City Not Found";
  weatherTypeElement.innerText =
    data?.data?.current_weather || "Weather Data Not Available";
  tempElement.innerText = data?.data?.temp || "Temperature Not Available";
  windElement.innerText = data?.data?.wind || "Wind Data Not Available";
  visibilityElement.innerText =
    data?.data?.visibility || "Visibility Data Not Available";
};
