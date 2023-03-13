/*
 * All routes for myQuizzes are defined here
 * Since this file is loaded in server.js into /my-Quizzes,
 *   these routes are mounted onto /my-Quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { generateRandomID } = require('../server');

router.get('/', (req, res) => {
  // const userID = req.session.user_id;
  // const myQuizzes = findMyQuizzes(userID, quizzesDatabase);
  // res.render('myQuizzes', myQuizzes);
});

router.post('/', (req, res) => {
  // form validation
    // if any input field is empty, show alert message

  // add the new quiz to the quizzes database
    // generate a quiz id
    // get the input quiz title (req.body.quizTitle)
    // get the userID (req.session.user_id)
    // get the public/private setting

  // add the new question to the questions database
    // generate a question id
    // get the input question (req.body.q1)
    // get the quiz id generated above

  // add the new answer option to the options database
    // generate an option id
    // get the input answer option (req.body.q1a1)
    // get the question id generated above
    // get the correct/incorrect value
  // repeat for all options

  // repeat for all questions

//  const myQuizzes = getMyQuizzes(user_id, quizzesDatabase);
//  res.render('myQuizzes', myQuizzes);
})

function getMyQuizzes(user_id, quizzesDatabase) {
  // find the quizzes in the quizzesDatabase that matches the given user_id
  // return my quizzes
}

module.exports = router;
