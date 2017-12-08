$( document ).ready(function() {
    // An array of cars, new cars will be pushed into this array;
    var cars = ["MOPAR", "Ford Mustang", "Chevy Bel Air", "Pontiac GTO", "Dodge Challenger"];
    // Creating Functions & Methods
    // Function that displays all gif buttons
    function displayGifButtons(){
        $("#gifButtonsDisplay").empty(); 

        for (var i = 0; i < cars.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("car");
            gifButton.addClass("btn btn-primary")
            gifButton.attr("data-name", cars[i]);
            gifButton.text(cars[i]);
            $("#gifButtonsDisplay").append(gifButton);
        }
    }
    // Function to add a new car button
function addNewButton(){
    $("#addGif").on("click", function(){
    var car = $("#car-input").val().trim();
    if (car == ""){
      return false; // no blank button allowed-user must enter a car
    }
    cars.push(car);

    displayGifButtons();
    return false;
    });
}
    // Calling Functions & Methods
    displayGifButtons(); // displays list of cars already created
    addNewButton();
    });
// }
// queryURL for Giphy API

// retrieve gifs & buttons matching the value inputed by....
// Creating Functions & Methods 
    // Function that displays all gif buttons
    // Function that displays all of the gifs
    // Function to add a new button
    // Function to remove last button
   
// erase so it doesn't keep anything from the previous click/clear out when there is a new search

// 'swapping' animate and still states of gifs for the "data-animate" feature

