var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// milkcocoa の on('push', function() { // mail api を実行, -> 成功したら ds.send('success message');
// 別途, edison 側で ds.on('send', function() { // 'success message' の場合に LED をoff

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


