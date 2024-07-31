const actor: {
	name: string;
	firstName: string;
	country: string;
	city: string;
	hasOskar: boolean;
	filmsCount: number;
	age: number;
	languages: string[];
	} = {
	name: 'Michael',
	firstName: 'Ivanov', 
	country: 'Russia',
	city: 'Makhachkala',
	hasOskar: false,
	filmsCount: 10,
	age: 14,
	languages: ['RU-ru', 'EN-us', 'TR-tr'],
	};
	const howOldWillBeActorAfterTwentyYears = (actor) => {
	return actor.age + 20;
	}
	console.log(howOldWillBeActorAfterTwentyYears(actor)); 

	// Исправлена ошибка в поле age: '14' на age: 14, тк поле age не являлось числом, а было строкой. Можно было бы изменить поле age на string в определении типа, но тогда функция howOldWillBeActorAfterTwentyYears теряет смысл.