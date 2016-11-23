
class AbilityObject extends StatObject {

	constructor(objId, properties) {
		super("Abilities", objId, properties)
	}

	updateHero() {
		this._heroRef.AbilityChange()
	}

}

