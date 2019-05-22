function factorial(num) {
	//initialize a value to hold the required output, which serves to succinctly update the multiplication
	let output = 1;
	// if (factorial ==)
	for (let i = 1; i <= num; i++) {
		output = output * i;
	}
	return output;
}
console.log(factorial(5)); //should return 120
console.log(factorial(7)); //should return 5040

/* function factorial(num){
    let multi = 1
    while(factorial)
    if (factorial == 0 || factorial == 1){
        break;
        result => result * factorial
        factorial => num - 1
    }
    for ( num > 1; i < num-1; num**) {
        return multi =* i 
    }
    console.log(multi);
 */
