/*
 * All routes for quiz are defined here
 * Since this file is loaded in server.js into /quiz,
 *   these routes are mounted onto /quiz
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const {
  getQuizById,
  getQuizQuestions
} = require('../db/queries/quiz');

const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  getQuizById(id)
    .then((quiz) => {
      getQuizQuestions(id)
        .then((questions) => {
          res.render('quiz', { quiz, question_1: questions[0], question_2: questions[1], question_3: questions[2], question_4: questions[3], question_5: questions[4] });
        })
    })
    .catch((err) => {
      res.send("Quiz not found!");
    })
});

router.post('/:id', (req, res) => {
  const id = req.params.id;

  getQuizById(id)
    .then((quiz) => {
      getQuizQuestions(id)
        .then((questions) => {
          let numOfCorrects = 0;
          if (questions[0].is_correct === req.body.a1radio) { numOfCorrects++; }
          if (questions[1].is_correct === req.body.a2radio) { numOfCorrects++; }
          if (questions[2].is_correct === req.body.a3radio) { numOfCorrects++; }
          if (questions[3].is_correct === req.body.a4radio) { numOfCorrects++; }
          if (questions[4].is_correct === req.body.a5radio) { numOfCorrects++; }

          addResult({
            quiz_id: quiz.id,
            user_id: 1,
            title: quiz.title,

            score: numOfCorrects
          })
            .then((result) => {
              console.log('Type of result: ', typeof (result));
              console.log('result: ', result);
              res.render('results', result);
            })
            .catch((err) => {
              console.log(err.message);
            })
        })
    })
    .catch((err) => {
      console.log(err.message);
    })

});

const addResult = function (results) {
  const queryParams = [
    results.quiz_id,
    results.user_id,
    results.title,
    results.score,
  ];

  const queryString = `
  INSERT INTO results (quiz_id, user_id, title, score)
  VALUES ($1, $2, $3, $4)
  RETURNING *;`;

  return pool
    .query(queryString, queryParams)
    .then(result => result.rows[0])
    .catch(err => {
      console.log(err.message);
    });
};

module.exports = router;
