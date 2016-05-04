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

    
    //GET /api/starships/9/
    
    $('#star-wars-response').text(model);
    
  })
  
});
