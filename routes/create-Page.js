/*
 * All routes for createPage are defined here
 * Since this file is loaded in server.js into /create-Page,
 *   these routes are mounted onto /create-Page
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('createPage');
});

module.exports = router;
