

const router = require("express").Router();
const db = require("../models2/Todo");
const mongoose = require("mongoose");

module.exports = router;

//route to get Todo
router.get("/api/todos", (req, res) => {
  db.find({})
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.json(err);
    });
});

//route to create Todo
router.post("/api/create", (req, res) => {

  db.create(req.body)
    .then((todo) => res.json(todo))
    .catch((err) => res.json(err));
});

//route to update Todos
router.put("/api/update", (req, res) => {

  var data = {
    description: todo.todo_description = req.body.todo_description,
    responsible: todo.todo_responsible = req.body.todo_responsible,
    priority: todo.todo_priority = req.body.todo_priority,
    completed: todo.todo_completed = req.body.todo_completed

  }; 

  let id = mongoose.Types.ObjectId(req.body.id);
  db.Todo.findOneAndUpdate(
    { _id: id },
    { $set: data }
  )
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.json(err);
    });
});


// // update function needs to be adjusted and update below 


// //route to delete Todo
// router.post("/api/delete", (req, res) => {
//   let id = mongoose.Types.ObjectId(req.body.todoID);
//   db.Todo.remove({ _id: id })
//     .then((todo) => {
//       res.json(todo);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
