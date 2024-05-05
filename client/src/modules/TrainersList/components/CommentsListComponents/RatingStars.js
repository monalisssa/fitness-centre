import React from 'react';

import ReactStars from "react-stars/dist/react-stars";




const RatingStars = ({stars, type, handleSetRating}) => {

    const ratingChanged = (newRating) => {
        handleSetRating(newRating)
    }

    return (
        <ReactStars
            edit={type}
            count={5}
            value={stars}
            size={25}
            activeColor="#ffd700"
            onChange={ratingChanged}

        />
    );
};

export default RatingStars;

