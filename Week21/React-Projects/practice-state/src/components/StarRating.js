import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
	// Initialize a 'rating' state
	const [ rating, setRating ] = useState(0);
	// Write a function that returns 5 Star components
	const renderStars = () => {
		let stars = [];
		let biggestRating = 5;

		stars.map(rating =>
			<Star key={i} rating={rating} index={i} setRating={() => setRating(i + 1)} />
		); 

/* 		for (let i = 0; i < biggestRating; i++) {
			stars.push(<Star rating={rating} index={i} cheese="heeloo" setRating={() => setRating(i + 1)} key={i} />);
		}
		return stars;
	}; */

	// Write an event handler that updates the rating state.
	// Pass the function to a Star component via props

	return (
		<ul className="course--stars">
			{/* Render the Star components */}
			{renderStars()}
			{/* //map */}
		</ul>
	);
};

export default StarRating;
