// Your API key is 2821738aa1b5bf771f2157203f0f1218

const api = {
    key: "2821738aa1b5bf771f2157203f0f1218",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }



// C to F conversion
function celsiusToFahrenheit(temperature){
    return (Number(temperature) * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET (((CANNOT FIGURE OUT OMFG KILL ME)))

const tempElement = document.querySelector('.temp');
tempElement.addEventListener('keypress', setQuery);

tempElement.addEventListener("click", function(){
    
    const tempArray = event.target.innerText.split("°");

    if (tempArray[1] === ("c") ){
        let fahrenheit = celsiusToFahrenheit(tempArray[0])
         
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
    }
    else {
        let celsius = fahrenheitToCelsius(tempArray[0])
        tempElement.innerHTML = `${celsius}°<span>c</span>`;

    }

    // if(tempElement.value === undefined) return;
    
    // if(tempElement.unit == "celsius"){
    //     let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    //     fahrenheit = Math.floor(fahrenheit);
    
    //     weather.temperature.unit = "fahrenheit";
    // }else{
    //     tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    //     weather.temperature.unit = "celsius"
    // }
});