const apiKey = "8922909bb30b84b4515b4153bbea4e5b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInputs = document.querySelector(".search input");
const searcBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

 
 if(!response.ok  ){
  document.querySelector(".error").style.display ="block";
  document.querySelector(".weather").style.display ="none"

 }
 else{
  let data = await response.json();
// console.log(data);
// console.log("Weather condition: ", data.weather[0].main);
  document.querySelector(".city").innerHTML =data.name;
  document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =data.wind.speed + "km/h";

  const condition = data.weather[0].main.toLowerCase();
  if(condition[0].main ==="Clouds"){
    weatherIcon.src ="images/02-clouds.png";
  } else if(condition[0].main ==="Clear"){
    weatherIcon.src ="images/01-clear.png";
  }else if(condition[0].main ==="Rain"){
    weatherIcon.src ="images/06-rain.png";
  }else if(condition[0].main ==="images/Drizzle"){
    weatherIcon.src ="images/03-drizzle.png";
  }else if(condition[0].main ==="Mist"){
    weatherIcon.src ="images/05-mist.png";
}

 document.querySelector(".weather").style.display ="block"
 document.querySelector(".error").style.display ="none";
 
 }


}
searcBtn.addEventListener("click",()=>{
    checkWeather(searchInputs.value);
  
})

searchInputs.addEventListener("keydown",(event)=>{
if(event.key ==="Enter"){
  checkWeather(searchInputs.value);
}
});


