function isItBoolean(value) {
	if (value === true || value === false) {
		console.log(True + ", it's indeed a Boolean");
	} else {
		console.log(false);
	}
	return value;
}

isItBoolean(true); // should return "True, it's indeed a Boolean"
isItBoolean(10); // should return 'false'
