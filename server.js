var express = require('express'),
  path = require('path'),
  serveStatic = require('serve-static'),
  app = express(),
  port = process.env.PORT || 8000,
  html_template_path = path.join(__dirname, 'html'),
  static_path = path.join(__dirname, 'static');

app.set('views', './views');
app.set('view engine', 'pug');

app.route('/').get(function (req, res) {
	res.sendFile(path.join(html_template_path, 'index.html'))
})

app.route('/index').get(function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.use('/static', express.static(static_path));

app.listen(port)