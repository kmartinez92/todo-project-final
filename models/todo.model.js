var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

let todoSchema = new Schema({
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

var Todo = mongoose.model('Todo', todoSchema); 

module.exports = Todo; 