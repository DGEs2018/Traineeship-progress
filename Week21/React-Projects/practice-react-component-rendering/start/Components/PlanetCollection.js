import React from 'react';

const PlanetCollection = (props) => {
	// const AllPlanets = [ singlePlanet ];
	return (
		<div className="planet-container">
			{props.allPlanets.map((singlePlanet) => (
				<Planet
					// {...props}
					id={singlePlanet.id}
					name={singlePlanet.name}
					diameter={singlePlanet.diameter}
					moons={singlePlanet.moons}
					desc={singlePlanet.desc}
					url={singlePlanet.url}
				/>
			))}
		</div>
	);
};

export default PlanetCollection;
