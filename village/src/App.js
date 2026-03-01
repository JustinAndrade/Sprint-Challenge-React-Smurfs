import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf'
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  updateSmurf = newSmurfs => {
    this.setState({ smurfs: newSmurfs });
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then( response => this.setState({ smurfs: response.data }))
      .catch(err => console.log(err));

  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
      <nav>
        <NavLink exact to='/'>
          Home
        </NavLink>
        <NavLink exact to='/smurfville'>
          SmurfVille
        </NavLink>
        <NavLink exact to='/smurf-form'>
          Add Smurf
        </NavLink>
      </nav>
      <Route
        exact path='/' component={Home}
      />
      <Route
        exact
        path='/smurf-form'
        render={props => (
          <SmurfForm 
            {...props}
            smurfs={this.state.smurfs} 
            updateSmurf={this.updateSmurf} 
          />
        )}
      />
      <Route 
        exact
        path='/smurfville'
        render={props => (
          <Smurfs
            {...props}
            smurfs={this.state.smurfs}
            updateSmurf={this.updateSmurf} 
          />
        )}
      />
        <Route
          exact
          path='/smurfville/:smurfId'
          render={props => (
            <Smurf
              {...props}
              smurfs={this.state.smurfs}
              updateSmurf={this.updateSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
