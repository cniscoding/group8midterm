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
    questions.question,
    questions.answer_1,
    questions.answer_2,
    questions.answer_3,
    questions.answer_4,
    questions.is_correct,
  ];

  const queryString = `
  INSERT INTO questions (question, answer_1, answer_2, answer_3, answer_4, is_correct)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;`;

  return pool
    .query(queryString, queryParams)
    // console.log('result.rows', result.rows)
    .then(result => result.rows)
    .catch(err => {
      console.log(err.message);
    });
};

//  working for questions
// const addQuestion = function (questions) {
//   console.log("inside add question")
//   const queryParams = [
//     questions.question
//   ];

//   const queryString = `
//   INSERT INTO questions (question)
//   VALUES ($1, $2, $3, $4, $5)
//   RETURNING *;`;

//   return pool
//     .query(queryString, queryParams)
//     // console.log('result.rows', result.rows)
//     .then(result => result.rows)
//     .catch(err => {
//       console.log(err.message);
//     });
// };

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
    addQuestion({question: req.body.q1, answer_1: req.body.q1a1, answer_2: req.body.q1a2, answer_3: req.body.q1a3, answer_4: req.body.q1a4, is_correct: req.body.q1radio})
      .then(question => {
        addQuestion({question: req.body.q2, answer_1: req.body.q2a1, answer_2: req.body.q2a2, answer_3: req.body.q2a3, answer_4: req.body.q2a4, is_correct: req.body.q2radio})
          .then(question => {
            addQuestion({question: req.body.q3, answer_1: req.body.q3a1, answer_2: req.body.q3a2, answer_3: req.body.q3a3, answer_4: req.body.q3a4, is_correct: req.body.q3radio})
            .then(question => {
              addQuestion({question: req.body.q4, answer_1: req.body.q4a1, answer_2: req.body.q4a2, answer_3: req.body.q4a3, answer_4: req.body.q4a4, is_correct: req.body.q4radio})
              .then(question => {
                addQuestion({question: req.body.q5, answer_1: req.body.q5a1, answer_2: req.body.q5a2, answer_3: req.body.q5a3, answer_4: req.body.q5a4, is_correct: req.body.q5radio})
                .then(question => {
        res.redirect('/');
      })})})})
    })
      .catch(e => {
        console.error(e);
        res.send(e)
      });

  });


// router.post('/', (req, res) => {
//   addQuestion({question: req.body.q2, answer_1: req.body.q2a1, answer_2: req.body.q2a2, answer_3: req.body.q2a3, answer_4: req.body.q2a4, is_correct: req.body.q1radio})
//     .then(question => {

//       console.log('req.body.radioq1a1',req.body.q1radio)
//       //
//       // req.body for the answers
//       res.send(question);
//     })
//     .catch(e => {
//       console.error(e);
//       res.send(e)
//     });
// });

  // working code for questions
  // router.post('/', (req, res) => {
  //   const userId = 1;
  //   addQuestion({question: req.body.q1, id: userId})
  //     .then(question => {

  //       //
  //       // req.body for the answers
  //       res.send(question);
  //     })
  //     .catch(e => {
  //       console.error(e);
  //       res.send(e)
  //     });
  // });

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
