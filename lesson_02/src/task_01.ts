function arrayDiff(a: Array<number>, b: Array<number>): Array<number> {
	b.forEach((itemB) => {
		a = a.filter((itemA) => itemA !== itemB)
	})
	return a
}

const a: number[] = [1, 2, 1, 2, 3, 4, 3, 4, 5, 6, 5, 6]
const b: number[] = [1, 3]

console.log('Difference between', a, 'and', b, '=', arrayDiff(a, b));
