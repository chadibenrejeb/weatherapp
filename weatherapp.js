const weather = document.getElementById("weather");
const temp = document.getElementById("temp");
const tempMax = document.getElementById("tempmax");
const tempMin = document.getElementById("tempmin");
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const input = document.getElementById("input");


const url = 'https://open-weather13.p.rapidapi.com/city/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2de91e8435msh322c0a2c1b0cd3cp168965jsnad334ec6aa91',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};

const fetchData = async (city) => { // Define an async function
    try {
        
        const response = await fetch(`${url}${city}`, options);
        const result = await response.json();
        input.innerHTML=`<h1>${city}</h1>`;
        weather.innerHTML =`<h2>${result.weather[0].main}</h2>` ;
        temp.innerHTML = `Temp :${result.main.temp}°F`;
        tempMax.innerHTML = `Max:${result.main.temp_max}°F`;
        tempMin.innerHTML = `Min:${result.main.temp_min}°F`;    
    } catch (error) {
        console.error(error);
    }
};


searchButton.onclick =() => fetchData(searchInput.value); // Call the async function to execute it
