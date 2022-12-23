export default class Factory {
	private os: string;
	private items: any[] = [];
	constructor(os: string) {
		console.log("\r\n>> Factory pattern");
		this.os = os;
	}

	public createItem() {
		switch (this.os) {
			case "iOS":
				let iOSButton = new IOSButton();
				this.items.push(iOSButton);
				return iOSButton;
			case "Linux":
				let linuxButton = new LinuxButton();
				this.items.push(linuxButton);
				return linuxButton;
			case "Windows":
				let windowsButton = new WindowsButton();
				this.items.push(windowsButton);
				return windowsButton;
			default:
				let defaultButton = new DefaultButton();
				this.items.push(defaultButton);
				return defaultButton;
		}
	}

	public getItems() {
		return this.items;
	}
}

class DefaultButton {
	protected button: IDefaultButton = { name: "button", os: "" };
	public getButton() {
		return this.button;
	}
}

interface IDefaultButton {
	name: string;
	os: string;
}

class IOSButton extends DefaultButton {
	constructor() {
		super();
		this.button.os = "iOS";
	}
}

class LinuxButton extends DefaultButton {
	constructor() {
		super();
		this.button.os = "Linux";
	}
}

class WindowsButton extends DefaultButton {
	constructor() {
		super();
		this.button.os = "Windows";
	}
}
