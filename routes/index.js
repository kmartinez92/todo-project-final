//I could just put all my routes in this file for just one table in my db such as users,
//but what if I had a table for users, animals, etc... that will end up messy
//so using route.use to separate my routes

//=======================IF YOU WANT TO BREAK UP ALL ROUTES(CONTROLLERS IN SEP FILES... SEE BELOW)=================================

// apiRoutes == everything in the Api Folder
// setting all routes to start with /api and then whats in api will follow hence the const apiRoutes
// basically all routes in the api folder will start with /api

// const router = require("express").Router();
// const path = require("path");
// const apiRoutes = require("./api");
// router.use ("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use((req, res) => {
// res.sendFile(path.join(__dirname, "../client/build/index.html"))})

// module.exports = router;

//===================================================================================================================================

//=======================IF YOU WANT TO PUT ALL ROUTES(CONTROLLERS IN ONE FILE... SEE BELOW)=========================================

const router = require("express").Router();
const db = require("../models");
const mongoose = require("mongoose");

module.exports = router;
//route to create Todo
router.post("/api/create", (req, res) => {
  db.Todo.create(req.body)
    .then((todo) => res.json(todo))
    .catch((err) => res.json(err));
});

//route to get Todo
router.get("/api", (req, res) => {
  db.Todo.find({})
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.json(err);
    });
});

//route to add Todos
router.put("/api/update", (req, res) => {
  let id = mongoose.Types.ObjectId(req.body.todoID);
  db.Todo.findOneAndUpdate(
    { _id: id },
    { $set: { quantity: req.body.quantity } }
  )
    .then((fruit) => {
      res.json(fruit);
    })
    .catch((err) => {
      res.json(err);
    });
});


// update function needs to be adjusted and update below 
// todo.todo_description = req.body.todo_description;
// todo.todo_responsible = req.body.todo_responsible;
// todo.todo_priority = req.body.todo_priority;
// todo.todo_completed = req.body.todo_completed; 

//route to delete Todo
router.post("/api/delete", (req, res) => {
  let id = mongoose.Types.ObjectId(req.body.todoID);
  db.Todo.remove({ _id: id })
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.json(err);
    });
});
