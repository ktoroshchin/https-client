var getHTML = require('./http-functions');
getHTML("www.google.com", toUpperCase);


function toUpperCase(stringData)
  {
    console.log(stringData.toUpperCase());
  }