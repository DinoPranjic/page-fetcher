const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);
const URL = args[0];
const FILE = args[1];

request(URL, (error, response, body) => {
  fs.writeFile(FILE, body, error => {
  })

  fs.stat(FILE, (err, stats) => {
    console.log(`Downloaded and saved ${stats.size} bytes to ${FILE}`);
  })
});