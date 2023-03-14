/*
 * All routes for createPage are defined here
 * Since this file is loaded in server.js into /create-Page,
 *   these routes are mounted onto /create-Page
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

router.get('/', (req, res) => {
  res.render('createPage');
});

const addQuestion = function (questions) {
  console.log("inside add question")
  const queryParams = [
    questions.question
  ];

  const queryString = `
  INSERT INTO questions (question)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;`;

  return pool
    .query(queryString, queryParams)
    // console.log('result.rows', result.rows)
    .then(result => result.rows)
    .catch(err => {
      console.log(err.message);
    });
};

// const addAnswer = function (question_id, answer) {
//   const queryParams = [
//     answers //this is an array
//   ];

//   const queryString = `
//   INSERT INTO answer (answer)
//   VALUES ($1)
//   RETURNING *;`;

//   return pool
//     .query(queryString, queryParams)
//     .then(result => result.rows)
//     .catch(err => {
//       console.log(err.message);
//     });
// };

router.post('/', (req, res) => {
    const userId = 1;
    addQuestion({question: req.body.q1, id: userId})
      .then(question => {

        //
        // req.body for the answers
        res.send(question);
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  });

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
// });

module.exports = router;
