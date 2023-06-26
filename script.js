// bringing in some variables that will need to be used globally, historyCard not really but I just already did it.
var APIKey = "1a107d08c13041f458e3773eb047b491";
var APIKey2 = "aae14bc59371f25c0baad703a8bd681e";
var searchBtn = document.getElementById('submit');
var historyCard = document.getElementById('historyCard');

// This displays today's date and time under the header.
function displayDate() {
  // get a new date (locale machine date time)
  var date = new Date();
  // get the date as a string
  var n = date.toDateString();
  // get the time as a string
  var time = date.toLocaleTimeString();

  // find the html element with the id of time
  // set the innerHTML of that element to the date a space the time
  document.getElementById('time').innerHTML = n + ' ' + time;

}



// This function is getting the current weather in the city chosen (currentCity)
function getWeather(lat, lon) {
  var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey2}&units=imperial`;

  fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
      const date = data.list[0].dt_txt.substring(5, 10);
      const temp = data.list[0].main.temp;
      const humidity = data.list[0].main.humidity;
      const windSpeed = data.list[0].wind.speed;
      const description = data.list[0].weather[0].description;
      const icon = data.list[0].weather[0].icon;
      // within this function, it is calling the displayWeather function and passing through the variables.
      displayWeather(temp, icon, description, humidity, windSpeed);
    });
}
// this is the function that displays the weather on the bigWeatherCard for TODAY'S weather in the searched city
function displayWeather(temp, icon, description, humidity, windSpeed) {
  var iconImage = document.createElement('img');
  var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '.png';
  iconImage.setAttribute('src', iconUrl);

  var todayDescription = document.getElementById('todayDescription');
  var todayIcon = document.getElementById('todayIcon');
  var todayTemp = document.getElementById('todayTemp');
  var todayHumidity = document.getElementById('todayHumidity');
  var todayWind = document.getElementById('todayWind');

  todayDescription.innerHTML = description;
  // Append the iconImage to the todayIcon element
  todayIcon.innerHTML = '';
  todayIcon.appendChild(iconImage);
  todayTemp.innerHTML = `🌡️` + ' temp: ' + temp + '&deg';
  todayHumidity.innerHTML = `💧` + ' hum: ' + humidity;
  todayWind.innerHTML = `🌬️` + ' wind: ' + windSpeed;


}

// this is how to display weather for the future day 
function displayFutureWeather1(date, description, icon, temp, humidity, windSpeed) {

  var iconImage = document.createElement('img');
  var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '.png';
  iconImage.setAttribute('src', iconUrl);

  var futureDate1 = document.getElementById('futureDate1');
  var futureDescription1 = document.getElementById('futureDescription1');
  var futureIcon1 = document.getElementById('futureIcon1');
  var futureTemp1 = document.getElementById('futureTemp1');
  var futureHumidity1 = document.getElementById('futureHumidity1');
  var futureWindSpeed1 = document.getElementById('futureWindSpeed1')
  futureDate1.innerHTML = date;
  futureDescription1.innerHTML = description;
  // Append the iconImage to the todayIcon element
  futureIcon1.innerHTML = '';
  futureIcon1.appendChild(iconImage);
  futureTemp1.innerHTML = `🌡️` + ' temp: ' + temp + '&deg';
  futureHumidity1.innerHTML = `💧` + ' hum: ' + humidity;
  futureWindSpeed1.innerHTML = `🌬️` + ' wind: ' + windSpeed;
}

// display the future weather for the second day
function displayFutureWeather2(date, description, icon, temp, humidity, windSpeed) {

  var iconImage = document.createElement('img');
  var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '.png';
  iconImage.setAttribute('src', iconUrl);

  var futureDate2 = document.getElementById('futureDate2');
  var futureDescription2 = document.getElementById('futureDescription2');
  var futureIcon2 = document.getElementById('futureIcon2');
  var futureTemp2 = document.getElementById('futureTemp2');
  var futureHumidity2 = document.getElementById('futureHumidity2');
  var futureWindSpeed2 = document.getElementById('futureWindSpeed2')
  futureDate2.innerHTML = date;
  futureDescription2.innerHTML = description;
  // Append the iconImage to the todayIcon element
  futureIcon2.innerHTML = '';
  futureIcon2.appendChild(iconImage);
  futureTemp2.innerHTML = `🌡️` + ' temp: ' + temp + '&deg';
  futureHumidity2.innerHTML = `💧` + ' hum: ' + humidity;
  futureWindSpeed2.innerHTML = `🌬️` + ' wind: ' + windSpeed;
}

// display the future weather for the 3rd day
function displayFutureWeather3(date, description, icon, temp, humidity, windSpeed) {
  var bigWeatherCard = document.getElementById('bigWeatherCard');
  var iconImage = document.createElement('img');
  var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '.png';
  iconImage.setAttribute('src', iconUrl);

  var futureDate3 = document.getElementById('futureDate3');
  var futureDescription3 = document.getElementById('futureDescription3');
  var futureIcon3 = document.getElementById('futureIcon3');
  var futureTemp3 = document.getElementById('futureTemp3');
  var futureHumidity3 = document.getElementById('futureHumidity3');
  var futureWindSpeed3 = document.getElementById('futureWindSpeed3')
  futureDate3.innerHTML = date;
  futureDescription3.innerHTML = description;
  // Append the iconImage to the todayIcon element
  futureIcon3.innerHTML = '';
  futureIcon3.appendChild(iconImage);
  futureTemp3.innerHTML = `🌡️` + ' temp: ' + temp + '&deg';
  futureHumidity3.innerHTML = `💧` + ' hum: ' + humidity;
  futureWindSpeed3.innerHTML = `🌬️` + ' wind: ' + windSpeed;
}

// display the future weather for the 4th day
function displayFutureWeather4(date, description, icon, temp, humidity, windSpeed) {

  var iconImage = document.createElement('img');
  var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '.png';
  iconImage.setAttribute('src', iconUrl);

  var futureDate4 = document.getElementById('futureDate4');
  var futureDescription4 = document.getElementById('futureDescription4');
  var futureIcon4 = document.getElementById('futureIcon4');
  var futureTemp4 = document.getElementById('futureTemp4');
  var futureHumidity4 = document.getElementById('futureHumidity4');
  var futureWindSpeed4 = document.getElementById('futureWindSpeed4')
  futureDate4.innerHTML = date;
  futureDescription4.innerHTML = description;
  // Append the iconImage to the todayIcon element
  futureIcon4.innerHTML = '';
  futureIcon4.appendChild(iconImage);
  futureTemp4.innerHTML = `🌡️` + ' temp: ' + temp + '&deg';
  futureHumidity4.innerHTML = `💧` + ' hum: ' + humidity;
  futureWindSpeed4.innerHTML = `🌬️` + ' wind: ' + windSpeed;
}

// display the future weather for the 5th day
function displayFutureWeather5(date, description, icon, temp, humidity, windSpeed) {

  var iconImage = document.createElement('img');
  var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '.png';
  iconImage.setAttribute('src', iconUrl);

  var futureDate5 = document.getElementById('futureDate5');
  var futureDescription5 = document.getElementById('futureDescription5');
  var futureIcon5 = document.getElementById('futureIcon5');
  var futureTemp5 = document.getElementById('futureTemp5');
  var futureHumidity5 = document.getElementById('futureHumidity5');
  var futureWindSpeed5 = document.getElementById('futureWindSpeed5')
  futureDate5.innerHTML = date;
  futureDescription5.innerHTML = description;
  // Append the iconImage to the todayIcon element
  futureIcon5.innerHTML = '';
  futureIcon5.appendChild(iconImage);
  futureTemp5.innerHTML = `🌡️` + ' temp: ' + temp + '&deg';
  futureHumidity5.innerHTML = `💧` + ' hum: ' + humidity;
  futureWindSpeed5.innerHTML = `🌬️` + ' wind: ' + windSpeed;
}

// get future weather for the next day
function getFutureWeather1(lat, lon) {
  var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey2}&units=imperial`;
  console.log(weatherURL);

  fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
      const date = data.list[5].dt_txt.substring(5, 10);

      const description = data.list[5].weather[0].description;

      const icon = data.list[5].weather[0].icon;

      const temp = data.list[5].main.temp;

      const humidity = data.list[5].main.humidity;

      const windSpeed = data.list[5].wind.speed;

      displayFutureWeather1(date, description, icon, temp, humidity, windSpeed);
      // displays the future weather for 1 day from now
    })

}

