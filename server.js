var express = require('express'),
  path = require('path'),
  serveStatic = require('serve-static'),
  app = express(),
  port = process.env.PORT || 8000,
  static_path = path.join(__dirname, 'static');

app.set('views', './views');
app.set('view engine', 'pug');

app.route('/').get(function (req, res) {
  res.render('index')
})

app.use('/static', express.static(static_path));

app.listen(port)