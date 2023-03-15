/*
 * All routes for myQuizzes are defined here
 * Since this file is loaded in server.js into /my-Quizzes,
 *   these routes are mounted onto /my-Quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { getMyQuizzes } = require('../db/queries/myQuizzes');

router.get('/', (req, res) => {
  const user_id = 1;
  getMyQuizzes(user_id)
  .then((myQuizzes) => {
    console.log('Type of myQuizzes: ', typeof(myQuizzes));
    console.log('myQuizzes: ', myQuizzes);
;
    res.render('myQuizzes', myQuizzes)
  })
  .catch((err) => {
    res.send("My quizzes not found!");
  });
  // const myQuizzes = findMyQuizzes(userID, quizzesDatabase);
  // res.render('myQuizzes', myQuizzes);

});


module.exports = router;
