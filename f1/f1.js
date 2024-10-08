
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';
async function f1 (lat, long, timeStr) {
    const queryStr = APIAdress + `latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`;
    const rArr =  await fetch(queryStr).then(data => data.json());
    let sum = 0;
    rArr.hourly.temperature_2m.forEach(element => {
        sum += element;
    });
    return Math.floor(sum / 24);

}

module.exports = f1;