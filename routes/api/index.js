const router = require('express').Router();
const db = require('../models');
const mongoose = require('mongoose');

module.exports = router;
//route to create Fruit
// router.post('/api/fruit', (req, res) => {
// 	db.Fruit.create(req.body).then((fruit) => res.json(fruit)).catch((err) => res.json(err));
// });

//route to get Fruits
router.get('/api/todo', (req, res) => {
	db.todos
		.find({})
		.then((todos) => {
			res.json(fruits);
		})
		.catch((err) => {
			res.json(err);
		});
});
