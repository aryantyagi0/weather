let input = document.getElementById('cityname')
let searchbtn = document.getElementById('searchbtn')
let citynameelement = document.getElementById('city')
let temp = document.getElementById('temp')
let description = document.getElementById('description')
let wind = document.getElementById('wind')
let weathericon = document.getElementById('weather-icon')
let apiinfo = [];

// https://goweather.herokuapp.com/weather/Dehradun
const apicall = async (cityname) => {
  let api = `https://api.weatherapi.com/v1/current.json?key=%20d44783a50343446a9b8155230241801&q=${cityname}&aqi=no`
  try {
    const response = await fetch(api);
    const json = await response.json();
    apiinfo.push(json);
    console.log(apiinfo);
    if (apiinfo[0].error.code=="1006"||apiinfo[0].error.code=="1003") {
      citynameelement.innerHTML = 'City not found';
      wind.innerHTML = ''
      temp.innerHTML = ''
      description.innerHTML = ''

      // Add similar handling for other elements if needed
    }
    else {
      citynameelement.innerHTML = `${cityname}`;
      temp.innerHTML = `${apiinfo[0].current.temp_c}°C`;
      wind.innerHTML = `${apiinfo[0].current.wind_kph}`
      description.innerHTML =`${apiinfo[0].current.condition.text}`
    }


  } catch (error) {
    console.log("error fetching data", error);
  }
}


searchbtn.addEventListener('click', () => {
  let cityname = input.value
  apicall(cityname);

})