// get future weather for 2 days from now
function getFutureWeather2(lat, lon) {
  var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey2}&units=imperial`;
  console.log(weatherURL);

  fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
      const date = data.list[10].dt_txt.substring(5, 10);

      const description = data.list[10].weather[0].description;

      const icon = data.list[10].weather[0].icon;

      const temp = data.list[10].main.temp;

      const humidity = data.list[10].main.humidity;

      const windSpeed = data.list[10].wind.speed;


      console.log('2 days from now: ' + date + description + icon + temp + humidity + windSpeed)
      // displays the future weather for the 2nd day
      displayFutureWeather2(date, description, icon, temp, humidity, windSpeed);
    })

}

// get future weather for 3 days from now
function getFutureWeather3(lat, lon) {
  var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey2}&units=imperial`;
  console.log(weatherURL);

  fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
      const date = data.list[20].dt_txt.substring(5, 10);

      const description = data.list[20].weather[0].description;

      const icon = data.list[20].weather[0].icon;

      const temp = data.list[20].main.temp;

      const humidity = data.list[20].main.humidity;

      const windSpeed = data.list[20].wind.speed;


      console.log('3 days from now: ' + date + description + icon + temp + humidity + windSpeed)
      // displays the future weather for the 3rd day
      displayFutureWeather3(date, description, icon, temp, humidity, windSpeed);
    })

}

