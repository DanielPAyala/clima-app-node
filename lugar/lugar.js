const axios = require('axios');

const getLugarLatLon = async(direccion) => {

    const encodedUrl = encodeURI(direccion);
    
    const instance = axios.create({
      baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
      headers: {'X-RapidAPI-Key': 'bfa5dbf28dmsh5749b965a21b9f1p1e67dejsnc93c0531fe86'}
    });
    
    const resp = await instance.get();

    if(resp.data.Results === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        dir,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}

