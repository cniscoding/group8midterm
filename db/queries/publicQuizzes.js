const db = require('../connection');

const getPublicQuizzes = () => {
  return db.query('SELECT * FROM quizzes WHERE public = public;')
    .then(data => {
      return data.rows[0];
    });
};

module.exports = {
  getPublicQuizzes
};
