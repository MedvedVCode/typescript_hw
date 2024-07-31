const digit_01: number = 82197
const digit_02: number = -8118

function sumDigit(digit: number): number {
	let sum:number = 0
	while (digit > 0) {
		sum+= (digit % 10);
		digit = Math.floor(digit / 10);
	}
	if (sum > 10) { sum = sumDigit(sum) }
	return sum
}

function digitSqrt(digit: number): number {
	if (digit > 0) {
		digit =sumDigit(digit)
	}
	return digit;
}

console.log(digit_01, digitSqrt(digit_01))
console.log(digit_02, digitSqrt(digit_02));
