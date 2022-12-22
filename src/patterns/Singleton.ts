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
	private static _dbObject: Database;
	private data: any = {};
	private _name: string;
	private constructor(name: string) {
		this._name = name;
	}

	public static getInstace() {
		if (!this._dbObject) this._dbObject = new Database(String(Math.random()));
		return this._dbObject;
	}

	public getConnection() {
		console.log("You're connected to the database:", this._name);
	}

	public addData(name: string, value: any) {
		this.data[name] = value;
	}

	public showData() {
		console.log(this.data);
	}
}
