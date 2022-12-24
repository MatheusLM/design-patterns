import {
	AbstractFactoryDocuments,
	AbstractFactoryShapes,
} from "./patterns/AbstractFactory";
import Builder from "./patterns/Builder";
import Factory from "./patterns/Factory";
import Prototype from "./patterns/Prototype";
import Singleton from "./patterns/Singleton";

export default class Patterns {
	public singleton() {
		const firstSingleton = new Singleton();
		firstSingleton.addData("Name", "Matheus Lopes Marques");
		firstSingleton.addData("Age", "22");
		firstSingleton.showData();

		const secondSingleton = new Singleton();
		secondSingleton.showData();
	}

	public prototype() {
		const prototype = new Prototype();
		prototype.createPerson();
		prototype.createBabyPerson();
	}

	public factory() {
		const factory = new Factory("Windows");
		const button1 = factory.createItem();
		const button2 = factory.createItem();
		const factoryItems = factory.getItems();
		factoryItems.forEach((item) => console.log(item));
	}

	public builder() {
		const builder = new Builder();
		builder.show().addFloor().addWalls().addRoof().show();
	}

	public abstractFactory() {
		const abstractFactoryShapes = new AbstractFactoryShapes();
		const abstractShape = abstractFactoryShapes.createProductA();
		abstractShape.showInfos();

		const abstractFactoryDocuments = new AbstractFactoryDocuments();
		const abstractDocument = abstractFactoryDocuments.createProductA();
		abstractDocument.showInfos();
	}
}
