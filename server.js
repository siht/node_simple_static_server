var express = require('express'),
  path = require('path'),
  app = express(),
  port = process.env.PORT || 8000,
  api_url = process.env.API_URL || 'http://localhost:3000',
  static_path = path.join(__dirname, 'static');

app.set('views', './views');
app.set('view engine', 'pug');

app.route('/').get(function (req, res) {
  res.render('index', {'API_URL': api_url});
})

app.use('/static', express.static(static_path));

app.listen(port)