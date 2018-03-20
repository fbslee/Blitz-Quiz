const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Question = sequelize.define('question', {
  type: Sequelize.STRING,
  body: Sequelize.STRING,
  answer: Sequelize.STRING,
  timer: Sequelize.INTEGER,
  isComplete: Sequelize.BOOLEAN,
  status: Sequelize.STRING,
  a: Sequelize.STRING,
  b: Sequelize.STRING,
  c: Sequelize.STRING,
  d: Sequelize.STRING
});

module.exports = Question;