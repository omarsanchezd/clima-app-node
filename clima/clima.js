const axios = require('axios');

module.exports.getClima = async(lat, lng) => {
    // let lat = encodeURI(lat);
    // let lng = encodeURI(lng);
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7cd1575a0eb0b6e021f594db2a1219e4&units=metric`);
    // if (resp.data.cod === '400') {
    //     throw new Error("error");
    // }
    return resp.data.main.temp;
}