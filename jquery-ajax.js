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
$('#darth-vader-button').click(function() {
  // Gör en request med jQuery med spotify API
  // Vi placerar det vi vår tillbaka i en variabel

  // ... det vi fick tillbaka är väldigt likt objekt i JavaScript

  var darthVaderUrl = "31.211.200.227/1337";
  
  $.get(darthVaderUrl, function(data, textStatus, jqXHR){
    
    var responseBody = data;

    
    //GET /api/starships/9/
    
    $('#darth-vader-response').text(responseBody.firstWord. + responseBody.secondWord);
    
    
  })
  
});

$('#chewbacca-button').click(function() {
  // Gör en request med jQuery med spotify API
  // Vi placerar det vi vår tillbaka i en variabel

  // ... det vi fick tillbaka är väldigt likt objekt i JavaScript

  var chewbaccaUrl = "http://swapi.co/api/starships/9/?format=wookiee";
  
  $.get(chewbaccaUrl, function(data, textStatus, jqXHR){
    
    var responseBody = data;

    
    //GET /api/starships/9/
    
    $('#chewbacca-response').text("Name: " + responseBody.whrascwo + ", Model: " + responseBody.scoowawoan + ", Manufacturer: " + responseBody.scrawhhuwwraoaaohurcworc );
    
    
  })
  
});
