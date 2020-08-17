// /* eslint-disable no-var */
// $(document).ready(() => {
//   $.ajax({
//     type: "GET",
//     url: "http://localhost:8080/projects",
//     dataType: "json",
// }).then(response => {
//     //website
//     const websiteEl = $("#npoWebsite");
//     const website = websiteEl.text(response.website)
// })

// searchButton.click(event => {
//   event.preventDefault();
//   const city = $("#citySearch").val();
//   const newLi = $("<li>");
//   newLi.text(city);
//   $("#city-list").append("<li>" + city + "</li>");
//   cities.push(city);

//   //targeting the text area
//   const citySearch = $("#citySearch").val();
//   console.log("citySearch = ", citySearch);
//   const APIKey = "c257cb037b478e85c2eddd6f4749b211";
//   const queryURL =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     citySearch +
//     "&appid=" +
//     APIKey +
//     // added to get imperial units of measure
//     "&units=imperial";
//   console.log("queryURL = ", queryURL);
//   // to prevent the website from reloading on button press
//   event.preventDefault();

//   // AJAX call
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(response => {
//     // log the resulting object response
//     console.log(response);

//     //temperature (f)
//     // eslint-disable-next-line vars-on-top
//     var currentCityTempEl = $("#currentCityTemp");
//     currentCityTempEl.text(response.main.temp);
//     console.log();

//     //name
//     const currentCityNameEl = $("#currentCityName");
//     const name = currentCityNameEl.text(response.name);

//     //date
//     const currentCityDateEl = $("#currentCityDate");
//     currentCityDateEl.text(moment().format("LLLL"));

//     //temp
//     // eslint-disable-next-line vars-on-top
//     var currentCityTempEl = $("#currentCityTemp");
//     currentCityTempEl.text(response.main.temp);
//     console.log("currentwindspeed = ", response.main.temp);

//     //humidity
//     const currentCityHumidityEl = $("#currentCityHumidity");
//     currentCityHumidityEl.text(response.main.humidity);
//     console.log("currenthumidity = ", response.main.humidity);

//     //wind speed
//     const currentCityWindSpeedEl = $("#currentCityWindSpeed");
//     currentCityWindSpeedEl.text(response.wind.speed);
//     console.log("currentwindspeed = ", response.wind.speed);

//     //icon
//     const iconCode = response.weather[0].icon;
//     const iconImage = "https://openweathermap.org/img/w/" + iconCode + ".png";
//     console.log("iconcode = ", iconCode);
//     $("#icon-image").attr("src", iconImage);
//     $("#icon-image").attr("alt", iconImage);

//     // creating variables for latitude and longitude
//     // UV index URL
//     const latitude = response.coord.lat;
//     const longitude = response.coord.lon;
//     const uvQueryURL =
//       "https://api.openweathermap.org/data/2.5/uvi?appid=" +
//       APIKey +
//       "&lat=" +
//       latitude +
//       "&lon=" +
//       longitude;

//     $.ajax({
//       url: uvQueryURL,
//       method: "GET"
//     }).then(result => {
//       console.log("UVobject = ", result);
//       const uvIndex = result.value;
//       //UV index classes set via adding classes to the UV ID based on the UV index
//       $("#currentUVindex").text(uvIndex);
//       if (uvIndex < 2) {
//         $("#currentUVindex").attr("class", "low");
//         console.log("You're safe!");
//       }
//       if (uvIndex >= 2 && uvIndex <= 5) {
//         $("#currentUVindex").attr("class", "moderate");
//         console.log("Getting risky");
//       }
//       if (uvIndex > 5 && uvIndex <= 7) {
//         $("#currentUVindex").attr("class", "high");
//         console.log("Drop it like it's hot");
//       }
//       if (uvIndex > 7 && uvIndex <= 10) {
//         $("#currentUVindex").attr("class", "very-high");
//         console.log("You better stay inside!");
//       }
//       if (uvIndex > 10) {
//         $("#currentUVindex").attr("class", "extreme");
//         console.log("This girl is on fiyah");
//       }
//     });
//   });
// });
