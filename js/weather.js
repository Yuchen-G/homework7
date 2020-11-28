function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector('#getIt').addEventListener("click", function() {
        document.querySelector('#forecast').style.display = block;
    })
    
    //Set default location if one isn't provided
    let location;
    // Your code here.
    if (location == null) {
        location = "Ann Arbor"
    }else{
        location = document.querySelector('#location').innerHTML;
    }
    console.log("Location is : " + location);


    //set default temperature format if one isn't provided
    let format;
    // Your code here.
    document.querySelector('#fahrenheit').addEventListener("click", function() {
        format = "imperial"
    })
    document.querySelector('#celcius').addEventListener("click", function() {
        format = "metric"
    })
    if (format !== null) {
        format = "imperial"
    }
    console.log("Format is :" + format);


    //set the query  
    let query;
    // Your code here.  
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

    });
}
