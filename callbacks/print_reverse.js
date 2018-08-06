var getHTML = require('./http-functions');
getHTML("www.google.com", reverse);


function reverse(stringData)
  {
    console.log(stringData.split('').reverse().join(""));
  }