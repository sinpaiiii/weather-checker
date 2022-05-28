function tempe() {
  // 4c37558b110ea0d1a6a68c9541ec7c3c
  var a = document.getElementById("search");
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      a.value +
      "&appid=4c37558b110ea0d1a6a68c9541ec7c3c"
  )
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      var temp = data.main.temp - 273.15;
      var desc = data.weather[0].description;
      var z = data.name;
      console.log(temp);
      console.log(z + temp + desc);
      document.getElementById("pic").style.background =
        "url(http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      document.getElementById("des").innerHTML = desc;
      document.getElementById("lat").innerHTML =
        "lat:" + data.coord.lat + " lon:" + data.coord.lon;
      document.getElementById("temperature").innerHTML =
        "Temperature: " + temp.toFixed(2);
    })
    .catch((Error) => alert("wrong name"));
}
