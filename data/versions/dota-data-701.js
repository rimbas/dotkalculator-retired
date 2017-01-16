
// Minor version

"use strict"; // -6 treants edition
DotaData.addVersion({

	"Meta": {
		"Version": "7.01",
		"Base": "7.00",
	},

	"Heroes": {
		"centaur": {
			"AgilityGain": 1.6
		},
		"enchantress": {
			"IntelligenceBase": 19,
		},
		"invoker": {
			"StrengthGain": 1.9,
		},
		"luna": {
			"ArmorBase": 0,
		},
		"lycan": {
			"AgilityGain": 1.5,
		},
		"ogre_magi": {
			"MovementSpeed": 290,
		},
		"slark": {
			"StrengthBase": 20,
			"StrengthGain": 1.6,
		},
		"treant": {
			"MovementSpeed": 295,
		},
		"tusk": {
			"TurnRate": 0.7,
		},
		"visage": {
			"DamageMax": 31,
			"DamageMin": 21,
		}
	},

	"Abilities": {
		"abyssal_underlord_pit_of_malice": {
			"Cooldown": function(){ return 36 - this.Level * 4},
		},
		"invoker_quas": {
			"HealthRegeneration": function() { return this.Charges * (this.Level * 2 - 1) },
		},
		"omniknight_purification": {
			"ManaCost": function(){ return 70 + this.Level * 15 },
		},
		"omniknight_guardian_angel": {
			"Cooldown": 160,
		},
		"lycan_howl": {
			"Cooldown": function(){ return 60 - this.Level * 5 },
			"ManaCost": 30,
		},
		"puck_dream_coil": {
			"Cooldown": function(){ return 75 - this.Level * 5 },
		},
		"weaver_geminate_attack": {
			"Cooldown": [7, 6, 5, 3],
		},
		"windrunner_windrun": {
			"Cooldown": 13,
		},
	}
})