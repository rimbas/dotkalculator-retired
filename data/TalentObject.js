
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
	 * Method to save object state into a serializable format
	 *
	 * @returns
	 *
	 * @memberOf StatObject
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

		el.classList.add("item-tooltip")
		el.textContent = "talent display"


		this._HTML.DisplayElement.appendChild(el)
		this.updateTooltip()
		return el
	}

}
