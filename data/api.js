var latitude;
var longitud;
var temp;
var celsius = true;
var git = false;

$(document).ready(function() {
  if (!navigator.geolocation){
    //output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    console.log("Geolocation is not supported by your browser");
    return;
  }
  else{
      navigator.geolocation.getCurrentPosition(function (position) {
      latitude  = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log(latitude);

      var output = document.getElementById("google");
      var img = new Image();
      img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
  
      output.appendChild(img);
      myWeather(latitude, longitude);
      })
  }
  console.log("hallo2");
  //Button:
  $("#toogle").click(function () {
    farOrCel(temp);
    
  
  });
})

function myWeather(latitude, longitude) {
  console.log("hi");
  myUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
  console.log(myUrl);
  $.ajax({
    headers:{
    Accept: "application/json"
    },
    url: myUrl,
    success: function(r){
      console.log(r.main.temp);
      temp = r.main.temp;
   
      },
      error: function(a, b, c){
        console.log(a);
        console.log(b);
        console.log(c);
      }
  })
   
}
 



function farOrCel(temp){
  if(celsius){
    //gibt fahrenheit
    console.log("fahren")
    celsius = false;
    temp = ((temp*1.8)+32);
    temp = +temp.toFixed(2)
    console.log(temp)
    $("#temp").text(temp);
    return temp;
  }
  //gibt celsuis
  else {
    console.log("cel")
    console.log(temp)
    celsius = true;
    $("#temp").text(temp);
    return temp;
  }

}
/* 




function geoLoc() {
  var output = document.getElementById("out");
  

 




    console.log(myUrl);
    console.log("succ");
  
  
    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';


    //behalten IMAGE von Gmaps unten anzuhängen ((width full!))

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
          output.innerHTML = "User denied the request for Geolocation."
          break;
      case error.POSITION_UNAVAILABLE:
          output.innerHTML = "Location information is unavailable."
          break;
      case error.TIMEOUT:
          output.innerHTML = "The request to get user location timed out."
          break;
      case error.UNKNOWN_ERROR:
          output.innerHTML = "An unknown error occurred."
          break;
    }
  }
  //Async Wartemeldung????
output.innerHTML = "<p>Locating…</p>";

navigator.geolocation.getCurrentPosition(success, showError);
console.log("END");
}

 
/*
     

*/