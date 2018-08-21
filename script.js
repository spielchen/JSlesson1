var budget = prompt("Ваш бюджет на месяц?");
var nameShop = prompt("Название вашего магазина?");

var mainList = {
		budget,
		nameShop, 
		shopGoods: [],
		employers:{},
		openShop: true
};

console.log('Наш бюджет: '+mainList['budget']);
console.log('Название магазина: '+mainList['nameShop']);

function addNameGoods() {

		for (var i = 0; i < 3; i++) {
			mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
			console.log('Что мы продаем: '+mainList.shopGoods[i]);
	}

};
 
let shopGoods = addNameGoods();

console.log('Бюджет за 1 день: '+Math.floor(budget/30));