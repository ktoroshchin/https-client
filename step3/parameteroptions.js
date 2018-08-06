var https = require('https');
//   var requestOptions =
//   {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step2.html'
//   };
function getAndPrintHTML(options)
{
  var strHost;
  var strPath;

  strHost = options.split("/")[0];
  strPath = options.split("/").slice(1).join("/");

  var requestOptions =
  {
    host: strHost,
    path: strPath
  }




  // notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(requestOptions, function(response)
{
  var stringData = "";
  response.setEncoding('utf8');
// the callback is invoked when a `data` chunk is received
  response.on('data', function(data)
  {
    stringData+=data;
  });

  response.on('error',function()
  {
    console.log('Error reading data.')
  })
// the callback is invoked when all of the data has been received
// (the `end` of the stream)
  response.on('end', function()
  {
    console.log('Response stream complete.' + stringData);
  });
});
};

getAndPrintHTML("hmpg.net");