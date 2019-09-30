var express = require('express'),
  path = require('path'),
  serveStatic = require('serve-static'),
  app = express(),
  port = process.env.PORT || 8000,
  api_url = process.env.API_URL || 'http://localhost:3000',
  imgur_url = process.env.IMGUR_URL || 'https://api.imgur.com/3/image',
  imgur_client_id = process.env.IMGUR_CLIENT_ID || 'put your id',
  static_path = path.join(__dirname, 'static');

app.set('views', './views');
app.set('view engine', 'pug');

app.route('/').get(function (req, res) {
  res.render(
    'index',
    {
      'API_URL': api_url,
      'IMGUR_URL': imgur_url,
      'IMGUR_CLIENT_ID': imgur_client_id
    }
  )
})

app.use('/static', express.static(static_path));

app.listen(port)