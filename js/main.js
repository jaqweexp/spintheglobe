
/*make get request javascript
var checkWeather = function(){
	var xhr = new XMLHttpRequest();
	var url = 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=a217a596fbf0a30749c9e9504f4c88af';

	xhr.open("GET", url, true);
	xhr.send();
	console.log(xhr.status);
	
} */






$(document).ready(function() {
	

	$("#spinagainButton").on("click",function(){
     
    
    
 $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=a217a596fbf0a30749c9e9504f4c88af", function(result){
      
			console.log(result);
      //alert("City: " + result.name);
      		var fahrenheit = (result.main.temp-273) * 1.8 +32;
      		var roundedFahrenheit = Math.round(fahrenheit);
      		
			var forecast = result.name + " : " + result.weather[0].description + " today." + "<br>" + "The average temperature is " + roundedFahrenheit + " degrees";
			console.log(forecast);

			document.getElementById('display').innerHTML = forecast;
		});
	}); 



});



//spinAgain button on click, get a randomized article from wikitravel 
//get name of city from that article
//seperate city from country 
//search city in 500px
//get images and put 5 images in array for carousel
//get link of wikitravel article, put link on icon

