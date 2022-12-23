import Factory from "./patterns/Factory";
import Prototype from "./patterns/Prototype";
import Singleton from "./patterns/Singleton";

export default class Patterns {
	public singleton() {
		console.log("\r\n>> Singleton pattern");
		const firstSingleton = new Singleton();
		firstSingleton.addData("Name", "Matheus Lopes Marques");
		firstSingleton.addData("Age", "22");
		firstSingleton.showData();

		const secondSingleton = new Singleton();
		secondSingleton.showData();
	}

	public prototype() {
		console.log("\r\n>> Prototype pattern");
		const prototype = new Prototype();
		prototype.createPerson();
		prototype.createBabyPerson();
	}

	public factory() {
		console.log("\r\n>> Factory pattern");
		const factory = new Factory("Windows");
		const button1 = factory.createItem();
		const button2 = factory.createItem();
		const factoryItems = factory.getItems();
		factoryItems.forEach((item) => console.log(item));
	}
}
