var axios = require('axios');

const OPEN_WEATHERMAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid='+ process.env.KEY +'&units=metric';

module.exports = {
  getForecast: function (location) {
    var encoded = encodeURIComponent(location),
        url     = `${OPEN_WEATHERMAP_URL}&q=${encoded}`;

    return axios.get(url).then(function (response) {
      if(response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      }
      else {
        return {
          location: response.data.name,     // May not match what was typed
          temp:     response.data.main.temp // Temperature
        }
      }
    }, function (error) {
      throw new Error(error.data.message);
    });
  }
};
