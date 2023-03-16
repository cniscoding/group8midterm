const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('login');
  });

  // manually add a cookie based on req.params.id
router.get('/:id', (req, res) => {
res.cookie('user_id', req.params.id)
res.render('login');
});

router.post('/', (req, res) => {

  res.redirect('/');
});


module.exports = router;
