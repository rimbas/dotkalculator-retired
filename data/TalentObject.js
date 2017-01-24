
class TalentObject extends AbilityObject {

	constructor(objId, properties = {}) {
		super(objId, properties)

		for (let branch of ["Left", "Right"]) {
			for (let i = 0; i < this.Restrictions.length; i++) {
				Object.defineProperty(this, branch + (i+1), {
					get: function(){ return this.Choices[i] == branch }
				})
			}
		}

		if (properties.choices && Array.isArray(properties.choices))
			this.Choices = properties.Choices
	}

	/**
	 * Method to save object state into a serialized format
	 *
	 * @returns
	 *
	 * @memberof StatObject
	 */
	serialize() {
		let props = {version: this.Version}
		props.Id = this.ID
		props.choices = this.Choices
		return props
	}

	createDisplay() {
		if (this._HTML.DisplayElement !== undefined)
			return this._HTML.DisplayElement
		let div = document.createElement("div");
		this._HTML.DisplayElement = div;
		div.classList.add("item-display", "ability");
		div.style.backgroundImage = "url(images/abilities/talent.png)";

		this._HTML.DisplayElement.appendChild(this.createTooltip())
		this.updateDisplay()

		return div;
	}

	createTooltip() {
		let el = document.createElement("div")
		el.classList.add("talent-tooltip")

		let table = el.appendChild(document.createElement("table")),
			tbody = table.createTBody();
		table.classList.add("talent-table")

		let levelList = {}
		this._HTML.LevelList = levelList;

		for (let i = this.Restrictions.length - 1; i >= 0; i--) {
			let talentLevel = this.Restrictions[i]
			let row = tbody.insertRow();
			let cellLeft = row.insertCell(),
				cellLevel = row.insertCell(),
				cellRight = row.insertCell();
			cellLeft.textContent = "Left " + (i + 1)
			cellRight.textContent = "Right " + (i + 1)
			let levelCircle = cellLevel.appendChild(document.createElement("div"))
			levelCircle.textContent = "" + talentLevel
			levelCircle.classList.add("talent-level")
			levelList[talentLevel] = levelCircle;
		}

		return el
	}

	updateDisplay() {
		this.updateTooltip()
	}

	updateTooltip() {
		for (let level in this._HTML.LevelList) {
			let levelCircle = this._HTML.LevelList[level]
			if (this.$hero.Base.Level < level) {
				levelCircle.classList.add("disabled")
			}
			else {
				levelCircle.classList.remove("disabled")
			}
		}
	}

}
