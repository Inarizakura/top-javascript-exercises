const sumAll = function(num1, num2) {
	if ((num1 < 0 || num2 < 0) || !(Number.isInteger(num1) && Number.isInteger(num2))) {
		return "ERROR";
	}
	function totalSum(num1, num2) {
		let sum = 0;
		while (num1 <= num2) {
			sum += num1;
			num1++;
		}
		return sum;
	}
	
	return num1 > num2 ? totalSum(num2, num1) : totalSum(num1, num2);
};

// Do not edit below this line
module.exports = sumAll;
