const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';

const f2 = async (lat, long, timeStr, hour) => {
    const queryStr = APIAdress + `latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`;
    const rArr =  await fetch(queryStr).then(data => data.json());

    return rArr.hourly.temperature_2m.at(hour);
}
module.exports = f2;