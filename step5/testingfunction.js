var getHTML = require('./http-functions');
getHTML("www.google.com", printHTML);




 function printHTML(html)
  {
    console.log(html);
  }



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};