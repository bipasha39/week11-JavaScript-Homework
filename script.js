const config = {
    weatherURL: "https://api.weatherbit.io/v2.0/current",
    weatherApiKey:"5628b9bc1550480bab847af9aea0ae1f",
    weatherIconURL:"https://www.weatherbit.io/static/img/icons/",
};

const cities = [];
cities.push({
    name: "Barcelona",
    latitude: 41.41,
    longitude: 2.19,
});

cities.push({
    name: "Dhaka",
    latitude: 41.41,
    longitude: 2.19,
});

cities.push({
    name: "London",
    latitude: 41.41,
    longitude: 2.19,
});

function main(){
    let weatherData = getWeatherData()
}
 function getWeatherData(){
     for(const citi of cities){
        fetch(config.weatherURL+"?key="+config.weatherApiKey+"&city="+citi.name)
        .then(resp =>resp.json())
        .then(resp =>{
            render(resp.data);
        })
        .catch(error=>{
            console.error('Error:', error);
        })
     }
     
 };


 
 main();

 function render(data) {
    for (const city of data) {
      let cardInnerContent = `
        <h1 class='text-center'>${city.city_name}</h1>
        <div class="card-body text-center">
          <img src='${config.weatherIconURL}${city.weather.icon}.png'>
          <h2 class="card-title">${city.temp} С°</h2>
          <h3 class='h3'>${city.weather.description}</h3>
          <h4 class='h4'>${city.ob_time}</h4>
        </div>
      `;
      let card = creatWetherCard(cardInnerContent);
      document.querySelector('.weather-cards').appendChild(card);
    }
  }
  
 

  function creatWetherCard(innerContent) {
    card = document.createElement('div');
    card.classList.add("card", "mx-2");
    card.innerHTML = innerContent;
    return card;
  }

