export default class Builder {
	private floor: boolean = false;
	private walls: boolean = false;
	private roof: boolean = false;
	constructor() {
		console.log("\r\n>> Builder pattern");
	}

	public addFloor() {
		this.floor = true;
		return this;
	}

	public addWalls() {
		this.walls = true;
		return this;
	}

	public addRoof() {
		this.roof = true;
		return this;
	}

	public show() {
		console.log(this);
		return this;
	}
}
