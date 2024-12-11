const leapYears = function(year) {
	// Year divisible by 4
	if (year % 4 == 0) {
		// If year is century but not divisible by 400
		if ((year % 100 == 0) && (year % 400 != 0)) {
			return false;
		}
		return true;
	}
	return false;
};

// Do not edit below this line
module.exports = leapYears;
