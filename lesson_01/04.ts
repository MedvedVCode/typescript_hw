function revertWords(str: string): string {
	return str
		.split(' ')
		.map(word => word.split('').reverse().join(''))
		.join(' ')
		.trim();
}

const sentenseFirst = 'Hello, my name is John';
const sentenseSecond = '         ';

console.log(revertWords(sentenseFirst));
console.log(revertWords(sentenseSecond));
