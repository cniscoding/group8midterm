const db = require('../connection');

const getQuizById = (id) => {
  return db.query('SELECT * FROM quizzes WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    });
};

const getQuizQuestions = (id) => {
    return db.query('SELECT * FROM questions WHERE quiz_id = $1; ', [id])
      .then(data => {
        return data.rows;
      });
  };

module.exports = {
  getQuizById,
  getQuizQuestions
};
