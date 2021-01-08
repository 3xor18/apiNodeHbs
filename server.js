const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

/* Heroku */
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');

/* Hbs xpress engimne */
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
	res.render('home', { nombre: 'Gerson', year: new Date().getFullYear() });
});

app.get('/about', function (req, res) {
	res.render('about', { nombre: 'Gerson', year: new Date().getFullYear() });
});

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
