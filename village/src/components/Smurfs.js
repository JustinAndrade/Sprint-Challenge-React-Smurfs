import React  from 'react';

import Smurf from './Smurf';


const Smurfs = props => {
  function routeToSmurf(event, smurf) {
    event.preventDefault();
    props.history.push(`/${smurf.id}`);
  }
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <div onClick={event => routeToSmurf(event, smurf)}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.deleteSmurf}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
