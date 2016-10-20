
// Minor version

"use strict"; // Even bigger nerfbat edition
{
DotaData.addVersion({

	"Meta": {
		"Version": "6.88f",
		"Base": "6.88e",
	},

	"Heroes": {
		"drow_ranger": {
			"StrengthGain": 1.6
		},
		"morphling": {
			"DamageMax": 18,
			"DamageMin": 9,
		},
		"faceless_void": {
			"Armor": 0,
		},
		"obsidian_destroyer": {
			"DamageMax": 29,
			"DamageMin": 14,
		},
		"arc_warden": {
			"MovementSpeed": 285,
		},
	},

	"Abilities": {
		"kunkka_torrent": {
			"Cooldown": function(){ return 18 + this.Level * 2 },
		},
		"oracle_purifying_flames": {
			"ManaCost": function(){ return 75 + this.Level * 5 },
		},
		"shadow_demon_shadow_poison": {
			"ManaCost": 55,
		},
		"juggernaut_healing_ward": {
			"ManaCost": 140,
		},
		"omniknight_purification": {
			"Cooldown": 9,
		},
		"omniknight_repel": {
			"Cooldown": function(){ return 22 - this.Level * 2 },
		},
	}
})
}