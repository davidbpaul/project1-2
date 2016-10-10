



//libraries
const request = require('request');
const fs = require('fs');
require('dotenv').config()
// this program will {
// get repo from console
// verify key and get contributers in repo
// for each user get stars
// find top five users
//return top five users
// }

//3
//authenticates request


function githubRequest(endpoint, callback) {
  const requestData ={
    url: `https://api.github.com${endpoint}`,
    auth: {
       //key
      bearer:
        process.env.API_KEY
    },
    headers: {
     'User-Agent': "request"
    }
  }
  request.get(requestData, callback);

}

//2
function getRepoContributors(repoOwner, repoName, callback) {
  //access repo to get contributers
  githubRequest(`/repos/${repoOwner}/${repoName}/contributors`, (err, response, body) => {
    if(err){
     throw err
    }
    //transform string to object
    const data = JSON.parse(body);

    console.log(data);
    //for each contributer
    let freq = {}
    data.forEach(function(contributor){
      for(url in contributor.starred_url){
      //console.log(this.tracks[track]);
      var matchFound = false;
      for(key in contributor.url){
      //console.log(this.tracks[track][key]);
       var compareTo = contributor[url][track];
      //console.log(`comparing ${compareTo} and ${query}`);
      if(!compareTo.search(query)){
       matchFound = true;
       break;
     }
   }
   if(matchFound)
    if(contributer.login == contributer.login){
      contributer.login += 1;
    }
    else{
      contributer.login = 1;
    }

 }
  callback(data)
    })
  });
};



//1
//takes input information and callback
  getRepoContributors(process.argv[2], process.argv[3], getFrequency)


function getFrequency()









