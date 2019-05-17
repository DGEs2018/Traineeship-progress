function isItBoolean(value) {
	if (value === true || value === false) {
		console.log(true + ", it's indeed a Boolean");
	} else {
		console.log(false);
	}
	return value;
}

isItBoolean(true); // should return "true, it's indeed a Boolean"
isItBoolean(10); // should return 'false'
