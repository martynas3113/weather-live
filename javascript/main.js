window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescriptionDOM = document.querySelector('.temperature-description');
    let temperatureDegreeDOM = document.querySelector('.degree-container > .degree');
    let timezoneDOM = document.querySelector('.location >.timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=e8fc1f96fd784a1d4401b66853e10254`
            fetch(api)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const temperature = data.main.temp;
                    const timezone = data.name;
                    const description = data.weather[0].description
                    temperatureDegreeDOM.textContent = temperature;
                    timezoneDOM.textContent = timezone;
                    temperatureDescriptionDOM.textContent = description

                });
        });
    }
});