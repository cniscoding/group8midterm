/*
 * All routes for results are defined here
 * Since this file is loaded in server.js into /results,
 *   these routes are mounted onto /results
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const { getResultById } = require('../db/queries/result');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  getResultById(id)
    .then((result) => {
      res.render('results', result);
    })
    .catch((err) => {
      res.send("Result not found!");
    });
})


module.exports = router;
