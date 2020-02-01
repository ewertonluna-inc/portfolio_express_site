const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoutes = require('./routes/main');
const projectRoutes = require('./routes/projects');
app.use(mainRoutes);
app.use('/projects', projectRoutes);


// If no routes matched, then create a 404 error
app.use((req, res, next) => {
  const error = new Error('Could not find the requested resource');
  error.status = 404;
  next(error);
});

// Error handler
app.use((err, req, res, next) =>{
  res.status(err.status);
  console.log(`Error: ` + err.message);
  res.render('error', {error: err});
});

app.listen(3000, () => {
  console.log('Application is running on localhost:3000');
});