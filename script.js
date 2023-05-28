function weatherSearch(){
    var loc = search__box.value;
    if(loc == ''){
        result.innerHTML = '';
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(data => data.json()).then(out => displayData(out));

    function displayData(obj){
        locName = obj.name;
        country = obj.sys.country;
        temperature = Math.round(obj.main.temp - 273.15);
        humidity = obj.main.humidity;
        icon = obj.weather[0].icon;
        weatherMain = obj.weather[0].main;
        visibility = obj.visibility / 1000;
        description = obj.weather[0].description;
        speed = obj.wind.speed;
        pressure = obj.main.pressure;
        

        result.innerHTML = `
        <h3 class="text-center mainHeading">Weather in ${locName},${country}</h3>
        <div class="temp text-center">
        <img src="https://openweathermap.org/img/w/${icon}.png">
        <h1 class="headingTemp">${temperature}°C</h1>
        </div>
        <h4 class="text-center">${description}</h4>
        <div class="grid-box mt-4">
        <div class="item1">
        <ul>
        <li>Humidity : ${humidity} %</li>
        <li>Visibility : ${visibility} km</li>
        </ul>
        </div>
        <div class="item2">
        <ul>
        <li>Wind Speed : ${speed} m/s</li>
        <li>Pressure : ${pressure} hPa</li>
        </ul>
        </div>
        </div>
        ` 
    }
}