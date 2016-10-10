'use strict'
const request = require('request');

request.get("http://cornwallcriminallawyer.com", function(error, response, body) {
  if (error) {
    console.log(error);
    return;
  };

 console.log(body)
});