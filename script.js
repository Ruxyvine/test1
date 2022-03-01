//1) Задача вывести все элементы массива в консоль ['Hello', 'World', 'My', 'name', 'is', 'Danil']
let arr = ['Hello', 'World', 'My', 'name', 'is', 'Ruslan']
for ( let itemArray of arr ) {
	console.log(itemArray)
// }
let allNamePersonal = [
 'Misha',
 'Andrey',
 'Sasha',
 'Oleg',
 'Danil',
 'Dima',
 'Artur',
 'Ivan',
 'Slava',
 'Alisher',
 'Amiran',
]
// let name = prompt('Введите имя')
 for (let i=0; i < allNamePersonal.length; i++) {
	 if (allNamePersonal[i] == 'Ivan' || allNamePersonal[i] =='Oleg') {
	 console.log(` ${allNamePersonal[i]} ты не приглашен `)}
	 else {
		 console.log(` ${allNamePersonal[i]} добро пожаловать `)
	 }
 }

	const objPersonal = [
	{
		name: 'Misha',
		age: 24,
		position: 'Frontend Developer',
		budget: '2300',
	},
	{
		name: 'Andrey',
		age: 27,
		position: 'Data Analizi',
		budget: '2000',
	},
	{
		name: 'Sasha',
		age: 32,
	position: 'QA',
		budget: '3200',
	},
	{
		name: 'Oleg',
		age: 21,
		position: 'Frontend Developer',
		budget: '800',
	},
	{
		name: 'Danil',
		age: 26,
		position: 'Frontend Developer',
		budget: '2000',
	},
	{
		name: 'Dima',
		age: 29,
		position: 'Backend Developer',
		budget: '1700',
	},
	{
		name: 'Artur',
		age: 24,
		position: 'Testing',
		budget: '500',
	},
	{
		name: 'Ivan',
		age: 25,
		position: 'C++ Developer',
		budget: '1300',
	},
	{
		name: 'Slava',
		age: 21,
		position: 'Qa Testing',
		budget: '1100',
	},
	{
		name: 'Alisher',
		age: 22,
		position: 'Web Designer',
		budget: '1000',
	},
	{
		name: 'Amiran',
		age: 26,
		position: 'Graph Designer',
		budget: '900',
	},
	]
	const objPersonal2 = []

	for ( let i of objPersonal ){
		//  console.log(i.name)
		
			if ( i.budget >= 1000){
				objPersonal2.push(i)
				}
	}
	console.log(objPersonal2)
	 

let arr=[]
for ( let i = 1; i <= 100; i++){
	if ( i%2 == 0 ){
		arr.push(i)
	}
}
console.log(arr)


const products = [
 {
   title: 'Куртка Осеняя',
   price: '2300$',
 },
 {
   title: 'Шорты Puma',
   price: '300$',
 },
 {
   title: 'Кросовки Nike',
   price: '1200$',
 },
 {
   title: 'Очки Prada',
   price: '700$',
 },
 {
   title: 'Кофта',
   price: '450$',
 },
]
const images = ['1', '2', '3', '4','5']

for (let i in products){
	products[i].img = images[i]
}

console.log(products)


let arr = [10, 20, 30, 50, 235, 3000]
for (let i of arr){
	s = i.toString()
	if (s[0] == '1' || s[0] == '2' || s[0] == '5' ){
		console.log(i)
	} 
}

let arr = [19, 5, 9, 15, 10, 4]
let arr1 = []
for (let i = 0; i < arr.length; i++){
	if ( arr[i] >= 5 && arr[i] <= 20){
		console.log(arr[i])
	}
}