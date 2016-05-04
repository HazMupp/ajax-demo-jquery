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
$('#spotify-button').click(function() {
  // Gör en request med jQuery med spotify API
  
  // Vi placerar det vi vår tillbaka i en variabel
  var response_body = data;
  
  // ... det vi fick tillbaka är väldigt likt objekt i JavaScript
  //
  
  
  $.get("http://api.spotify.com/v1/users/hazmupp", function(data, textStatus, jqXHR){
    
    var test_object = {
      
  "display_name" : null,
  "external_urls" : {
    "spotify" : "https://open.spotify.com/user/hazmupp"
  },
  "followers" : {
    "href" : null,
    "total" : 0
  },
  "href" : "https://api.spotify.com/v1/users/hazmupp",
  "id" : "hazmupp",
  "images" : [ ],
  "type" : "user",
  "uri" : "spotify:user:hazmupp"

    }
    
    
    $('#spotify-response').text(data);
    
  })
  
});
