import React from 'react';
import '../css/Flat.css';

const Flat = (props) => {
	const label = props.flat.placeName + '' + 'for just' + props.flat.rent + props.flat;

	const style = {
		backgroundImage: `url(${props.flat.imageUrl})`
	};
	return (
		<div className="flat">
			<div className="flat-image" style={style}>
				{' '}
			</div>
		</div>
	);
};

export default Flat;
