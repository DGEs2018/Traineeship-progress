//list problem
function arrayToList(list) {
	for (let i = list.length - 1; i >= 0; i--) {
		if ((i = list.length - 1)) {
			list = {
				value: arr[i],
				rest: null
			};
		} else {
			list = {
				value: arr[i],
				rest: list
			};
		}
	}
}
let list = null;
console.log(list);
