'use strict';

const Todo = require('./models/todo')

const todos = [
  'Make passive aggressive comments',
  'Clip toe nails',
  'Try not to panic'
];

todos.forEach(function (todo, index) {
  Todo.find({
    'name': todo
  }, function (err, todos) {
    if (!err && !todos.length) {
      Todo.create({
        completed: false,
        name: todo
      })
    }
  })
})
