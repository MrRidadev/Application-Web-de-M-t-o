// Ta clé API OpenWeatherMap (remplace "VOTRE_CLE_API" par ta propre clé)
const API_key = "5fb22d37ef6867ae1a9b76a33509292c";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=Béni Mellal&units=metric&appid="+API_key;
const url =  "https://api.openweathermap.org/data/2.5/forecast?q=Béni Mellal&units=metric&appid=5fb22d37ef6867ae1a9b76a33509292c";

// Sélectionner les éléments du DOM
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const Température = document.getElementById("Température");
const description = document.getElementById("description");
const Humidité = document.getElementById("Humidité");
const Vent = document.getElementById("Vent");
const tempte = document.getElementById("tempte");
const jours = document.getElementById("jours");
Récupiration(BASE_URL);
semaine(url)
function Récupiration(url){
// alert(url);

fetch (url)
.then(response => response.json())
.then(data => {
    console.log(data);
    
    // Récupiration des données
    const Température = document.getElementById("Température");
    Température.innerHTML= data.main.temp+ " °C";
    const description = document.getElementById("description");
    description.innerHTML=data.weather[0].description;
    const Humidité = document.getElementById("Humidité");
    Humidité.innerHTML= "Humidité : "+ data.main.humidity+"%" ;
    const Vent = document.getElementById("Vent");
    Vent.innerHTML=  "Vent : "+data.wind.speed +" km";
    const cityInput = document.getElementById("city");
    cityInput.innerHTML = data.name ;

})
}
function semaine(url){
    // alert(url);
    
    fetch (url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        // Jour1
        const temp1 = document.getElementById("Température1");
        temp1.innerHTML=Math.round(data.list[0].main.temp)+ " °C" ;
        const image1 = document.getElementById("image1");
        image1.src = "https://openweathermap.org/img/wn/"+data.list[0] .weather[0].icon+"@2x.png";
        // Jour2
        const temp2 = document.getElementById("Température2");
        temp2.innerHTML= Math.round(data.list[6].main.temp)+ " °C";
        const image2 = document.getElementById("image2");
        image2.src = "https://openweathermap.org/img/wn/"+data.list[6] .weather[0].icon+"@2x.png";
        // Jour3
        const temp3 = document.getElementById("Température3");
        temp3.innerHTML=Math.round(data.list[14].main.temp)+ " °C" ;
        const image3 = document.getElementById("image3");
        image3.src = "https://openweathermap.org/img/wn/"+data.list[14] .weather[0].icon+"@2x.png";
        // Jour4
        const temp4 = document.getElementById("Température4");
        temp4.innerHTML= Math.round(data.list[22].main.temp)+ " °C";
        const image4 = document.getElementById("image4");
        image4.src = "https://openweathermap.org/img/wn/"+data.list[22] .weather[0].icon+"@2x.png";
        // Jour5
        const temp5 = document.getElementById("Température5");
        temp5.innerHTML=Math.round(data.list[30].main.temp)+ " °C" ;
        const image5 = document.getElementById("image5");
        image5.src = "https://openweathermap.org/img/wn/"+data.list[30] .weather[0].icon+"@2x.png";
        // pour vide inputs
        cityInput.value=" ";
       
    
    })
    }
document.getElementById("searchButton").addEventListener("click", () => {
  const city = cityInput.value.trim();

  Récupiration("https://api.openweathermap.org/data/2.5/weather?q="+ cityInput.value.trim()+"&appid="+API_key+"&units=metric&");
  semaine("https://api.openweathermap.org/data/2.5/forecast?q="+ cityInput.value.trim()+"&appid="+API_key+"&units=metric&");

})
// validation inputs
function validation(){
    let isValid = true;
    const NomRegex= /^[a-zA-Z]*$/;
    
    const cityInput=document.getElementById("cityInput");
   if(!cityInput.value.trim()){
    alert("Veuillez entrer une ville");
    isValid = false;
   }else if(!NomRegex.test(cityInput.value.trim())){
    alert("Le format de nom ville est invalide.");
    isValid = false;
   }
}

