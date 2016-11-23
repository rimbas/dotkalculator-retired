
class ItemObject extends StatObject {

	constructor(objId, properties) {
		super("Items", objId, properties)
	}

	updateHero() {
		this._heroRef.ItemChange()
	}

}
