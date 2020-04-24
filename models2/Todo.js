const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const todoSchema = new Schema({
    todo_description: {
        type: String
    }, 

    todo_responsible: {
        type: String
    }, 

    todo_priority: {
        type: String
    },
    
    todo_completed:{
        // I used boolean becuase the act of completed can only be true or false
        type: Boolean
    }
}); 

const Todo = mongoose.model('Todo', todoSchema); 

module.exports = Todo;