/*
 * All routes for myQuizzes are defined here
 * Since this file is loaded in server.js into /my-Quizzes,
 *   these routes are mounted onto /my-Quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// router.use((req, res, next) => {
//   if (!req.session.user_id) {
//     return res.redirect('/login');
//   }
//   next();
// });

router.get('/', (req, res) => {
  // const userID = req.session.user_id;
  // const myQuizzes = findMyQuizzes(userID, quizzesDatabase);
  // res.render('myQuizzes', myQuizzes);
});



function getMyQuizzes(user_id, quizzesDatabase) {
  // find the quizzes in the quizzesDatabase that matches the given user_id
  // return my quizzes
}

module.exports = router;
