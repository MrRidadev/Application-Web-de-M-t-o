// Ta clé API OpenWeatherMap (remplace "VOTRE_CLE_API" par ta propre clé)
const API_key = "5fb22d37ef6867ae1a9b76a33509292c";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid="+API_key;
// Sélectionner les éléments du DOM
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const Température = document.getElementById("Température");
const description = document.getElementById("description");
const Humidité = document.getElementById("Humidité");
const Vent = document.getElementById("Vent");
const tempte = document.getElementById("tempte");
const jours = document.getElementById("jours");

fetch (BASE_URL)
.then(response => response.json())
.then(data => {
    // console.log(data);
    // Récupiration des données
    const Température = document.getElementById("Température");
    Température.innerHTML=data.main.temp;
    const description = document.getElementById("description");
    description.innerHTML=data.weather.description;
    const Humidité = document.getElementById("Humidité");
    Humidité.innerHTML= data.main.humidité;
    const Vent = document.getElementById("Vent");
    Vent.innerHTML=data.wind.speed;
})


