function finalGrade(exam, projects) {
	if (exam > 90 || projects > 10) {
		console.log(100);
	} else if (exam > 75 || projects > 5) {
		console.log(90);
	} else if (exam > 50 || projects > 3) {
		console.log(75);
	} else {
		console.log(0);
	}
	debugger;
}

console.log(50);
finalGrade(10, 10);
