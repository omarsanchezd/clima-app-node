const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección del clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se determino el clima en ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//         lat: resp.lat;
//     })
//     .catch(e => console.log(e));

// clima.getClima(lat, -77.042754)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));