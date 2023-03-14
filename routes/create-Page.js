/*
 * All routes for createPage are defined here
 * Since this file is loaded in server.js into /create-Page,
 *   these routes are mounted onto /create-Page
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
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
  const queryParams = [
    questions.quiz_id,
    questions.question,
    questions.answer_1,
    questions.answer_2,
    questions.answer_3,
    questions.answer_4,
    questions.is_correct,
  ];

  const queryString = `
  INSERT INTO questions (quiz_id, question, answer_1, answer_2, answer_3, answer_4, is_correct)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;`;

  return pool
    .query(queryString, queryParams)
    .then(result => result.rows)
    .catch(err => {
      console.log(err.message);
    });
};

const addQuiz = function (quizzes) {
  const queryParams = [
    quizzes.user_id,
    quizzes.title,
    quizzes.public,
  ];

  const queryString = `
  INSERT INTO quizzes (user_id, title, public)
  VALUES ($1, $2, $3)
  RETURNING *;`;

  return pool
    .query(queryString, queryParams)
    .then(result => result.rows)
    .catch(err => {
      console.log(err.message);
    });
};

router.post('/', (req, res) => {
  addQuiz({ user_id: 1, title: req.body.quiztitle, public: req.body.publicprivate })
    .then(quiz => {
      addQuestion({ quiz_id: quiz[0].id, question: req.body.q1, answer_1: req.body.q1a1, answer_2: req.body.q1a2, answer_3: req.body.q1a3, answer_4: req.body.q1a4, is_correct: req.body.q1radio })
        .then(question => {
          addQuestion({ quiz_id: question[0].quiz_id, question: req.body.q2, answer_1: req.body.q2a1, answer_2: req.body.q2a2, answer_3: req.body.q2a3, answer_4: req.body.q2a4, is_correct: req.body.q2radio })
            .then(question => {
              addQuestion({ quiz_id: question[0].quiz_id, question: req.body.q3, answer_1: req.body.q3a1, answer_2: req.body.q3a2, answer_3: req.body.q3a3, answer_4: req.body.q3a4, is_correct: req.body.q3radio })
                .then(question => {
                  addQuestion({ quiz_id: question[0].quiz_id, question: req.body.q4, answer_1: req.body.q4a1, answer_2: req.body.q4a2, answer_3: req.body.q4a3, answer_4: req.body.q4a4, is_correct: req.body.q4radio })
                    .then(question => {
                      addQuestion({ quiz_id: question[0].quiz_id, question: req.body.q5, answer_1: req.body.q5a1, answer_2: req.body.q5a2, answer_3: req.body.q5a3, answer_4: req.body.q5a4, is_correct: req.body.q5radio })
                        .then(question => {
                          res.redirect('/');
                        });
                    });
                });
            });
        })
    })
    .catch(e => {
      console.error(e);
      res.send(e);
    });
});

module.exports = router;
