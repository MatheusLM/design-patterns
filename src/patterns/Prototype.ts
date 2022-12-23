export default class Prototype {
	private personDefault = {
		defaultMethod() {
			return "has default method";
		},
	};

	private person: any = {};
	private babyPerson: any = {};

	constructor() {
		console.log("\r\n>> Prototype pattern");
	}

	public createPerson() {
		this.person = Object.create(this.personDefault, {
			name: { value: "John" },
		});
		// console.log(Object.getPrototypeOf(this.person) == this.personDefault); // == TRUE
		console.log(
			`${this.person.name}, ${this.person.defaultMethod()}, and is a baby? ${
				this.person.baby ? "Yes" : "No"
			}`
		);
	}

	public createBabyPerson() {
		this.babyPerson = Object.create(this.person, { baby: { value: true } });
		// console.log(Object.getPrototypeOf(this.babyPerson) == this.personDefault); // == FALSE
		// console.log(Object.getPrototypeOf(this.babyPerson) == this.person); // == TRUE
		console.log(
			`${
				this.babyPerson.name
			}, ${this.babyPerson.defaultMethod()}, and is a baby? ${
				this.babyPerson.baby ? "Yes" : "No"
			}`
		);
	}
}
