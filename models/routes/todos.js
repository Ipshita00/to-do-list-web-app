
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create todo
router.post('/', async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

// Update todo
router.put('/:id', async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text, completed: req.body.completed },
    { new: true }
  );
  res.json(updated);
});

// Delete todo
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
