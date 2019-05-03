let person = {
	myname: 'Dawit',
	lastname: 'Ghebremedhin',
	greetz: function() {
		console.log('Hello there ' + this.myname + ' ' + this.lastname);
	}
};

person.greetz();
// Another way to access it

console.log(person['myname']);