// get future weather for 4 days from now
function getFutureWeather4(lat, lon) {
  var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey2}&units=imperial`;
  console.log(weatherURL);

  fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
      const date = data.list[26].dt_txt.substring(5, 10);

      const description = data.list[26].weather[0].description;

      const icon = data.list[26].weather[0].icon;

      const temp = data.list[26].main.temp;

      const humidity = data.list[26].main.humidity;

      const windSpeed = data.list[26].wind.speed;


      console.log('4 days from now: ' + date + description + icon + temp + humidity + windSpeed)
      // displays future weather 4 days from now
      displayFutureWeather4(date, description, icon, temp, humidity, windSpeed);
    })

}

// get weather for 5 days from now
function getFutureWeather5(lat, lon) {
  var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey2}&units=imperial`;
  console.log(weatherURL);

  fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
      const date = data.list[33].dt_txt.substring(5, 10);

      const description = data.list[33].weather[0].description;

      const icon = data.list[33].weather[0].icon;

      const temp = data.list[33].main.temp;

      const humidity = data.list[33].main.humidity;

      const windSpeed = data.list[33].wind.speed;


      console.log('5 days from now: ' + date + description + icon + temp + humidity + windSpeed)
      displayFutureWeather5(date, description, icon, temp, humidity, windSpeed);
    })

}


// this is getting the coordinates for the city that is searched
function getCoordinates(currentCity) {
  var coordinateURL = `https://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=5&appid=${APIKey}`;
  console.log(coordinateURL);
  // fetching the coordinates and then passing through the API 
  fetch(coordinateURL)
    .then(response => response.json())
    .then(data => {
      const lat = data[0].lat;
      const lon = data[0].lon;
      console.log(lon);
      console.log(lat);
      getWeather(lat, lon);
      getFutureWeather1(lat, lon);
      getFutureWeather2(lat, lon);
      getFutureWeather3(lat, lon);
      getFutureWeather4(lat, lon);
      getFutureWeather5(lat, lon);
    })

}

// Function to add a city name to local storage
function addToLocalStorage(cityName) {
  // Check if local storage is supported by the browser
  if (typeof (Storage) !== "undefined") {
    // Get the existing city names from local storage (if any)
    var existingCities = localStorage.getItem("cities");

    // Check if any city names are already stored
    if (existingCities) {
      // Parse the existing city names from JSON to an array
      var citiesArray = JSON.parse(existingCities);

      // Check if citiesArray is an array, if not, convert it into an array
      if (!Array.isArray(citiesArray)) {
        citiesArray = [citiesArray];
      }

      // Add the new city name to the array
      citiesArray.push(cityName);

      // Store the updated array back in local storage
      localStorage.setItem("cities", JSON.stringify(citiesArray));
    } else {
      // No city names are stored yet, create a new array with the current city name
      var citiesArray = [cityName];

      // Store the array in local storage
      localStorage.setItem("cities", JSON.stringify(citiesArray));
    }
  } else {
    // Local storage is not supported
    console.log("Local storage is not supported by your browser.");
  }
}

// Function to update the historyCard element with the list of cities
function updateHistory() {
  var existingCities = localStorage.getItem("cities");

  // Clear the existing content of the historyCard element
  historyCard.innerHTML = "";

  // Check if any city names are stored
  if (existingCities) {
    // Parse the existing city names from JSON to an array
    var citiesArray = JSON.parse(existingCities);

    // Slice the array to get only the last 5 city names
    var lastFiveCities = citiesArray.slice(-5);

    // Create a list element for each city and append it to the historyCard element
    lastFiveCities.forEach(function (city) {
      var listItem = document.createElement("li");
      listItem.textContent = city;
      // allows cities to be clicked.
      listItem.addEventListener('click', function () {
        console.log('Clicked on a city: ' + city);
        getCoordinates(listItem.textContent);
        var cityName = document.getElementById('cityName');
        cityName.innerHTML = listItem.textContent;
      });

      historyCard.appendChild(listItem);
    });
  }
}





// adds event listeners for the search button
searchBtn.addEventListener('click', function () {
  var currentCity = input.value;
  console.log(currentCity);
  // upon clicking, localstorage will be added, history will be added as a UL, the getCoordinates will pass the 
  // city name to the coordinates API and then pass that through the weather api.
  addToLocalStorage(currentCity);
  updateHistory();
  getCoordinates(currentCity);

  var cityName = document.getElementById('cityName');
  cityName.innerHTML = currentCity;
});

displayDate()