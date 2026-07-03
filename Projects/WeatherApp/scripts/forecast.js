// get weather information
const getWeather = async (id) => {
  const base = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}`;
  const response = await fetch(base + query, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });

  const data = await response.json();
  return data[0];
};

// get city
const getCity = async (city) => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?q=${city}`;
  const response = await fetch(base + query, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  const data = await response.json();
  return data[0]; // return a promise
};
