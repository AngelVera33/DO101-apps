var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
<<<<<<< HEAD

app.get('/mars', function(req, res) {
  res.send('Hola angel!\n');
  });
=======
>>>>>>> 6e84ff122ddeb8e79dbd5a986205123dcaa7be0e
  
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
