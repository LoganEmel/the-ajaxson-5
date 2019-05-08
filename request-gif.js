$(document).ready(function() {
    $("#form-gif-request").submit(fetchAndDisplayGif);
});

function fetchAndDisplayGif(event) {
    event.preventDefault();
    
    var captcha = $("#captcha").val();
    if (captcha != 5 && captcha != "five" && captcha != "Five") {
        setGifLoadedStatus(false);
        document.getElementById("captcha").style.color = "red";
      return false;
    }
    else {
    }
    
    var searchQuery = $("#tag").val();

    var params = { 
        api_key: "dc6zaTOxFJmzC", 
        tag : "jackson 5 " + searchQuery
    };
    
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/random",
        data: params,
        success: function(response) {
            console.log("we received a response!");
            console.log(response);
           
            $("#gif").attr("src", response.data.image_url);
            $("#feedback").text("Loading...");
            setGifLoadedStatus(true);
        },
        error: function() {
            $("#feedback").text("Sorry, could not load GIF. Try again!");
            setGifLoadedStatus(false);
        }
    });
    
    
}


function setGifLoadedStatus(isCurrentlyLoaded) {
    $("#gif").attr("hidden", !isCurrentlyLoaded);
    $("#feedback").attr("hidden", isCurrentlyLoaded);
}