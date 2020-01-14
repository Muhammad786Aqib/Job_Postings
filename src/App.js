import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.jpg'

import Readpage from './container/readpage';
import Updatejob from './container/updatejob';
import Addjobs from './container/addjobs';
import Deletejob from './container/deletejob';


 

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <nav className="main-nav">
                  <ul style={{listStyle:'none'}}>
                      <li className="App-li"><NavLink className="App-nav"  to="/joblist">Job List</NavLink></li>
                      <li className="App-li"><NavLink className="App-nav" to="/add">Add Job</NavLink></li>
                  </ul>
              </nav>
          </div>

          <div className="container">
              <Route path="/joblist" component={Deletejob}/>
              <Route path="/update/:id" component={Updatejob}/>
              <Route path="/readjob/:id" component={Readpage}/>
              <Route  path="/add" component={Addjobs}/> 
              
              
          </div>
      </div>
  </Router>
    );
  }
}

export default App;
