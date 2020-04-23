const db = require('../models');
const mongoose = require("mongoose");


module.exports = {
	findAll: (req, res) => {
		db.Todo
			.find({})
			.then((todo) => {
				res.json(todo);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createTodo: (req, res) => {
		db.Todo
		.create(req.body)
		.then(todo => res.json(todo))
		.catch(err => res.json(err))
	},

	updateTodo: (req, res) => {
		let id = mongoose.Types.ObjectId(req.body.todoID);
		db.Todo.findOneAndUpdate(
      		{ _id: id }, {$set: { quantity: req.body.quantity }}
			)
			.then((todo) => {res.json(todo)})
			.catch((err) => {res.json(err)})
	},

	deleteTodo: (req, res) => {
		let id = mongoose.Types.ObjectId(req.body.todoID);
		db.Todo.deleteOne({_id: id})
		.then((sweet) => {res.json(sweet)})
		.catch((err) => {res.json(err)})
	}
}