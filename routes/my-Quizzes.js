/*
 * All routes for myQuizzes are defined here
 * Since this file is loaded in server.js into /my-Quizzes,
 *   these routes are mounted onto /my-Quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const { getMyQuizzes, getMyResult } = require('../db/queries/myQuizzes');

router.get('/', (req, res) => {
  const user_id = 1;
  getMyQuizzes(user_id)
    .then((myQuizzes) => {
      getMyResult(user_id)
        .then((myResults) => {
          res.render('myQuizzes', { myQuizzes, myResults });
        })
    })

    .catch((err) => {
      res.send("My result not found!");
    });
});


module.exports = router;
