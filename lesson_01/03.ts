function someFunc(data: Human[]) {
	return data.reduce((acc, current) =>
		acc + Number(current.age > 18 && current.isMale), 0);
};


// Вторая часть кода:
type Human = {
	name: string,
	age: number,
	gender: 'male' | 'female',
}

const human: Human = {
	name: 'Ivan',
	age: 18,
	gender: 'male',
}

console.log(someFunc([human]));