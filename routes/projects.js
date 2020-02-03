const express = require('express');
const router = express.Router();
// projects will be an array of project objects
const { projects } = require('../data.json');



router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (isNaN(id)) {
    const error = new Error('The route requires a numbered id');
    error.status = 404;
    return next(error);
  } else if (id > projects.length - 1) {
    const error = new Error('Project doesn\'t exist');
    error.status = 404;
    return next(error);
  }
  const project = projects[id];
  res.render('project', {project});
});

module.exports = router;