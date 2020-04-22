import React, {Component} from 'react'; 
import axios from 'axios'; 

export default class EditTodo extends Component {

    constructor(props){ 
        super(props); 

        //code below is binding each event to the word "this" since we use that in the code below a lot of times. 
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this); 
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this); 
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this); 
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 

        this.state= { 
            todo_description: '', 
            todo_responsible: '', 
            todo_priority: '', 
            todo_completed: false,
            todo_selected: ""
        }
    }

    componentDidMount() { 
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
                .then(response => { 
                    this.setState({
                        todo_description: response.data.todo_description, 
                        todo_responsible: response.data.todo_responsible,
                        todo_priority: response.data.todo_priority,
                        todo_completed: response.data.todo_completed
                    })
                })
                .catch(function(error){
                    console.log(error) 
                })
    }
        //code below is what is going to handle the event that will update the state of the component 
        onChangeTodoDescription(e){
            this.setState({
                todo_description: e.target.value
            }); 
        }

        onChangeTodoResponsible(e){ 
            this.setState({
                todo_responsible: e.target.value
            });
        }

        onChangeTodoPriority(e){
            this.setState({
                todo_priority: e.target.value
            });
        }

        onChangeTodoCompleted(e){
            this.setState({
                todo_completed: !this.state.todo_completed
            });
        }


        onSubmit(e){
            e.preventDefault(); 

            var obj = {
                todo_description: this.state.todo_description, 
                todo_responsible: this.state.todo_responsible, 
                todo_priority: this.state.todo_priority, 
                todo_completed: this.state.todo_completed
            }; 

            axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
                    .then(res => console.log(res.data)); 

                    //code below lets the user go back to the home page once they submit the update
            this.props.history.push('/'); 

            }
        
                    //code below to remove todo (NEED TO FIX)
    

        // handleRemove = todo => {

        //         var obj = {
        //                 todo_description: this.state.todo_description, 
        //                 todo_responsible: this.state.todo_responsible, 
        //                 todo_priority: this.state.todo_priority, 
        //                 todo_completed: this.state.todo_completed
        //             }; 

        //             const url = ('http://localhost:4000/todos/'+this.props.match.params.id, obj);
                
        //             axios
        //               .delete(url)
        //               .then(res => {
        //                 this.setState(previousState => {
        //                   return {
        //                     todo: previousState.todo.filter(m => m.id !== todo.id)
        //                   };
        //                 });
        //               })
        //               .catch(err => {
        //                 console.log(err);
        //               });
        //           };
                


        removeTodo = (e) => {
            e.preventDefault();
            var todoToDelete = this.props.match.params.id
            console.log("Trying to Delete " + todoToDelete);
            //Url parsing, grab the object ID
            const url = ('http://localhost:4000/delete/'+ todoToDelete);
                
                    axios
                      .post(url)
                      .then(res => {
                        this.setState(previousState => {
                        
                });
                      })
                      .catch(err => {
                        console.log(err);
                      });


           

                // if (this.props.removeClick) {
                //     this.props.removeClick(todos);
    // }
  };



        
    render() {

        return(
            <div>
                <h3>Update Your Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>

                    <div className="form-group">
                        <label>Responsible</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="low"
                                    checked={this.state.todo_priority==='low'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="medium"
                                    checked={this.state.todo_priority==='medium'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="high"
                                    checked={this.state.todo_priority==='high'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckBox"
                                    name="completedCheckBox"
                                    onChange={this.onChangeTodoCompleted}
                                    checked={this.state.todo_completed}
                                    value={this.state.todo_completed}/>

                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>

                    <br/>

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary"/>
                    </div>

                    {/* //BELOW IS THE CODE FOR THE DELETE BUTTON// */}
                    <div className="form-group">
                        <input type="submit" onClick={this.removeTodo} className="btn btn-primary"/>
                    </div>


                    </div>
                </form>
            </div>
        )
    }

}