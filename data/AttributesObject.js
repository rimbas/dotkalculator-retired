
class AttributesObject extends StatObject {

	constructor(objId, properties) {
		super("Heroes", objId, properties)
	}

	updateHero() {
		this._heroRef.LevelChange()
	}

	get LevelAdjusted() { return this.Level - 1 }

	get StrengthFloat() {
		return this.StrengthBase + this.LevelAdjusted * this.StrengthGain
	}
	get Strength() { return Math.round(this.StrengthFloat) }

	get AgilityFloat() {
		return this.AgilityBase + this.LevelAdjusted * this.AgilityGain
	}
	get Agility() { return Math.round(this.AgilityFloat) }

	get IntelligenceFloat() {
		return this.IntelligenceBase + this.LevelAdjusted * this.IntelligenceGain
	}
	get Intelligence() { return Math.round(this.IntelligenceFloat) }

	get Health() {
		return this.Strength * this.HealthPerStrength
	}

	get HealthRegeneration() {
		return this.HealthRegenerationBase + this.Strength * this.HealthRegenerationPerStrength
	}

	get Armor() {
		return this.Agility * this.ArmorPerAgility
	}

	get Mana() {
		return this.Intelligence * this.ManaPerIntelligence
	}

	get ManaRegeneration() {
		return this.Intelligence * this.ManaRegenerationPerIntelligence
	}

	get MagicAmplification() {
		return this.Intelligence * this.MagicAmplificationPerIntelligence
	}

}
