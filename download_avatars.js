//libraries
const request = require('request');
const fs = require('fs');
require('dotenv').config()
// this program will {
// get repo from console
// verify key and get contributers in repo
// for each user download picture and name to png
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
  if (requestData.bearer == null){
    console.log("no API_KEY")
    return
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
    data.forEach(function(contributor){
      const env = './.env';
      if (!fs.existsSync(env)){
        console.log('no .env file');
        return
      }
      callback(contributor.login, contributor.avatar_url);

    })
  });
};


//4
//copies images from url and paste(pipe) them into fownload_images folder
function downloadImageByURL(login, url) {
  const dir = './download_images';
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  request(url).pipe(fs.createWriteStream(`./download_images/${login}.png`));

}
//1
//takes input information and callback
  getRepoContributors(process.argv[2], process.argv[3], downloadImageByURL);

