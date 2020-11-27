// require the express module
const express = require("express");
// create an object from the express function which we contains methods for making requests and starting the server
const app = express();
const args = process.argv.slice(2);
const bodyParser = require("body-parser");

const route = require('./routes/index');


// create a route for a GET request to '/' - when that route is reached, run a function
app.get("/", function(request, response) {
  /* inside of this callback we have two large objects, request and response
        request - can contain data about the request (query string, url parameters, form data)
        response - contains useful methods for determining how to respond (with html, text, json, etc.)
    let's respond by sending the text Hello World!
    */
  return response.send("Hello World!");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.use("/", route);;
// let's tell our server to listen on port 3000 and when the server starts, run a callback function that console.log's a message
app.listen(args[0], function() {
  console.log(
    "The server has started on port 4444. Head to localhost:4444 in the browser and see what's there!"
  
  );
});