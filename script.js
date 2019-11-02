
/*  задание 1
let a=1, b=1, c, d;
c=++a;
alert (c);

d=b++;
alert(d);

c=(2+ ++a);
alert (c);

d=(2+ b++);
alert(d);

alert(a);
alert(b);
*/

/*  задание 2
let a=2;
let x=1+(a*=2);
alert(x); //5
*/

/*  задание 3 
var a = 6, b = 10;

if (a >= 0 && b>=0) 
{
 console.log(a-b);	
} 
if (a <= 0 && b<=0) 
{
 console.log(a*b);	
}
if ((a <= 0 && b>=0) ||  (a >= 0 && b<=0))
{
 console.log(a+b);	
}
*/

/* задание 4
var a = 2;
var b = 3;

	function operationAddition(a, b) {
		return a + b;
	}

	function operationSubtraction(a, b) {
    	return a - b;
	}

	function operationDivision (a, b) {
    	return a / b;
	}

	function operationMultiplication (a, b) {
    	return a * b;
	}
*/

/* задание 5*/
/*function taskNumberSix() {
var a = +prompt('Введите значение переменной "a"'),
	b = +prompt('Введите значение переменной "b"'),
	operation = prompt('Введите необходимую операцию "+", "-", "*", "/"'),
result;

function operationAddition (a, b) {
	return a+b;
}

function operationSubtraction(a, b) {
	return a-b;
}

function operationMultiplication (a, b) {
	return a*b;
}

function operationDivision (a, b) {
	return a/b;
}

function mathOperation(a, b, operation) {
	switch (operation) {
		case("+"):
	return operationAddition (a, b);
		case("-"):
	return operationSubtraction (a, b);
		case("*"):
	return operationMultiplication (a, b);
		case("/"):
	return operationDivision (a, b);
		default:
	return "Неправильно введена арифметическая операция!";
	}
}

alert ('a = ' + a +
		'\nb = ' + b +
		'\nоперация: ' + operation +
		'\nрезультат: ' + mathOperation(a, b, operation));
}
taskNumberSix();			
*/

/* задание 6*/
/*function taskNumberEight() {
	var val = +prompt('Введите значение числа'),
		pow = +prompt('Введите значение степени');
		function power(val, pow) {
			if (pow == 0)
		return 1;
			else
		return val * power(val, pow-1);
		}
		alert ('Число ' + val + ' в степени ' + pow + ' = ' + power(val, pow));
}
taskNumberEight();*/


/*задание 7*/
/*Написать функцию для проверки пароля. На вход должен подаваться аргумент path
– строка с паролем. Требования к паролю:*/


/*var patch = prompt('Введите пароль');

var a=false,b=false,c=false;

function len(a){
	if (patch.length>=3 && patch.length<= 12){ 
	a=true
	}
return a;	
}

function spez (b){
	if ((patch.indexOf("&") != -1) || (patch.indexOf("$") != -1) || (patch.indexOf("%") != -1) || (patch.indexOf("*") != -1)) {
		b=true;	
	}
return b;
}	

function firstlast (c){
	if ((patch.indexOf('q') == 0) || (patch[patch.length-1]=='z' )) {
		c=true;
	}
return c;	
}

function pass(){
if ( (len(a)==true) && (spez(b)==true) && (firstlast(c)==true)){
		alert("Корректный пароль");	
	} else {
		alert("Некорректный пароль");	
	}	
}

pass();*/
	
/*var patch = prompt('Введите пароль');
var a=false,b=false,c=false;
	if (patch.length>=3 && patch.length<= 12) {
		a=true;
	}
	if ((patch.indexOf("&") != -1) || (patch.indexOf("$") != -1) || (patch.indexOf("%") != -1) || (patch.indexOf("*") != -1)) {
		 
		b=true;
	}
	if ((patch.indexOf('q') == 0) || (patch[patch.length-1]=='z' )) {
		c=true;
	} 	
	if ( (a==true) && (b==true) && (c==true)){
		alert("Корректный пароль");	
	} else {
		alert("Некорректный пароль");	
	}*/
	
