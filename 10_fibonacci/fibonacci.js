const fibonacci = function(seq) {
	if (seq == 0) {
		return 0;
	} else if (seq < 0) {
		return "OOPS";
	}
	let fib = [1, 1];

	if (seq > 2) {
		let first = 0;
		let second = 1;
		for (let i = seq - 2; i > 0; i--) {
			fib.push(fib[first] + fib[second]);
			first++;
			second++;
		}
	}
	return fib[seq - 1];
};

// Do not edit below this line
module.exports = fibonacci;
