const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');



router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const project = projects[id];
  res.render('project', {project});
});

module.exports = router;