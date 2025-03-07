const palindromes = function (str) {
	const parsedStr = str.toLowerCase().split('')
						.filter(c => ((c >= 'a' && c <= 'z') 
									|| (c >= '0' && c <= '9')))
						.join('');
	const reversedStr = parsedStr.split('').reverse().join('');
	
	if (parsedStr != reversedStr) {
		return false;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
