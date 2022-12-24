// AbstractFactory 1
export class AbstractFactoryShapes implements IAbstractFactory {
	constructor() {
		console.log("\r\n>> AbstractFactory pattern Shapes");
	}

	public createProductA(): AbstractProductA1 {
		return new ConcreteSquare("square");
	}
	public createProductB(): AbstractProductB1 {
		return new ConcreteCircle("circle");
	}
}

class ConcreteSquare implements AbstractProductA1 {
	public name: string = "";
	public width: number = 10;
	public height: number = 10;
	constructor(name: string) {
		this.name = name;
	}

	public showInfos() {
		console.log(`[A] Square: ${this.width}x${this.height}`);
	}
}

class ConcreteCircle implements AbstractProductB1 {
	public name: string = "";
	public radius: number = 3.1415;
	constructor(name: string) {
		this.name = name;
	}
	public showInfos() {
		console.log(`[A] Circle: ${this.radius} radius`);
	}
}

interface IAbstractFactory {
	createProductA(): AbstractProductA1;
	createProductB(): AbstractProductB1;
}

interface AbstractProductA1 {
	name: string;
	width: number;
	height: number;
	showInfos(): any;
}

interface AbstractProductB1 {
	name: string;
	radius: number;
	showInfos(): any;
}

// AbstractFactory 2
export class AbstractFactoryDocuments implements IAbstractFactory2 {
	constructor() {
		console.log("\r\n>> AbstractFactory pattern Documents");
	}

	public createProductA(): AbstractProductA2 {
		return new ConcreteRG("RG");
	}
	public createProductB(): AbstractProductB2 {
		return new ConcreteCPF("CPF");
	}
}

class ConcreteRG implements AbstractProductA2 {
	public name: string = "";
	public digits: string = "1.234.567";
	constructor(name: string) {
		this.name = name;
	}

	public showInfos() {
		console.log(`[B] RG: ${this.digits}`);
	}
}

class ConcreteCPF implements AbstractProductB2 {
	public name: string = "";
	public digits: string = "123.456.789-10";
	constructor(name: string) {
		this.name = name;
	}
	public showInfos() {
		console.log(`[B] CPF: ${this.digits}`);
	}
}

interface IAbstractFactory2 {
	createProductA(): AbstractProductA2;
	createProductB(): AbstractProductB2;
}

interface AbstractProductA2 {
	name: string;
	digits: string;
	showInfos(): any;
}

interface AbstractProductB2 {
	name: string;
	digits: string;
	showInfos(): any;
}
