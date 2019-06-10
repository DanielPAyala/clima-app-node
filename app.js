const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs')
                .options({
                    direccion: {
                        alias: 'd',
                        desc: 'Dirección de la ciudad para obtener el clima',
                        demand: true
                    }
                }).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log)
//     .catch(console.log);

// clima.getClima(-5.710000, -79.279999)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        let res1 = await lugar.getLugarLatLon(direccion);
    
        let res2 = await clima.getClima(res1.lat, res1.lon);
    
        return `El clima de ${res1.dir} es de ${res2} grados C°`;
    } catch (error) {
        return `No se pudo detrminar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);