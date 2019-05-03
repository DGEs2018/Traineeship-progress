const MAX = 25;
function PythagoreansTriangle() {
	for (let a = 1; a < Max; i++) {
		for (let b = a + 1; b <= Max; b++) {
			var csq = a * a + b * b;
			var c = Math.round(Math.sqrt(csq));
			if (c * c === csq) {
				console.log(a + ', ' + b + ', ' + c);
			}
		}
	}
}

PythagoreansTriangle();
