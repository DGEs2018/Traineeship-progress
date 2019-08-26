class Board extends React.Component {
	renderSquare(i) {
		return (
			<button className="square" onClick={function() {alert('click');}}>
				{/* pass a pro from a parent Board component to a child, this is how information flows in React Apps, from parents to children */}
				{this.props.value}
			</button>
			// <Square value={i} />
		);
	}
}

Making an Interactive Component

// To populate the Square component with an 'X'
onClick={function() {alert('click');}}

// as a next step, we'd like the Square component to remember that it got clicked and fill it with 
// an X, for that components use state


