/*
 * All routes for quiz are defined here
 * Since this file is loaded in server.js into /quiz,
 *   these routes are mounted onto /quiz
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { generateRandomID } = require('../server');

router.get('/:id', (req, res) => {
//  const id = req.params.id;

// if quizzes database contains a quiz with the given id, procceed
  // const quiz = getQuizById(id, quizzesDatabase);
// if the quiz id is not found, return alert message

//  res.render('quiz', quiz);
});

router.post('/:id', (req, res) => {
  const id = req.params.id;
  const quiz = getQuizById(id, quizzesDatabase);
  let numOfCorrects = 0;
// const numOfQuestions = ...

// for each question
  // check the correct/incorrect value of the selected option
  // if correct
    // numOfCorrects ++;

// add the new result to the results database
  // generate an result id
  // get the quiz id (id)
  // get the userID (req.session.user_id)
  // get the score (numOfCorrects / numOfQuestions)
  // timestamp

//  res.render('results', result);
});

function getQuizById (id, quizzesDatabase) {
  // find the quizz in the quizzesDatabase that matches the given id
  // return the quiz
}

module.exports = router;
