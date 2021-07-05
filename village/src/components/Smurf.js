import React from 'react';
import axios from 'axios';

const Smurf = props => {
    const smurf = props.smurfs.find(smurf => `${smurf.id}` === props.match.params.smurfId);

    const deleteSmurf = event => {
      axios
        .delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(response => {
          props.updateSmurf(response.data);
        })
        .catch(err => console.log(err));
        props.history.push('/smurfville');
    }

  return (
    <div className='smurf'>
      <div className='smurf-header'>
        <h2>{smurf.name}</h2>
        <span className='delete-smurf' onClick={deleteSmurf}>exile</span>
      </div>
      <p>{smurf.name} is currently <strong>{smurf.age} years old</strong>!</p>
      <span>A whopping height of <strong>{smurf.height}</strong>!</span>
    </div>

  );
}

export default Smurf;

