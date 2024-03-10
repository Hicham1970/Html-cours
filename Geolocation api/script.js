let getLoc = document.getElementById("Geolocation");
getLoc.addEventListener("click", (event) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude, longitude);
        coords.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
      },
      (error) => {
        coords.innerHTML= "Permission denied by the user!" + error.code;
      }
    );
  } else {
    document.getElementById("demo").innerHTML =
      "Geolocation is not supported by this browser.";
  }
});

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     document.getElementById("demo").innerHTML =
//       "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   document.getElementById("demo").innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br>Longitude: " +
//     position.coords.longitude;
// }
