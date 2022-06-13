function parseCount(value) {
	let getValue = Number.parseInt(value);
	if (isNaN(getValue)) {
		throw new Error("Невалидное значение");
	}
	return getValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch(err) {
		return err;
	}
}

class Triangle {
	constructor(a,b,c) {
		
		if (a+b<c || a+c<b || b+c<a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	getPerimeter() {
		return this.a+this.b+this.c;
	}

	getArea() {
		let p = 1/2*this.getPerimeter();
		return Number(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3)); 
	}
}

function getTriangle(a,b,c) {
	try {
		return new Triangle(a,b,c);
		
	} catch(err) {
		return {getArea() {return "Ошибка! Треугольник не существует"}, getPerimeter() {return "Ошибка! Треугольник не существует"}};
		
	}
	
}