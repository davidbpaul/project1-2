'use strict'
const http = require("http");


function printExampleHTML(callback) {

http.get(callback, (response) => {    // HTTP Response Callback

  response.setEncoding("utf8");             // Use UTF-8 encoding

  response.on("data", function(data) {           // On Data Received
    console.log(data);
  });

  response.on("end", function() {                // On Data Completed
    console.log("Response stream complete.");
  });

});
}

const requestOptions = {
  host: "cornwallcriminallawyer.com",
  path: "/"
};


console.log(printExampleHTML(requestOptions))