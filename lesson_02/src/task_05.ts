
function areEqual(objectA: any, objectB: any): boolean {

	const objKeys1 = Object.keys(objectA);
	const objKeys2 = Object.keys(objectB);

	if (objKeys1.length !== objKeys2.length) return false;

	for (let key of objKeys1) {
		const value1 = objectA[key];
		const value2 = objectB[key];

		const isObjects = isObject(value1) && isObject(value2);

		if ((isObjects && !areEqual(value1, value2)) ||
			(!isObjects && value1 !== value2)
		) {
			return false;
		}
	}
	return true;
};

const isObject = (object: any) => {
	return object != null && typeof object === "object";
};



const objectA: object = {
	id: 1,
	name: { first: 'Vasya', second: 'Petrov' },
	age: '22',
	gender: [{ type: 'male' }, { type: 'girl' }],
}

const objectB: object = {
	id: 1,
	name: { first: 'Vasya', second: 'Petrov' },
	age: '22',
	gender: [{ type: 'male' }, { type: 'girl' }],
}

console.log('Is', objectA, 'equals to', objectB, areEqual(objectA, objectB));
