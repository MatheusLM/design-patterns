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
}
