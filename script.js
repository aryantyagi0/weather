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
  let api = `https://goweather.herokuapp.com/weather/${cityname}`
  try{
    const response = await fetch(api);
    const json = await response.json();
    apiinfo.push(json); 
    console.log(apiinfo);
    if (!apiinfo[0].temperature || apiinfo[0].temperature === '') {
      citynameelement.innerHTML = 'City not found';
      wind.innerHTML=''
      temp.innerHTML=''
      description.innerHTML=''
      
      // Add similar handling for other elements if needed
    }
    else{
      citynameelement.innerHTML = `${cityname}`;
      wind.innerHTML=`${apiinfo[0].wind}`
      description.innerHTML=`${apiinfo[0].description}`
    }
    

  }catch(error){
      console.log("error fetching data",error);
  }
}


searchbtn.addEventListener('click', () => {
  let cityname = input.value
  apicall(cityname);

})