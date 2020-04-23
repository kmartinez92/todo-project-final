import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

import createTodo from "./components/create-todo.component";
import editTodo from "./components/edit-todo.component";
import todosList from "./components/todos-list.component";

function App() {
  return (

    <Router>
        <div className="container">
        


            {/* cant get navbar to show for some reason come back to this kelvin */}


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Todoz</Link>
              <div>
                  <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/" className="nav-link">Todoz</Link>
                    </li>

                    <li className="navbar-item">
                      <Link to="/create" className="nav-link">Create New Todoz</Link>
                    </li>
                  </ul>
              </div>
            </nav>





            {/* BELOW ARE THE COMPONENTS FOR REACT FRONT END  */}
                <Route path="/" exact component={todosList} />
                <Route path="/update" component={editTodo} />
                <Route path="/create" component={createTodo}/>
        </div>
      
    </Router>

    

   
   
  );
}

export default App;
