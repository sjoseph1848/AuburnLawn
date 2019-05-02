  class Weather{
    constructor(zip) {
      this.apiKey = apiKey;
      this.zip = zip;
    }
    
    //Fetch weather from API 
      getWeather() {
      let jsondata;
      const response = fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&units=imperial&appid=${this.apiKey}`)
      .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        drawWeather(data);
        
      })
      return jsondata;   
    }
  
    //Change weather location 
    changeLocation(zip){
      this.zip = zip;
    }

  }
  function drawWeather( d ) {  
    var fahrenheit = d.main.temp; 
    document.getElementById('w-humidity').innerHTML = fahrenheit;
  }
