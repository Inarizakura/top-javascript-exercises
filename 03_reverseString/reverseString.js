const reverseString = function(str) {
	let len = str.length - 1;
	let res = "";
	while (len >= 0) {
		res += str[len];
		len--;
	}
	return res;
};

// Do not edit below this line
module.exports = reverseString;
