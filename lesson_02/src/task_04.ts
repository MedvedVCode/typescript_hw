function capitalizeStrAndDeleteIndex(str: string, needToDelete?: true): string {
	let strArr: string[] = str.split(' ').map((item) => item[0].toLocaleUpperCase('ru-RU') + item.slice(1))
	if (needToDelete) {
		let firstIndexLength: number = strArr[0].length + 1
		if (firstIndexLength < strArr.length) {
			strArr.splice(firstIndexLength, 1)
		}
	}
	return strArr.join(' ')
}

console.log(capitalizeStrAndDeleteIndex('простое предложние, чтобы понять работу функции'))
console.log(capitalizeStrAndDeleteIndex('простое предложние, чтобы понять работу функции и тут еще что-то'));
console.log(capitalizeStrAndDeleteIndex('простое предложние, чтобы понять работу функции и тут еще что-то', true));
