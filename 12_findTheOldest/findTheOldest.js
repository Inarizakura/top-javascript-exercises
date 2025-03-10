const findTheOldest = function(arr) {
	const currentYear = (new Date()).getFullYear();

	arr.sort((a, b) => {
		if (!a.yearOfDeath || !b.yearOfDeath) {
			return (currentYear - b.yearOfBirth) - (currentYear - a.yearOfBirth);
		}
		return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
	});
	return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
