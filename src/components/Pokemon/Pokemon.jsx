// import React from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './Pokemon.css';

function Pokemon({ name, image }) {
    return (
        <div className='pokemon'>
            <div>{name}</div>
            <div>
                <img src={image} className='pokemon-image' alt={name} />
            </div>
        </div>
    );
}

// Prop validation for the 'name' and 'image' props
// Pokemon.propTypes = {
//     name: PropTypes.string.isRequired,  // name must be a string and is required
//     image: PropTypes.string.isRequired, // image must be a string and is required
// };

export default Pokemon;
