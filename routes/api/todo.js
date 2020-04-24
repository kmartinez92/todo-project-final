const router = require('express').Router();
const todoController = require('../../controllers/todoController');

module.exports = router;

// /api/fruit/
router.route('/').get(todoController.findAll);

// /api/fruit/:data  route to create fruit
router.route('/').post(fruitController.createTodo);

// /api/fruit/add route to add fruit quantity
router.route('/add/').put(fruitController.addTodo);

// /api/fruit/minus route to decrease fruit quantity
router.route('/update/').put(fruitController.updateTodo);

// /api/fruit/delete  route to delete fruit
router.route('/delete/').post(fruitController.deleteTodo); 
