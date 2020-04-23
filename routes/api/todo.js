const router = require('express').Router();
const todoController = require('../../controllers/todoController');

module.exports = router;

// /api/fruit/
router.route('/').get(todoController.findAll);

// /api/fruit/:data  route to create fruit
router.route('/create').post(todoController.createTodo);

// /api/fruit/add route to update todo
router.route('/update').put(todoController.updateTodo);

// /api/fruit/delete  route to delete todo
router.route('/delete').post(todoController.deleteTodo);
