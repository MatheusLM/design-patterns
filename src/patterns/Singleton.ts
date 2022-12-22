export default class Singleton {
	public dataBase: Database = Database.getInstace();

	public addData(name: string, value: any) {
		this.dataBase.addData(name, value);
	}

	public showData() {
		this.dataBase.showData();
	}
}

export class Database {
	private static instance: Database;
	private data: any = {};
	private name: string;
	private constructor(name: string) {
		this.name = name;
	}

	public static getInstace() {
		if (!this.instance) this.instance = new Database(String(Math.random()));
		return this.instance;
	}

	public getConnection() {
		console.log("You're connected to the database:", this.name);
	}

	public addData(name: string, value: any) {
		this.data[name] = value;
	}

	public showData() {
		console.log(this.data);
	}
}
