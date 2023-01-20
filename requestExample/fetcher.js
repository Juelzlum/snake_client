const request = require('request');
const fs = require('fs')
const stats = fs.stat
//console.log(stats)
arg = process.argv.slice(2)
const fileToSave = arg[1]
const url = arg[0]

request(url,(error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body);
fs.writeFile(fileToSave, url , err => {
  if (err) {
    console.error(err);
  }
  if(!err) {
    fs.stat( url, (stats) => {
      console.log(`Downloaded and saved ${stats.size} to ${fileToSave}`)
    })
  }
  else{
    console.log('Unable to obtain file size')
  }
});
})


