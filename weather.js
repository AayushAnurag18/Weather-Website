const weather = {
    apikey: "a0d68575a9ceef83131d7b76b87e7e14",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apikey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
   

    
    displayWeather: function(data){
      if(data.code === "404") {
        document.getElementById("nf").classList.add("hidden");   
       // document.getElementById("nf").classList.remove("vis");   
      }
      else
{        
  const {name}= data;
        const{icon , description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText="Weather in "+name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        document.querySelector(".speed").innerText="Wind Speed: "+speed+" km/hr";
    }
  }};
  let search=document.getElementById("search-icon");
  search.addEventListener('click', function(event){
      event.preventDefault();
      
      document.getElementById("vis").classList.remove("hid");
      weather.fetchWeather(document.getElementById("search-bar").value.trim());
  }  );

  