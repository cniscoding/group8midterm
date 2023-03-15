const db = require('../connection');

const getResultById = (id) => {
  return db.query('SELECT * FROM results WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = {
  getResultById
};
