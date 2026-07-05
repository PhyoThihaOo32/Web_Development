const cityForm = document.querySelector("form");
const cityInput = document.querySelector("#city");
const submitButton = cityForm.querySelector("button");
const feedback = document.querySelector(".feedback");
const quickCities = document.querySelectorAll(".quick-city");
const emptyState = document.querySelector(".empty-state");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const time = document.querySelector("img.time");
const skyLabel = document.querySelector(".sky-label");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

const formatObservationTime = (value) => {
  if (!value) {
    return "Just now";
  }

  const observedDate = new Date(value);

  if (Number.isNaN(observedDate.getTime())) {
    return "Just now";
  }

  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
  }).format(observedDate);
};

const updateUI = (data) => {
  const { cityDetails, weather } = data;
  const cityName = cityDetails.EnglishName;
  const countryName = cityDetails.Country?.EnglishName || "";
  const temperatureC = Math.round(weather.Temperature.Metric.Value);
  const temperatureF = Math.round(weather.Temperature.Imperial.Value);
  const dayStatus = weather.IsDayTime ? "Daytime" : "Nighttime";
  const observedAt = formatObservationTime(weather.LocalObservationDateTime);

  details.innerHTML = `  
    <p class="weather-label">Current weather</p>
    <h2 class="city-name">${cityName}</h2>
    <p class="country-name">${countryName}</p>
    <p class="condition">${weather.WeatherText}</p>
    <div class="temperature">
      <span>${temperatureC}</span>
      <span class="unit">&deg;C</span>
    </div>
    <p class="temperature-note">${temperatureF}&deg;F</p>
    <div class="weather-meta">
      <div class="meta-item">
        <span>Sky</span>
        <strong>${dayStatus}</strong>
      </div>
      <div class="meta-item">
        <span>Observed</span>
        <strong>${observedAt}</strong>
      </div>
    </div>
  `;

  // update the night/ day & icon image
  const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
  icon.setAttribute("alt", weather.WeatherText);

  const timeSrc = weather.IsDayTime ? "./img/day.svg" : "./img/night.svg";

  time.setAttribute("src", timeSrc);
  time.setAttribute("alt", weather.IsDayTime ? "Day sky" : "Night sky");
  skyLabel.textContent = dayStatus;
  emptyState.classList.add("d-none");

  // remove the d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const setFeedback = (message, type = "info") => {
  feedback.textContent = message;
  feedback.className = `feedback ${type}`;
};

const setLoading = (isLoading) => {
  submitButton.disabled = isLoading;
  submitButton.textContent = isLoading ? "Loading..." : "Search";

  quickCities.forEach((button) => {
    button.disabled = isLoading;
  });
};

const loadCity = async (city, saveCity = true) => {
  if (!city) {
    setFeedback("Please enter a city name.", "error");
    cityInput.focus();
    return false;
  }

  setLoading(true);
  setFeedback(`Loading weather for ${city}...`);

  try {
    const data = await forecast.updateCity(city);
    updateUI(data);

    if (saveCity) {
      localStorage.setItem("city", city);
    }

    setFeedback("");
    return true;
  } catch (error) {
    console.log(error);
    setFeedback(error.message || "Could not load weather. Try another city.", "error");
    return false;
  } finally {
    setLoading(false);
  }
};

cityForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  const isLoaded = await loadCity(city);

  if (isLoaded) {
    cityForm.reset();
  }
});

quickCities.forEach((button) => {
  button.addEventListener("click", () => {
    const city = button.dataset.city;
    cityInput.value = city;
    loadCity(city);
  });
});

const savedCity = localStorage.getItem("city");

if (savedCity) {
  loadCity(savedCity, false);
}
