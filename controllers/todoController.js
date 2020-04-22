var router = require('express').Router(); 
const db = require('../models');
const mongoose = require("mongoose");


module.exports = router; 
//route below is to get all the todos saved in the DB
router.get('/api/todo', (req, res) => {
	db.Todo
		.find({})
		.then((todo) => {
			res.json(todo);
		})
		.catch((err) => {
			res.json(err);
		});
});

//route below is to add a todo 
router.post('/api/todo', (req, res) => {
	db.Todo.create(req.body).then((todo) => res.json(todo)).catch((err) => res.json(err));
});
// route below is to update a todo
router.put('/api/todo/update', (req, res) => {
	let id = mongoose.Types.ObjectId(req.body._id);
	db.Fruit
		.findOneAndUpdate({ _id: id }, { $set: { quantity: req.body.quantity } })
		.then((todo) => {
			res.json(todo);
		})
		.catch((err) => {
			res.json(err);
		});
});
	//route below is to delete a todo
	router.post('/api/todo/delete', (req, res) => {
		let id = mongoose.Types.ObjectId(req.body._id);
		db.Todo
			.remove({ _id: id })
			.then((todo) => {
				res.json(todo);
			})
			.catch((err) => {
				res.json(err);
			});
	});