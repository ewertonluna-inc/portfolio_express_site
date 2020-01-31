const express = require('express');
const router = express.Router();
// projects will be an array of project objects
const { projects } = require('../data.json');



router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const project = projects[id];
  res.render('project', {project});
});

module.exports = router;