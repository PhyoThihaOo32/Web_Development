class Forecast {
  constructor() {
    this.key = key;
    this.weatherURI =
      "https://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "https://dataservice.accuweather.com/locations/v1/cities/search";
  }

  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);

    return {
      cityDetails,
      weather,
    };
  }

  async getCity(city) {
    const url = this.getUrl(this.cityURI, {
      apikey: this.key,
      q: city,
    });
    const data = await this.request(url);

    if (!data.length) {
      throw new Error(`No weather result found for "${city}".`);
    }

    return data[0];
  }

  async getWeather(id) {
    const url = this.getUrl(`${this.weatherURI}${id}`, {
      apikey: this.key,
    });
    const data = await this.request(url);

    if (!data.length) {
      throw new Error("Weather details are unavailable for this location.");
    }

    return data[0];
  }

  getUrl(base, params) {
    const url = new URL(base);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    return url.toString();
  }

  async request(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Weather service is unavailable. Please try again soon.");
    }

    return response.json();
  }
}
