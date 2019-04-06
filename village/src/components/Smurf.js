import React from 'react';
import axios from 'axios';

function Smurf(props) {
  const  smurf = props.smurfs.find(
    item => `${item.id}` === props.match.params.id    
  );

  if (!props.smurfs.length || !smurf) {
    return <h2>Loading item data...</h2>;
  }


  const deleteSmurf = event => {
    axios
      .delete(`http://localhost:3333/${smurf.id}`)
      .then(response => {
        props.updateSmurf(response.data);
        props.history.push('/smurfville');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="Smurf">
    <div>
      <span onClick={deleteSmurf}>remove</span>
      <h3>{props.name}</h3>
    </div>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

