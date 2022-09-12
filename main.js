// for automated geolocalisation 
/*window.addEventListener('load',() => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;
        })
    }else{
        h1.textContent = "hey this is not working because your not allowing GeoLocation"
    }
}); */



// WITH INPUT CITY



let button = document.querySelector('.btn');
let inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.location-name');
let temperature = document.querySelector('.temperature-degree');
let description = document.querySelector('.temperature-description');
let icon = document.querySelector('.icon');
let humidity = document.querySelector('.humidity');
let feelsLike = document.querySelector('.feels_like')

button.addEventListener('click', () => {

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=62d768686c18a4ed0026aaefe7330c87')
    .then(response => response.json())
   
    .then(data => {
        console.log(data)

        
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descriptionValue = data['weather'][0]['description'];

        let iconValue = data['weather'][0]['icon'];
     
        let humidityValue = data['main']['humidity']
        let feelslikeValue = data['main']['feels_like']



        name.innerHTML = nameValue;
        temperature.innerHTML = tempValue;
        description.innerHTML = descriptionValue;

        
        icon.innerHTML = iconValue;

        humidity.innerHTML = humidityValue;
        feelsLike.innerHTML = feelslikeValue;

    }) 
    .catch(err => alert("Wrong CITY"))
})

