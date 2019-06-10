const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0820abac740b2e31f6d710dfdfa4448b&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}