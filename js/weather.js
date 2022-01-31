const apiKey= `api_key`;
const cityTxt = document.querySelector(`.cityTxt`);
var button = document.querySelector(`.btn`);
const currentWeather = document.querySelector(`.currentWeather`);




button.addEventListener(`click`, () =>{


    //grabbing input from html
    const cityName = cityTxt.value;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);

        cityTxt.value= " "

        currentWeather.innerHTML= `
        <ul>
            <li class="city">${data.name}</li>
            <li class="temp">${data.main.temp}°F</li>
            <li class="desc">${data.weather[0].description}</li>
        </ul>
        `; 
    });
});



