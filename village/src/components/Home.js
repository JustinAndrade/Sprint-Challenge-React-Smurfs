import React from 'react';

const Home = props => {
    const routeToVillage = event => {
        event.preventDefault();
        props.history.push('/smurfville');
    };

    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='https://cache.emirates247.com/polopoly_fs/1.403985.1452196834!/image/image.jpg'
                alt='The Smurf Village'
            />
            <button onClick={routeToVillage} className='visit-button'>
                Visit the Smurfs!
            </button>
        </div>
    )
}

export default Home;