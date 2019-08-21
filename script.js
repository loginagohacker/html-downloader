const rp = require('request-promise');
const fs = require('fs');

const url = '[HERE ENTER PAGE URL]';


rp(url)
  .then(function(html){
      console.log("Success!");
      fs.writeFile('html_content.html', html, (err) => {
          if (err) {
            console.log("Saving Error");
            console.error(err);
            return;
          }
      })
  })
  .catch(function(err){
    console.log("Promise Error");
    console.log(err);
  });