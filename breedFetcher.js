//import request module from node
const request = require('request');
//we are referencing callback which is a callback function, it has 2 parameters err & desc
const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      //if an error is found then the value of desc is null
      callback(error, null);
    }
    //converts body which is a JSON string into an object
    const data = JSON.parse(body);
    if (data.length === 0) { 
      //if the breed is not found i.e value of data array is 0 then the value of desc is null
      callback('Breed not found', null);
    } else {
      //if the breed is present the the value of err is null
      callback(null, data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };
