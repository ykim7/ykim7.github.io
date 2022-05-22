const API_KEY = "332b633f4f8a6d61e1df0ad6ad410756";

function getGeoInfo(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        weather.innerText = `The weather is ${data.weather[0].main}`;
        city.innerText = `\nin ${data.name}`;
        console.log(weather, city);
    })

}
function errorGetGeoInfo(){
    alert("There is no information of geolocation, No weather for you")
}
navigator.geolocation.getCurrentPosition(getGeoInfo, errorGetGeoInfo);