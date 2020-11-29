function gettingJSON() {
    //Display the forecast
    // Your code here.

    document.querySelector('#forecast').style.display = "block";

    //Set default location if one isn't provided
    let location;
    // Your code here.
    location = document.querySelector('#location').value;
    console.log("input is :" + location);
    if (location == "") {
        location = "Ann Arbor"
    } console.log("Location is :" + location);


    //set default temperature format if one isn't provided
    let format;
    // Your code here.
    function checkMeasurement() {
        if (document.querySelector('#fahrenheit').checked == true) {
            format = "imperial";
        } else if (document.querySelector('#celcius').checked == true) {
            format = "metric";
        } else {
            format = "imperial";
        }
    } 
    checkMeasurement();
    console.log("Format is :" + format);


    //set the query  
    let query;
    // Your code here.  
    let api = '10b1186c53a438ae9188da846e9db7ec'
    query = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${format}&appid=${api}`

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
    let description;
    let iconurl;
    let setImg;
    // function setAttributes(attrs) {
    //     for (var key in attrs) {
    //         el.setAttribute(key, attrs[key]);
    //     }
    // }



    $.getJSON(query, function (json) {
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

        console.log(json);

        description = json.weather[0].description;
        tempImg = json.weather[0].icon;
        iconurl = "http://openweathermap.org/img/w/" + tempImg + ".png";
        setImg = document.querySelector("#tempImg");
        setImg.setAttribute("src", iconurl);
        setImg.setAttribute("alt", description);
        setImg.setAttribute("title", description);

        loc = document.querySelector("#loc").innerHTML = json.name;
        temp = document.querySelector("#temp").innerHTML = json.main.temp + " with " + description;

        console.log("location is " + loc);
        console.log("temp is " + temp);
        console.log("weather is " + description);
        console.log("tempImg is " + tempImg);
    });
}
