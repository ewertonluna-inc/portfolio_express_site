const express = require('express');
const { projects } = require('./data.json');

const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.locals.projects = projects;
  res.render('index');
});