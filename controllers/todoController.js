const db = require('../models');
const mongoose = require("mongoose");


module.exports = {
	findAll: (req, res) => {
		db.Todo
			.find({})
			.then((todos) => {
				res.json(todos);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createTodo: (req,res) => {
		db.Todo
		.create(req.body)
		.then(Todo => res.json(Todo))
		.catch(err => res.json(err))
	},

	addTodo: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body._id);
		db.Todo.findOneAndUpdate(
			{_id: id}, {$set: { quantity: req.body.quantity }})
			.then((todos) => {res.json(todos)})
			.catch((err) => {res.json(err)})		

	},

	updateTodo: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body._id);	
		db.Todo.findOneAndUpdate(
			{_id: id}, {$set: { quantity: req.body.quantity }})
			.then((todos) => {res.json(todos)})
			.catch((err) => {res.json(err)})
	},

	deleteTodo: (req,res) => {
		console.log(req.body);	
		let id = mongoose.Types.ObjectId(req.body._id);
		db.Todo.deleteOne({_id: id})
		.then((todos) => {res.json(todos)})
		.catch((err) => {res.json(err)})
	}
};