/* Практическое задание 1*/
 /* задание 8 
 Задать температуру в градусах по Цельсию. Вывести в alertсоответствующую температуру в градусах по Фаренгейту.
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, 
где Tf – температура по Фаренгейту, Tc – температура по Цельсию
 */
 
/* var tc = + prompt ( 'Введите температуру в градусах по Цельсию: ' ),
    tf = 1.8*tc + 32;
alert ( 'Температура по Фаренгейту: ' + tf + ' градусов' );*/

/* задание 9 
Объявить две переменные: admin и name. Записать в name строку
"Василий". Скопировать значение из name в admin. Вывести в консоль
переменную admin (должно вывести "Василий").
 */
 
/* var admin, name;
name = 'Василий';
admin = name;
console.log ( admin );*/

/* задание 10 
Вывести в консоль значения выражений и объяснить почему получились
такие значения используя комментарии к каждому выражению:
 */
/*
console.log ("Сначала целочисленное сложение, затем конкатенация строк", 10+10+"10");

console.log ("Конкатенация строк", 10+"10"+10);

console.log ("Целочисленное сложение ", 10+10+ +"10");

console.log (" Минус бесконечность ", 10/ -"");

console.log (" Не числовое значение ", 10/ +"2,5");*/

/* задание 11 
 Напишите, являются ли данные имена переменных корректными:
 */
/*let mode = "normal"; 
console.log (" ", mode);

let my_valu3 = 102
console.log (" ", my_valu3);

/*let 3my_value3 = "102";          // некорректно
console.log (" ", 3my_value3);*/
/*
let __hello__ = "world";
console.log (" ", __hello__);

let $$$ = "money";
console.log (" ", $$$);*/

/*let !0_world = true;               // некорректно
console.log (" ", 0_world);*/

/*задание 12*/
/*
let a = [
        [{name: 'Mary', age: 23}, {name: 'Mike',age: 45}, {name: 'Nick',age: 11}],
        [{name: 'Adam',age: 56}, {name: 'Sara',age: 21}, {name: 'Don',age: 22}],
        [{name: 'Karl',age: 34}, {name: 'Marta',age: 76}, {name: 'John',age: 19}]
    ];


    let b = [];
//forEach перебор массива
    a.forEach(function (xl1, yl1) {
        b[yl1] = [];
        xl1.forEach(function (xl2, yl2) {
            let obj = {};
			//копирование объектов
            Object.assign(obj, xl2);
			//добавляем в массив
            b[yl1].push(obj);
        });
    });

    //проверка, что начальный массив не меняется
    a[0][0].name = "test";
    a[0][0].age = 100;

    //вывод результатов
    console.log('Массив А (первая запись изменена ):')
    console.log(a);
    console.log('Массив B:')
    console.log(b);*/


/*задание 13*/
/*
function countBasketPrice(basket) {
    let totalPrice = 0;
    basket.forEach(function (item) {
        totalPrice += item.count * item.price;
    });
    return totalPrice;
}

function shop() {
    let NewProduct = {
        name: 'Наименование',
        price: 0,
        count: 0
    };
    let basket = [];

    for (let i = 1; i < 10; i++) {
        let obj = {};
        Object.assign(obj, NewProduct);
        obj.name = 'name' + i;
        obj.price = parseInt(Math.random() * 10000) / 100;
        obj.count = parseInt(Math.random() * 10) + 1;
        basket.push(obj);
    }

    console.log('Корзина:');
    console.log(basket);
    console.log('Общая цена: ' + countBasketPrice(basket));
}
 shop();*/
 
/*задание 14*/

/*function digit() {
    for (let i = 0; i < 10; console.log(i++));
}
digit();*/

/*задание 15*/
/*function star() {
    let line = '';
    for (let i = 0; i < 20; i++) {
        line += '*';
        console.log(line);
    }
}
 star();*/

