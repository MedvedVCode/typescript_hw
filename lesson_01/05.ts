const digit_01: number = 8219
const digit_02: number = -8118

function powDigits(digit: number): number {
	let resultString: string[] = [];
	if (digit <= 0) {
		return digit
	}
	while (digit > 0) {
		let lastDigit: number = Math.pow(digit % 10, 2);
		digit = Math.floor(digit / 10);
		resultString.unshift(lastDigit.toString());
	}
	return Number(resultString.join(''));
}

console.log(digit_01, powDigits(digit_01))
console.log(digit_02, powDigits(digit_02));
