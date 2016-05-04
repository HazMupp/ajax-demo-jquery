// JavaScript

// Använd jQuery och ajax

$('#my-button').click(function() {
  console.log("knapped klickades")
  
  // Gör en GET request med AJAX i jQuery
  // Github zen api: https://api.github.com/zen
  // Star wars api:"http://swapi.co/api/planets/1/"a
  $.get("http://api.spotify.com/v1/users/hazmupp", function( data, textStatus, jqXHR) {
    // Vilken status
    console.log(textStatus);
    
    // Visa texten från servern i stycket <p> med id_t shw-server-tet
    $('#show-server-text').text(data); // # inte nådvändigt, men funkar att ha med om man vill
    
  }).fail(function(jqXHR, errorStatus, errorThrown){
    console.log("Vår request gav fel")
    
  })
  
  
   }
);


// Klicka på spotify-knappen
$('#star-wars-button').click(function() {
  // Gör en request med jQuery med spotify API
  
  // Vi placerar det vi vår tillbaka i en variabel

  
  // ... det vi fick tillbaka är väldigt likt objekt i JavaScript
  //
  
  var starWarsUrl = "http://swapi.co/api/starships/9/";
  
  $.get(starWarsUrl, function(data, textStatus, jqXHR){
    
    var responseBody = data;

    var deathStar = {
    "name": "Death Star", 
    "model": "DS-1 Orbital Battle Station", 
    "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems", 
    "cost_in_credits": "1000000000000", 
    "length": "120000", 
    "max_atmosphering_speed": "n/a", 
    "crew": "342953", 
    "passengers": "843342", 
    "cargo_capacity": "1000000000000", 
    "consumables": "3 years", 
    "hyperdrive_rating": "4.0", 
    "MGLT": "10", 
    "starship_class": "Deep Space Mobile Battlestation", 
    "pilots": [], 
    "films": [
        "http://swapi.co/api/films/1/"
    ], 
    "created": "2014-12-10T16:36:50.509000Z", 
    "edited": "2014-12-22T17:35:44.452589Z", 
    "url": "http://swapi.co/api/starships/9/"
}
    
    //GET /api/starships/9/
    
    $('#star-wars-response').text(deathStar.model);
    
  })
  
});
