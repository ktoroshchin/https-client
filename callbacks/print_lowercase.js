var getHTML = require('./http-functions');
getHTML("www.google.com", toLowerCase);


function toLowerCase(stringData)
  {
    console.log(stringData.toLowerCase());
  }