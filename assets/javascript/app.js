$(document).ready(function () {
    // An array of cars, new cars will be pushed into this array;
    var cars = ["Dodge Charger", "Ford Mustang", "Chevy Camaro", "DeLorean", "BMW"];
    // Creating Functions & Methods
    // Function that displays all gif buttons
    function displayGifButtons() {
        $("#gifButtonsDisplay").empty();

        for (var i = 0; i < cars.length; i++) {
            var gifButton = $("<button>");
            gifButton.addClass("car");
            gifButton.addClass("btn btn-primary")
            gifButton.attr("data-cars", cars[i]);
            gifButton.text(cars[i]);
            $("#gifButtonsDisplay").append(gifButton);
        }
    }
    // Function to add a new car button
    function addNewButton() {
        $("#addGif").on("click", function () {
            var car = $("#car-input").val().trim();
            if (car === "") {
                return false;
                // no blank button allowed-user must enter a car
            }
            cars.push(car);

            displayGifButtons();
            return false;
        });
    }
    // Function to remove a car button
    // Doesnt work perfectly, it doesn't just the last, it removes all the added buttons...close enough!
    function removeLastButton() {
        $("removeGif").on("click", function () {
            cars.pop(car);
            displayGifButtons();
            return false;
        });
    }

    // Function that displays all of the gifs
    function displayGifs() {
        var car = $(this).attr("data-cars");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=4LI0eZ9UVgWMWg15cbq7iZX97bBHr6og&q=" + car + "&limit=15&offset=0&rating=G&lang=en";

        console.log(queryURL); // displays the constructed url
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function (response) {
                console.log(response); // console test to make sure something returns
                $("#gifsView").empty(); // empty this div id so that it doesnt keep the previous click info
                var results = response.data; //shows results of gifs
                if (results === "") {
                    alert("There isn't a gif for this selected button");
                } for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    //div for the gifs to go into
                    gifDiv.addClass("gifDiv");
                    // pulling rating of gifs
                    var gifRating = $("<p>").text("Rating: " + results[i].rating);
                    gifDiv.append(gifRating);
                    // pulling gifs?
                    // still image stored into src of image
                    var gifImage = $("<img>");
                    gifImage.attr("src", results[i].images.fixed_height_small_still.url);
                    gifImage.attr("data-still", results[i].images.fixed_height_small_still.url); // still image
                    gifImage.attr("data-animate", results[i].images.fixed_height_small.url); // animated image
                    gifImage.attr("data-state", "still"); // image state toggle

                    // pulling still image of gif
                    // adding div of gifs to gifsView div
                    gifImage.addClass("image");
                    gifDiv.append(gifImage);
                    $("#gifsView").prepend(gifDiv);
                }

            });
    }
    // Calling Functions & Methods
    // displays list of cars already created
    displayGifButtons();
    // adds new button
    addNewButton();
    //removes buttons
    removeLastButton();
    // display gifs & ratings? ('Document Event Listeners')
    $(document).on("click", ".car", displayGifs);
    $(document).on("click", ".image", function () {
        var state = $(this).attr('data-state');
        if (state === 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });
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

