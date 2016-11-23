
class BuffObject extends StatObject {

	constructor(objId, properties) {
		super("Buffs", objId, properties)
	}

	updateHero() {
		this._heroRef.BuffChange()
	}

}
