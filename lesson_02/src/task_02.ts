const arr0: number[] = [1, 2, 3] // number[]
const arr1: (number | null)[] = [1, 2, 3, null];
const arr2: (string | boolean)[] = ['safety', '=', true]
const arr3: Array<string[] | number[]> = [
	[1, 2, 3, 4, 5],
	['1', '2', '3', '4', '5'],
]
const arr4: Array<number | string | boolean | undefined> = [
	1, 2, true, 'str', undefined
]

const arr5: Array<{ id: number, name: string }> = [
	{
		id: 1,
		name: 'Студент',
	},
	{
		id: 2,
		name: 'Наставник',
	}
]
console.log('vasya');
