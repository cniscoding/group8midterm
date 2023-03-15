const db = require('../connection');

const getMyQuizzes = (user_id) => {
  return db.query('SELECT * FROM quizzes WHERE user_id = $1;', [user_id])
    .then(data => {
      return data.rows;
    });
};

const getMyResult = (user_id) => {
  return db.query('SELECT * FROM results WHERE user_id = $1;', [user_id])
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  getMyQuizzes,
  getMyResult
};
