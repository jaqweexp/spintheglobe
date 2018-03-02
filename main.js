$(document).ready(function() {
	

	$("#checkWeather").on("click",function(){
     var zip = $("#zipCode").val();
    
    
 $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=a217a596fbf0a30749c9e9504f4c88af", function(result){
      
			console.log(result);
      //alert("City: " + result.name);
      		var fahrenheit = (result.main.temp-273) * 1.8 +32;
      		var roundedFahrenheit = Math.round(fahrenheit);
      		
			var forecast = result.name + " : " + result.weather[0].description + " today." + "<br>" +"The average temperature is " + roundedFahrenheit + " degrees";
			console.log(forecast);

			document.getElementById('display').innerHTML = forecast;

		

		}); // close getJson


	});  //close checkWeather on click

$("input#zipCode").on("keypress", function(e){
	  if (e.which === 13) {
	      $("#checkWeather").trigger('click');
	  }
  }); //close keypress





}); //close doc ready

//https://stackoverflow.com/questions/17894936/document-write-to-display-content-on-same-page
//parse json
//if not number, alert that's not a number
//if zip code can't be found, alert zip code can't be found
//if temperature higher than 60










//count number of vowels
//console log and print result
