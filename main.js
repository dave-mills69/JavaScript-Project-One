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
  // keycode == 13 (13 being the return or enter button)
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
  };
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  };

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthsY = months.filter(month => month.slice(-1) === "y");




// C to F conversion
function celsiusToFahrenheit(temperature){
    return Math.floor(Number(temperature) * 9/5) + 32;
}



// WHEN THE USER CLICKS ON THE TEMP ELEMENT CELSIUS WILL SWITCH TO FAHRENHEIT

const tempElement = document.querySelector('.temp');
tempElement.addEventListener('keypress', setQuery);

tempElement.addEventListener("click", function(){
    
    const tempArray = event.target.innerText.split("°");

    if (tempArray[1] === "c" ){
        let fahrenheit = celsiusToFahrenheit(tempArray[0]);
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
    }
    else if (tempArray[1] === "F"){
        let celsius = fahrenheitToCelsius(tempArray[0])
        tempElement.innerHTML = `${celsius}°<span>c</span>`;
    };
});



// Button Like
document.querySelector('button').addEventListener('click', (event) =>{
        event.target.textContent = 'You Liked This Page, Thank you!'
});

