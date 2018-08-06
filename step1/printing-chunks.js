var https = require('https');
function getAndPrintHTMLChunks()
{
  var requestOptions =
  {
    host: 'www.asweetpeachef.com',
    path: '/banana-protein-shake'
  };
// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(requestOptions, function(response)
{
  response.setEncoding('utf8');
// the callback is invoked when a `data` chunk is received
  response.on('data', function(data)
  {
    console.log('Chunk Received. Length:', data+"\n");
  });

  response.on('error',function()
  {
    console.log('Error reading data.')
  })
// the callback is invoked when all of the data has been received
// (the `end` of the stream)
  response.on('end', function()
  {
    console.log('Response stream complete.');
  });
});
};

getAndPrintHTMLChunks()



