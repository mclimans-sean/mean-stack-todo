'use strict';

const express = require('express');
const Todo = require('../models/todo');
// const todos = require('../../mock/todos.json')

const router = express.Router();

router.get('/todos', function (req, res) {
  Todo.find({

  }, function (err, todos) {
    if (err) {
      return res.status(500).json({message: err.message})
    }
    res.json({
      todos: todos
    });
  })

})

// TODO: add POST route

// TODO: add PUT route

// TODO: add DELETE route

module.exports = router;
