'use strict';

const express = require('express');
const todos = require('../../mock/todos.json')

const router = express.Router();

router.get('/todos', function (req, res) {
  res.json({
    todos: todos
  });
})

// TODO: add POST route

// TODO: add PUT route

// TODO: add DELETE route

module.exports = router;
