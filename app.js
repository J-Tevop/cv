var express = require('express');
var app = express();

app.use(express.static('public'));
// app.use(express.static("public/views/pages"));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))
app.use('/node_modules/jquery', express.static(__dirname + '/node_modules/jquery'));
app.use('/node_modules/@fortawesome', express.static(__dirname + '/node_modules/@fortawesome'));
// set the view engine to ejs
app.set('views', './views/pages');
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// // index page
app.get('/', function (req, res) {
  res.render('index');
});

// about page
// app.get('/about', (req, res) => {
//   res.sendFile(__dirname + '/views/about.html')
// })

app.listen(8080);
console.log('Server is listening on port 8080');