//import request module from node
const request = require('request');



const arguments = process.argv;
const breedString = arguments[2];

const path = 'https://api.thecatapi.com/v1/breeds/search?q='+breedString;
const makeRequest = function(){
    request(path, (error, response, body)=>{
    const data = JSON.parse(body);
      if (error){
        console.log(error);
      }else if (data[0]===undefined){
        console.log(`Breed not found`);
      }else{
        console.log(data[0].description);
      }
  });
}
makeRequest();