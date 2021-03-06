import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 
import Utils from '../utils/TodoAPI'



var Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/update/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class todosList extends Component {

    constructor(props){ 
        super(props); 
        this.state = {todos: []}; 
    }

    //code below is requesting the information in the DB and posting it to the dom
    componentDidMount() {
        this.getToDos();
    }


    getToDos =()=>{
        Utils.getTodo()
          .then((response) => {
            this.setState({ todos: response.data });
          })
          .catch(function (error) {
            console.log(error);
          });     
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />; 
        }); 
    }

    render() {

        return(
            <div>
                <h3>List of Todoz</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }

}