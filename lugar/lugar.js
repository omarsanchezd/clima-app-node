const axios = require('axios');
module.exports.getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDMOuEc5NJ7RI7UX_zr5sKdWGO-vqrm2WM`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}