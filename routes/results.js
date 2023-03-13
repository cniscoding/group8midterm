/*
 * All routes for results are defined here
 * Since this file is loaded in server.js into /results,
 *   these routes are mounted onto /results
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  //  const id = req.params.id;

  // if results database contains a result with the given id, procceed
    // const result = getResultById(id, resultsDatabase);
  // if the result id is not found, return alert message

  // res.render('results', result);
});

function getResultById (id, resultsDatabase) {
  // find the result in the resultsDatabase that matches the given id
  // return the result
}

module.exports = router;
