/* 
	Item instance class
*/

function ItemInstance(itemId) {
	var item = DotaData.getItemProperties(itemId, charges);
	for (var prop in item) {
		var value = item[prop];
		if (value instanceof Function) {
			Object.defineProperty(this, prop, {
				get: value,
				enumerable: true
			});
		}
		else {
			this[prop] = value;	
		}
	}
}


