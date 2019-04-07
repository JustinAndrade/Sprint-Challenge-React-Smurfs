import React  from 'react';
import { Link } from 'react-router-dom';

import './smurfs.css'

class Smurfs extends React.Component {
  render() {
    return (
      <div className="Smurfs">
        <h2>The Smurfs</h2>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className='smurf-link'>
                <img src={smurf.img} alt={smurf.name}/>
              <Link to={`smurfville/${smurf.id}`}>{smurf.name}</Link>
              </div>
              // <Route 
              //   path='/smurfville/'
              //   render={props => (
              //     <Smurf
              //       {...props}
              //       smurf={props.smurf}
              //       updateSmurf={props.updateSmurf}
              //       name={smurf.name}
              //       id={smurf.id}
              //       age={smurf.age}
              //       height={smurf.height}
              //       key={smurf.id}
              //       deleteSmurf={this.deleteSmurf}
              //     />
              //   )}
              // />
            );
          })}
        </ul>
      </div>
    );
  }
}


export default Smurfs;
