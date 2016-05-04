// JavaScript

// Använd jQuery och ajax

$('#my-button').click(function() {
  console.log("knapped klickades")
  
  // Gör en GET request med AJAX i jQuery
  $.get("http://swapi.co/api/starships/9/", function( data, textStatus, jqXHR) {
    // Vilken status
    console.log(textStatus);
    
    // Visa texten från servern i stycket <p> med id_t shw-server-tet
    $('show-server-text').text(data); // # inte nådvändigt, men funkar att ha med om man vill
  })
   }
);

