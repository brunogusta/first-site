const bodyParser = require('body-parser');
const express = require('express');

module.exports = app => {
  app.use(express.static('.'));
  app.use(bodyParser.urlencoded({ extended: true }));
};
