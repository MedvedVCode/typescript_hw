function capitalizeStr(str: string): string {
	return str.split(' ').map((item)=>item[0].toLocaleUpperCase('ru-RU')+item.slice(1)).join(' ')
}

console.log(capitalizeStr('простое предложние, чтобы понять работу функции'))