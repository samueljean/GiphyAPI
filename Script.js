// JavaScript File
$(document).ready(function() {
    $("#giphy").submit(function(event) {
        event.preventDefault();
        var query = $("#query").val();
        console.log(query);
        $.ajax({
            // This is the URL of the API
            url: "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC"
        }).done(function(response) { // the .done function happens after the API response is returned
            console.log(response);

            // this is the jQuery way to create
            // a new image element
            var image = $('<img>');
            var image2 = $('<img>');
            console.log(image);
            // when we create a new element,
            // jQuery returns an array. So we
            // need to look for the first item
            // in the image array

            // image.attr('src', response.data[0].images.fixed_width_downsampled.url);
            // image2.attr('src', response.data[1].images.fixed_width_downsampled.url);
            /*for (var i; i<10;i=i + 1){
                image.attr('src', response.data[i].images.fixed_width_downsampled.url);
                $("#results").append(image);
            }*/
            for (var i=0; i< data.length; i++){
               image.attr('src', response.data[i].images.fixed_width_downsampled.url)
            }
            $("#results").empty();
            $("#results").append(image);
            $("#results").append(image2);
        });
    });

});
