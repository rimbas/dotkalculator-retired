
/**
 * Pseudo Random Number generator library
 */

PRDGen = {}

PRDGen.CDefinitions = {
	0.05: 0.00380,
	0.10: 0.01475,
	0.15: 0.03221,
	0.17: 0.04093,
	0.20: 0.05570,
	0.25: 0.08475,
	0.30: 0.11895,
	0.35: 0.14628,
	0.40: 0.18128,
	0.45: 0.21867,
	0.50: 0.25701,
	0.55: 0.29509,
	0.60: 0.33324,
	0.65: 0.38109,
	0.70: 0.42448,
	0.75: 0.46134,
	0.80: 0.50276
}

PRDGen.premadeGenerators = {};
for (let c in PRDGen.CDefinitions)
	PRDGen.premadeGenerators[c] = function*(){
			let n = 1;
			for (;;)
				if (Math.random() < n * PRDGen.CDefinitions[c]) {
					n = 1;
					yield true;
				} else {
					n++;
					yield false;
				}
		};


// what is this unholy creation
PRDGen.newGenerator = function createNewPRDGenerator(chance) {
	let prd = PRDGen.premadeGenerators[chance]();
	return function PRDGenerator(){ return prd.next().value }
}






