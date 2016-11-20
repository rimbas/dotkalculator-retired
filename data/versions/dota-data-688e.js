
// Major version

"use strict"; // Collective nerfbat edition
{
DotaData.addVersion({

	//
	//	Meta definition
	//

	"Meta": {
		"Version": "6.88e"
	},

	//
	//	Hero definition
	//

	"Heroes": {
		"_base": // Special base entry
		{
			"Name": "NO-DISPLAY-NAME",
			"Class": "Hero",
			"Ability1": "empty",
			"Ability2": "empty",
			"Ability3": "empty",
			"Ability4": "empty",
			"Ability5": "attribute_bonus",
			"AbilityLayout": 4,
			"AttackPoint": 0.75,
			"AttackType": "Ranged",
			"AttackRate": 1.7,
			"DamageMax": 1,
			"DamageMin": 1,
			"DamageType": "Hero",
			"Range": 600,
			"StrengthBase": 0,
			"StrengthGain": 0,
			"AgilityGain": 0,
			"AgilityBase": 0,
			"IntelligenceBase": 0,
			"IntelligenceGain": 0,
			"Type": "Strength",
			"Enabled": -1,
			"HasInventory": true,
			"Level": 1,
			"Armor": -1.0,
			"ArmorType": "Hero",
			"ArmorPerAgility": 0.14,
			"MagicalResistance": 0.25,
			"MagicalAmpPerIntelligence": 0.0625,
			"MovementSpeed": 300,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Health": 200,
			"HealthRegeneration": 0.25,
			"HealthPerStrength": 20,
			"Mana": 50,
			"ManaRegeneration": 0.01,
			"ManaPerIntelligence": 12,
			"VisionDaytime": 1800,
			"VisionNighttime": 800,
			"Team": "Radiant"
		},
		"abaddon": {
			"Name": "Abaddon",
			"LoreName": "Lord of Avernus",
			"Ability1": "abaddon_death_coil",
			"Ability2": "abaddon_aphotic_shield",
			"Ability3": "abaddon_frostmourne",
			"Ability4": "abaddon_borrowed_time",
			"Ability5": "attribute_bonus",
			"Armor": -1.0,
			"AttackPoint": 0.56,
			"AttackType": "Melee",
			"DamageMax": 42,
			"DamageMin": 32,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 23,
			"StrengthGain": 2.7,
			"AgilityBase": 17,
			"AgilityGain": 1.5,
			"IntelligenceBase": 21,
			"IntelligenceGain": 2.0,
			"Type": "Strength",
			"Enabled": 1,
			"MovementSpeed": 310,
			"TurnRate": 0.5,
			"Team": "Dire"
		},
		"alchemist": {
			"Name": "Alchemist",
			"LoreName": "Razzil Darkbrew",
			"Ability1": "alchemist_acid_spray",
			"Ability2": "alchemist_unstable_concoction",
			"Ability3": "alchemist_goblins_greed",
			"Ability4": "alchemist_chemical_rage",
			"Ability5": "attribute_bonus",
			//"Ability6": "alchemist_unstable_concoction_throw",
			"Armor": 0,
			"AttackPoint": 0.35,
			"AttackType": "Melee",
			"DamageMax": 33,
			"DamageMin": 24,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.2,
			"AgilityBase": 11,
			"IntelligenceBase": 25,
			"StrengthBase": 25,
			"IntelligenceGain": 1.8,
			"Type": "Strength",
			"StrengthGain": 1.8,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.6,
			"Team": "Radiant"
		},
		"ancient_apparition": {
			"Name": "Ancient Apparition",
			"LoreName": "Kaldr",
			"Aliases": ["aa"],
			"Ability1": "ancient_apparition_cold_feet",
			"Ability2": "ancient_apparition_ice_vortex",
			"Ability3": "ancient_apparition_chilling_touch",
			"Ability4": "ancient_apparition_ice_blast",
			//"Ability5": "ancient_apparition_ice_blast_release",
			//"Ability6": "attribute_bonus",
			"Armor": -1,
			"AttackPoint": 0.45,
			"AttackType": "Ranged",
			"DamageMax": 29,
			"DamageMin": 19,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 2.2,
			"AgilityBase": 20,
			"IntelligenceBase": 25,
			"StrengthBase": 18,
			"IntelligenceGain": 2.6,
			"Type": "Intelligence",
			"StrengthGain": 1.4,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.6,
			"ProjectileSpeed": 1250,
			"Team": "Dire"
		},
		"antimage": {
			"Name": "Anti-Mage",
			"Aliases": ["Magina", "Antimage"],
			"Ability1": "antimage_mana_break",
			"Ability2": "antimage_blink",
			"Ability3": "antimage_spell_shield",
			"Ability4": "antimage_mana_void",
			"Armor": -1,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 31,
			"DamageMin": 27,
			"Range": 150,
			"AttackRate": 1.45,
			"AgilityGain": 2.8,
			"AgilityBase": 22,
			"IntelligenceBase": 15,
			"StrengthBase": 22,
			"IntelligenceGain": 1.8,
			"Type": "Agility",
			"StrengthGain": 1.2,
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 0.5,
			"ProjectileSpeed": 0,
			"Team": "Radiant"
		},
		"axe": {
			"Name": "Axe",
			"LoreName": "Mogul Khan",
			"Ability1": "axe_berserkers_call",
			"Ability2": "axe_battle_hunger",
			"Ability3": "axe_counter_helix",
			"Ability4": "axe_culling_blade",
			"Armor": -1,
			"AttackPoint": 0.5,
			"AttackType": "Melee",
			"DamageMax": 28,
			"DamageMin": 24,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.2,
			"AgilityBase": 20,
			"IntelligenceBase": 18,
			"StrengthBase": 25,
			"IntelligenceGain": 1.6,
			"Type": "Strength",
			"StrengthGain": 2.5,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.6,
			"HealthRegeneration": 3.0,
			"Team": "Dire"
		},
		"bane": {
			"Name": "Bane",
			"LoreName": "Atropos",
			"Ability1": "bane_enfeeble",
			"Ability2": "bane_brain_sap",
			"Ability3": "bane_nightmare",
			"Ability4": "bane_fiends_grip",
			"Ability5": "attribute_bonus",
			//"Ability6": "bane_nightmare_end",
			"Armor": 1,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 39,
			"DamageMin": 33,
			"Range": 400,
			"AttackRate": 1.7,
			"AgilityGain": 2.1,
			"AgilityBase": 22,
			"IntelligenceBase": 22,
			"StrengthBase": 22,
			"IntelligenceGain": 2.1,
			"Type": "Intelligence",
			"StrengthGain": 2.1,
			"Enabled": 1,
			"MovementSpeed": 310,
			"TurnRate": 0.6,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"batrider": {
			"Name": "Batrider",
			"Ability1": "batrider_sticky_napalm",
			"Ability2": "batrider_flamebreak",
			"Ability3": "batrider_firefly",
			"Ability4": "batrider_flaming_lasso",
			"Armor": 0,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 18,
			"DamageMin": 14,
			"Range": 375,
			"AttackRate": 1.7,
			"StrengthBase": 23,
			"StrengthGain": 2.4,
			"AgilityGain": 1.5,
			"AgilityBase": 15,
			"IntelligenceBase": 24,
			"IntelligenceGain": 2.5,
			"Type": "Intelligence",
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 1.0,
			"ProjectileSpeed": 900,
			"HealthRegeneration": 2.0,
			"Team": "Dire",
			"VisionDaytime": 1200
		},
		"beastmaster": {
			"Name": "Beastmaster",
			"LoreName": "Karroch",
			"Aliases": ["bm"],
			"Ability1": "beastmaster_wild_axes",
			"Ability2": "beastmaster_call_of_the_wild",
			"Ability3": "beastmaster_call_of_the_wild_boar",
			"Ability4": "beastmaster_inner_beast",
			"Ability5": "beastmaster_primal_roar",
			"Ability6": "attribute_bonus",
			"AbilityLayout": 5,
			"Armor": 2,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 45,
			"DamageMin": 41,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.6,
			"AgilityBase": 18,
			"IntelligenceBase": 16,
			"StrengthBase": 23,
			"IntelligenceGain": 1.9,
			"Type": "Strength",
			"StrengthGain": 2.2,
			"Enabled": 1,
			"MovementSpeed": 310,
			"TurnRate": 0.4,
			"ProjectileSpeed": 0,
			"Team": "Radiant"
		},
		"bloodseeker": {
			"Name": "Bloodseeker",
			"LoreName": "Strygwyr",
			"Aliases": ["bs"],
			"Ability1": "bloodseeker_bloodrage",
			"Ability2": "bloodseeker_blood_bath",
			"Ability3": "bloodseeker_thirst",
			"Ability4": "bloodseeker_rupture",
			"Armor": 0,
			"AttackPoint": 0.43,
			"AttackType": "Melee",
			"DamageMax": 35,
			"DamageMin": 29,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 3.0,
			"AgilityBase": 24,
			"IntelligenceBase": 18,
			"StrengthBase": 23,
			"IntelligenceGain": 1.7,
			"Type": "Agility",
			"StrengthGain": 2.0,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.5,
			"Team": "Dire"
		},
		"bounty_hunter": {
			"Name": "Bounty Hunter",
			"LoreName": "Gondar",
			"Aliases": ["bh"],
			"Ability1": "bounty_hunter_shuriken_toss",
			"Ability2": "bounty_hunter_jinada",
			"Ability3": "bounty_hunter_wind_walk",
			"Ability4": "bounty_hunter_track",
			"Armor": 3,
			"AttackPoint": 0.59,
			"AttackType": "Melee",
			"DamageMax": 38,
			"DamageMin": 24,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 3.0,
			"AgilityBase": 21,
			"IntelligenceBase": 19,
			"StrengthBase": 17,
			"IntelligenceGain": 2.0,
			"Type": "Agility",
			"StrengthGain": 1.8,
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 0.6,
			"HealthRegeneration": 0.75,
			"Team": "Radiant",
			"VisionDaytime": 1800,
			"VisionNighttime": 1000
		},
		"brewmaster": {
			"Name": "Brewmaster",
			"LoreName": "Mangix",
			"Ability1": "brewmaster_thunder_clap",
			"Ability2": "brewmaster_drunken_haze",
			"Ability3": "brewmaster_drunken_brawler",
			"Ability4": "brewmaster_primal_split",
			"Ability5": "attribute_bonus",
			"Armor": -1.0,
			"AttackPoint": 0.35,
			"AttackType": "Melee",
			"DamageMax": 36,
			"DamageMin": 29,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.95,
			"AgilityBase": 22,
			"IntelligenceBase": 14,
			"StrengthBase": 23,
			"IntelligenceGain": 1.25,
			"Type": "Strength",
			"StrengthGain": 2.9,
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.6,
			"HealthRegeneration": 0.75,
			"Team": "Radiant"
		},
		"bristleback": {
			"Name": "Bristleback",
			"LoreName": "Rigwarl",
			"Aliases": ["bb"],
			"Ability1": "bristleback_viscous_nasal_goo",
			"Ability2": "bristleback_quill_spray",
			"Ability3": "bristleback_bristleback",
			"Ability4": "bristleback_warpath",
			"Ability5": "attribute_bonus",
			"Armor": 1.0,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 36,
			"DamageMin": 26,
			"Range": 150,
			"AttackRate": 1.8,
			"AgilityGain": 1.8,
			"AgilityBase": 17,
			"IntelligenceBase": 14,
			"StrengthBase": 22,
			"IntelligenceGain": 2.8,
			"Type": "Strength",
			"StrengthGain": 2.2,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 1.0,
			"Team": "Radiant"
		},
		"broodmother": {
			"Name": "Broodmother",
			"LoreName": "Black Arachnia",
			"Aliases": ["bm"],
			"Ability1": "broodmother_spawn_spiderlings",
			"Ability2": "broodmother_spin_web",
			"Ability3": "broodmother_incapacitating_bite",
			"Ability4": "broodmother_insatiable_hunger",
			"Armor": 0,
			"AttackPoint": 0.4,
			"AttackType": "Melee",
			"DamageMax": 32,
			"DamageMin": 26,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.2,
			"AgilityBase": 18,
			"IntelligenceBase": 18,
			"StrengthBase": 17,
			"IntelligenceGain": 2.0,
			"Type": "Agility",
			"StrengthGain": 2.5,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.5,
			"Team": "Dire"
		},
		"centaur": {
			"Name": "Centaur Warrunner",
			"LoreName": "Bradwarden",
			"Ability1": "centaur_hoof_stomp",
			"Ability2": "centaur_double_edge",
			"Ability3": "centaur_return",
			"Ability4": "centaur_stampede",
			"Ability5": "attribute_bonus",
			"Armor": 1,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 34,
			"DamageMin": 32,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 23,
			"StrengthGain": 4.0,
			"AgilityBase": 15,
			"AgilityGain": 2.0,
			"IntelligenceBase": 15,
			"IntelligenceGain": 1.6,
			"Type": "Strength",
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.5,
			"Team": "Radiant"
		},
		"chaos_knight": {
			"Name": "Chaos knight",
			"Aliases": ["ck"],
			"Ability1": "chaos_knight_chaos_bolt",
			"Ability2": "chaos_knight_reality_rift",
			"Ability3": "chaos_knight_chaos_strike",
			"Ability4": "chaos_knight_phantasm",
			"Ability5": "attribute_bonus",
			"Armor": 2,
			"AttackPoint": 0.5,
			"AttackType": "Melee",
			"DamageMax": 59,
			"DamageMin": 29,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.1,
			"AgilityBase": 14,
			"IntelligenceBase": 16,
			"StrengthBase": 20,
			"IntelligenceGain": 1.2,
			"Type": "Strength",
			"StrengthGain": 2.9,
			"Enabled": 1,
			"MovementSpeed": 325,
			"TurnRate": 0.5,
			"Team": "Dire"
		},
		"chen": {
			"Name": "Chen",
			"LoreName": "Holy Knight",
			"Ability1": "chen_penitence",
			"Ability2": "chen_test_of_faith",
			"Ability3": "chen_test_of_faith_teleport",
			"Ability4": "chen_holy_persuasion",
			"Ability5": "chen_hand_of_god",
			"Ability6": "attribute_bonus",
			"AbilityLayout": 5,
			"Armor": -1,
			"AttackPoint": 0.5,
			"AttackType": "Ranged",
			"DamageMax": 32,
			"DamageMin": 22,
			"Range": 600,
			"AttackRate": 1.7,
			"StrengthBase": 23,
			"StrengthGain": 1.5,
			"AgilityGain": 2.1,
			"AgilityBase": 15,
			"IntelligenceBase": 21,
			"IntelligenceGain": 2.8,
			"Type": "Intelligence",
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.6,
			"ProjectileSpeed": 1100,
			"Team": "Radiant"
		},
		"clinkz": {
			"Name": "Clinkz",
			"LoreName": "Bone Fletcher",
			"Ability1": "clinkz_strafe",
			"Ability2": "clinkz_searing_arrows",
			"Ability3": "clinkz_wind_walk",
			"Ability4": "clinkz_death_pact",
			"Armor": -1,
			"AttackPoint": 0.7,
			"AttackType": "Ranged",
			"DamageMax": 21,
			"DamageMin": 15,
			"Range": 640,
			"AttackRate": 1.7,
			"StrengthBase": 15,
			"StrengthGain": 1.6,
			"AgilityGain": 3.3,
			"AgilityBase": 22,
			"IntelligenceBase": 16,
			"IntelligenceGain": 1.55,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.4,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"crystal_maiden": {
			"Name": "Crystal Maiden",
			"LoreName": "Rylai",
			"Aliases": ["cm"],
			"Ability1": "crystal_maiden_crystal_nova",
			"Ability2": "crystal_maiden_frostbite",
			"Ability3": "crystal_maiden_brilliance_aura",
			"Ability4": "crystal_maiden_freezing_field",
			"Armor": -1,
			"AttackPoint": 0.55,
			"AttackType": "Ranged",
			"DamageMax": 25,
			"DamageMin": 19,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 1.6,
			"AgilityBase": 16,
			"IntelligenceBase": 16,
			"StrengthBase": 16,
			"IntelligenceGain": 2.9,
			"Type": "Intelligence",
			"StrengthGain": 1.7,
			"Enabled": 1,
			"MovementSpeed": 280,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Radiant"
		},
		"dark_seer": {
			"Name": "Dark Seer",
			"LoreName": "Ish'Kafel",
			"Aliases": ["ds", "pinhead"],
			"Ability1": "dark_seer_vacuum",
			"Ability2": "dark_seer_ion_shell",
			"Ability3": "dark_seer_surge",
			"Ability4": "dark_seer_wall_of_replica",
			"Armor": 5,
			"AttackPoint": 0.59,
			"AttackType": "Melee",
			"DamageMax": 37,
			"DamageMin": 31,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 22,
			"StrengthGain": 2.3,
			"AgilityGain": 1.2,
			"AgilityBase": 12,
			"IntelligenceBase": 25,
			"IntelligenceGain": 2.7,
			"Type": "Intelligence",
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.6,
			"Team": "Dire"
		},
		"dazzle": {
			"Name": "Dazzle",
			"LoreName": "Shadow Priest",
			"Ability1": "dazzle_poison_touch",
			"Ability2": "dazzle_shallow_grave",
			"Ability3": "dazzle_shadow_wave",
			"Ability4": "dazzle_weave",
			"Armor": -1,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 32,
			"DamageMin": 14,
			"Range": 550,
			"AttackRate": 1.7,
			"AgilityGain": 1.7,
			"AgilityBase": 21,
			"IntelligenceBase": 27,
			"StrengthBase": 16,
			"IntelligenceGain": 3.4,
			"Type": "Intelligence",
			"StrengthGain": 1.85,
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.6,
			"ProjectileSpeed": 1200,
			"Team": "Dire"
		},
		"death_prophet": {
			"Name": "Death Prophet",
			"LoreName": "Krobelus",
			"Aliases": ["dp"],
			"Ability1": "death_prophet_carrion_swarm",
			"Ability2": "death_prophet_silence",
			"Ability3": "death_prophet_spirit_siphon",
			"Ability4": "death_prophet_exorcism",
			"Armor": 1,
			"AttackPoint": 0.56,
			"AttackType": "Ranged",
			"DamageMax": 36,
			"DamageMin": 24,
			"Range": 600,
			"AttackRate": 1.7,
			"StrengthBase": 17,
			"StrengthGain": 1.9,
			"AgilityBase": 14,
			"AgilityGain": 1.4,
			"IntelligenceBase": 20,
			"IntelligenceGain": 3.0,
			"Type": "Intelligence",
			"Enabled": 1,
			"MovementSpeed": 310,
			"TurnRate": 0.5,
			"ProjectileSpeed": 1000,
			"HealthRegeneration": 0.75,
			"Team": "Dire"
		},
		"disruptor": {
			"Name": "Disruptor",
			"LoreName": "Stormcrafter",
			"Ability1": "disruptor_thunder_strike",
			"Ability2": "disruptor_glimpse",
			"Ability3": "disruptor_kinetic_field",
			"Ability4": "disruptor_static_storm",
			"Ability5": "attribute_bonus",
			"Armor": -1.0,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 31,
			"DamageMin": 27,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 1.4,
			"AgilityBase": 15,
			"IntelligenceBase": 22,
			"StrengthBase": 19,
			"IntelligenceGain": 2.5,
			"Type": "Intelligence",
			"StrengthGain": 1.9,
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.5,
			"ProjectileSpeed": 1200,
			"Team": "Radiant"
		},
		"doom": {
			"Name": "Doom",
			"LoreName": "Lucifer",
			"Ability1": "doom_bringer_devour",
			"Ability2": "doom_bringer_scorched_earth",
			"Ability3": "doom_bringer_infernal_blade",
			//"Ability4": "doom_bringer_empty1",
			//"Ability5": "doom_bringer_empty2",
			"Ability4": "doom_bringer_doom",
			//"Ability7": "attribute_bonus",
			"AbilityLayout": 6,
			"Armor": -1,
			"AttackPoint": 0.5,
			"AttackType": "Melee",
			"DamageMax": 43,
			"DamageMin": 27,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 0.9,
			"AgilityBase": 11,
			"IntelligenceBase": 13,
			"StrengthBase": 26,
			"IntelligenceGain": 2.1,
			"Type": "Strength",
			"StrengthGain": 3.2,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.5,
			"Team": "Dire"
		},
		"dragon_knight": {
			"Name": "Dragon Knight",
			"LoreName": "Davion",
			"Aliases": ["dk"],
			"Ability1": "dragon_knight_breathe_fire",
			"Ability2": "dragon_knight_dragon_tail",
			"Ability3": "dragon_knight_dragon_blood",
			"Ability4": "dragon_knight_elder_dragon_form",
			"Armor": 1,
			"AttackPoint": 0.5,
			"AttackType": "Melee",
			"DamageMax": 37,
			"DamageMin": 31,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.2,
			"AgilityBase": 19,
			"IntelligenceBase": 15,
			"StrengthBase": 19,
			"IntelligenceGain": 1.7,
			"Type": "Strength",
			"StrengthGain": 2.8,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.6,
			"ProjectileSpeed": 900,
			"Team": "Radiant"
		},
		"drow_ranger": {
			"Name": "Drow Ranger",
			"LoreName": "Traxex",
			"Aliases": ["dr", "\u{77}\u{61}\u{69}\u{66}\u{75}"],
			"Ability1": "drow_ranger_frost_arrows",
			"Ability2": "drow_ranger_wave_of_silence",
			"Ability3": "drow_ranger_trueshot",
			"Ability4": "drow_ranger_marksmanship",
			"Armor": -3,
			"AttackPoint": 0.7,
			"AttackType": "Ranged",
			"DamageMax": 25,
			"DamageMin": 14,
			"Range": 625,
			"AttackRate": 1.7,
			"AgilityGain": 1.9,
			"AgilityBase": 26,
			"IntelligenceBase": 15,
			"StrengthBase": 17,
			"IntelligenceGain": 1.4,
			"Type": "Agility",
			"StrengthGain": 1.9,
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.7,
			"ProjectileSpeed": 1250,
			"Team": "Radiant"
		},
		"earth_spirit": {
			"Name": "Earth Spirit",
			"LoreName": "Kaolin",
			"Aliases": ["es", "ebolaspirit"],
			"Ability1": "earth_spirit_boulder_smash",
			"Ability2": "earth_spirit_rolling_boulder",
			"Ability3": "earth_spirit_geomagnetic_grip",
			"Ability4": "earth_spirit_stone_caller",
			"Ability5": "earth_spirit_petrify",
			"Ability6": "earth_spirit_magnetize",
			"Ability7": "attribute_bonus",
			"AbilityLayout": 5,
			"Armor": 1.0,
			"AttackPoint": 0.35,
			"AttackType": "Melee",
			"DamageMax": 35,
			"DamageMin": 25,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 21,
			"StrengthGain": 2.9,
			"AgilityGain": 1.5,
			"AgilityBase": 17,
			"IntelligenceBase": 18,
			"IntelligenceGain": 2.1,
			"Type": "Strength",
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.6,
			"Team": "Radiant"
		},
		"earthshaker": {
			"Name": "Earthshaker",
			"LoreName": "Raigor Stonehoof",
			"Aliases": ["es"],
			"Ability1": "earthshaker_fissure",
			"Ability2": "earthshaker_enchant_totem",
			"Ability3": "earthshaker_aftershock",
			"Ability4": "earthshaker_echo_slam",
			"Armor": 1,
			"AttackPoint": 0.467,
			"AttackType": "Melee",
			"DamageMax": 34,
			"DamageMin": 24,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.4,
			"AgilityBase": 12,
			"IntelligenceBase": 16,
			"StrengthBase": 22,
			"IntelligenceGain": 1.8,
			"Type": "Strength",
			"StrengthGain": 2.9,
			"Enabled": 1,
			"MovementSpeed": 310,
			"TurnRate": 0.9,
			"ProjectileSpeed": 0,
			"Team": "Radiant"
		},
		"elder_titan": {
			"Name": "Elder Titan",
			"LoreName": "Worldsmith",
			"Aliases": ["et"],
			"Ability1": "elder_titan_echo_stomp",
			"Ability2": "elder_titan_ancestral_spirit",
			"Ability3": "elder_titan_natural_order",
			"Ability4": "elder_titan_earth_splitter",
			//"Ability5": "elder_titan_return_spirit",
			"Armor": 1.0,
			"AttackPoint": 0.35,
			"AttackType": "Melee",
			"DamageMax": 33,
			"DamageMin": 23,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.5,
			"AgilityBase": 14,
			"IntelligenceBase": 23,
			"StrengthBase": 24,
			"IntelligenceGain": 1.6,
			"Type": "Strength",
			"StrengthGain": 2.3,
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 0.4,
			"Team": "Radiant"
		},
		"ember_spirit": {
			"Name": "Ember Spirit",
			"LoreName": "Xin",
			"Aliases": ["es"],
			"Ability1": "ember_spirit_searing_chains",
			"Ability2": "ember_spirit_sleight_of_fist",
			"Ability3": "ember_spirit_flame_guard",
			"Ability4": "ember_spirit_fire_remnant",
			"Ability5": "ember_spirit_activate_fire_remnant",
			"Ability6": "attribute_bonus",
			"AbilityLayout": 5,
			"Armor": -2.0,
			"AttackPoint": 0.4,
			"AttackType": "Melee",
			"DamageMax": 34,
			"DamageMin": 30,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.8,
			"AgilityBase": 22,
			"IntelligenceBase": 20,
			"StrengthBase": 19,
			"IntelligenceGain": 1.8,
			"Type": "Agility",
			"StrengthGain": 2.0,
			"Enabled": 1,
			"MovementSpeed": 310,
			"TurnRate": 0.5,
			"HealthRegeneration": 0.75,
			"Team": "Radiant"
		},
		"enchantress": {
			"Name": "Enchantress",
			"LoreName": "Aiushtha",
			"Aliases": ["bambi"],
			"Ability1": "enchantress_untouchable",
			"Ability2": "enchantress_enchant",
			"Ability3": "enchantress_natures_attendants",
			"Ability4": "enchantress_impetus",
			"Armor": -2.0,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 41,
			"DamageMin": 31,
			"Range": 550,
			"AttackRate": 1.7,
			"AgilityGain": 1.8,
			"AgilityBase": 19,
			"IntelligenceBase": 16,
			"StrengthBase": 16,
			"IntelligenceGain": 2.8,
			"Type": "Intelligence",
			"StrengthGain": 1.0,
			"Enabled": 1,
			"MovementSpeed": 335,
			"TurnRate": 0.4,
			"ProjectileSpeed": 900,
			"Team": "Radiant"
		},
		"enigma": {
			"Name": "Enigma",
			"Ability1": "enigma_malefice",
			"Ability2": "enigma_demonic_conversion",
			"Ability3": "enigma_midnight_pulse",
			"Ability4": "enigma_black_hole",
			"Armor": 2,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 28,
			"DamageMin": 22,
			"Range": 500,
			"AttackRate": 1.7,
			"StrengthBase": 17,
			"StrengthGain": 2.1,
			"AgilityBase": 14,
			"AgilityGain": 1,
			"IntelligenceBase": 20,
			"IntelligenceGain": 3.4,
			"Type": "Intelligence",
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"faceless_void": {
			"Name": "Faceless Void",
			"LoreName": "Darkterror",
			"Aliases": ["fv"],
			"Ability1": "faceless_void_time_walk",
			"Ability2": "faceless_void_time_dilation",
			"Ability3": "faceless_void_time_lock",
			"Ability4": "faceless_void_chronosphere",
			"Armor": 1,
			"AttackPoint": 0.5,
			"AttackType": "Melee",
			"DamageMax": 39,
			"DamageMin": 33,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 23,
			"StrengthGain": 1.6,
			"AgilityBase": 23,
			"AgilityGain": 2.65,
			"IntelligenceBase": 15,
			"IntelligenceGain": 1.5,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 1.0,
			"HealthRegeneration": 0.75,
			"Team": "Dire"
		},
		"furion": {
			"Name": "Natures Prophet",
			"LoreName": "Furion",
			"Aliases": ["np"],
			"Ability1": "furion_sprout",
			"Ability2": "furion_teleportation",
			"Ability3": "furion_force_of_nature",
			"Ability4": "furion_wrath_of_nature",
			"Armor": 1,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 38,
			"DamageMin": 24,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 1.9,
			"AgilityBase": 18,
			"IntelligenceBase": 25,
			"StrengthBase": 19,
			"IntelligenceGain": 2.9,
			"Type": "Intelligence",
			"StrengthGain": 1.8,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.6,
			"ProjectileSpeed": 1125,
			"Team": "Radiant"
		},
		"gyrocopter": {
			"Name": "Gyrocopter",
			"LoreName": "Aurel",
			"Ability1": "gyrocopter_rocket_barrage",
			"Ability2": "gyrocopter_homing_missile",
			"Ability3": "gyrocopter_flak_cannon",
			"Ability4": "gyrocopter_call_down",
			"Armor": 1,
			"AttackPoint": 0.2,
			"AttackType": "Ranged",
			"DamageMax": 23,
			"DamageMin": 13,
			"Range": 365,
			"AttackRate": 1.7,
			"AgilityGain": 2.8,
			"AgilityBase": 24,
			"IntelligenceBase": 19,
			"StrengthBase": 18,
			"IntelligenceGain": 2.1,
			"Type": "Agility",
			"StrengthGain": 1.8,
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 0.6,
			"ProjectileSpeed": 3000,
			"Team": "Radiant"
		},
		"huskar": {
			"Name": "Huskar",
			"LoreName": "Sacred Warrior",
			"Ability1": "huskar_inner_vitality",
			"Ability2": "huskar_burning_spear",
			"Ability3": "huskar_berserkers_blood",
			"Ability4": "huskar_life_break",
			"Armor": -1,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 30,
			"DamageMin": 21,
			"Range": 400,
			"AttackRate": 1.6,
			"AgilityGain": 1.4,
			"AgilityBase": 15,
			"IntelligenceBase": 18,
			"StrengthBase": 21,
			"IntelligenceGain": 1.5,
			"Type": "Strength",
			"StrengthGain": 2.4,
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.5,
			"ProjectileSpeed": 1400,
			"Team": "Radiant"
		},
		"invoker": {
			"Name": "Invoker",
			"Aliases": ["Kael", "Carl"],
			"Ability1": "invoker_quas",
			"Ability2": "invoker_wex",
			"Ability3": "invoker_exort",
			"Ability4": "invoker_invoke",
			"Ability5": "invoker_ghost_walk",
			"Ability6": "invoker_alacrity",
			//"Ability4": "invoker_empty1",
			//"Ability5": "invoker_empty2",
			//"Ability6": "invoker_invoke",
			//"Ability7": "invoker_cold_snap",
			//"Ability8": "invoker_ghost_walk",
			//"Ability9": "invoker_tornado",
			//"Ability10": "invoker_emp",
			//"Ability11": "invoker_alacrity",
			//"Ability12": "invoker_chaos_meteor",
			//"Ability13": "invoker_sun_strike",
			//"Ability14": "invoker_forge_spirit",
			//"Ability15": "invoker_ice_wall",
			//"Ability16": "invoker_deafening_blast",
			"AbilityLayout": 6,
			"Armor": -1,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 25,
			"DamageMin": 18,
			"Range": 600,
			"AttackRate": 1.7,
			"StrengthBase": 19,
			"StrengthGain": 1.7,
			"AgilityBase": 14,
			"AgilityGain": 1.9,
			"IntelligenceBase": 16,
			"IntelligenceGain": 4,
			"Type": "Intelligence",
			"Enabled": 1,
			"MovementSpeed": 280,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"jakiro": {
			"Name": "Jakiro",
			"LoreName": "Twin Head Dragon",
			"Ability1": "jakiro_dual_breath",
			"Ability2": "jakiro_ice_path",
			"Ability3": "jakiro_liquid_fire",
			"Ability4": "jakiro_macropyre",
			"Armor": 1,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 33,
			"DamageMin": 25,
			"Range": 400,
			"AttackRate": 1.7,
			"AgilityGain": 1.2,
			"AgilityBase": 10,
			"IntelligenceBase": 28,
			"StrengthBase": 25,
			"IntelligenceGain": 2.8,
			"Type": "Intelligence",
			"StrengthGain": 2.3,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.5,
			"ProjectileSpeed": 1100,
			"Team": "Radiant"
		},
		"juggernaut": {
			"Name": "Juggernaut",
			"LoreName": "Yurnero",
			"Ability1": "juggernaut_blade_fury",
			"Ability2": "juggernaut_healing_ward",
			"Ability3": "juggernaut_blade_dance",
			"Ability4": "juggernaut_omni_slash",
			"Armor": 0,
			"AttackPoint": 0.33,
			"AttackType": "Melee",
			"DamageMax": 26,
			"DamageMin": 22,
			"Range": 150,
			"AttackRate": 1.4,
			"AgilityGain": 2.4,
			"AgilityBase": 26,
			"IntelligenceBase": 14,
			"StrengthBase": 20,
			"IntelligenceGain": 1.4,
			"Type": "Agility",
			"StrengthGain": 1.9,
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.6,
			"ProjectileSpeed": 0,
			"HealthRegeneration": 0.75,
			"Team": "Radiant"
		},
		"keeper_of_the_light": {
			"Name": "Keeper of the Light",
			"LoreName": "Ezalor",
			"Aliases": ["kotl", "old pervert"],
			"Ability1": "keeper_of_the_light_illuminate",
			"Ability2": "keeper_of_the_light_mana_leak",
			"Ability3": "keeper_of_the_light_chakra_magic",
			"Ability4": "keeper_of_the_light_spirit_form",
			"Ability5": "attribute_bonus",
			"Ability6": "keeper_of_the_light_blinding_light",
			"Ability7": "keeper_of_the_light_recall",
			//"Ability7": "keeper_of_the_light_illuminate_end",
			//"Ability8": "keeper_of_the_light_spirit_form_illuminate",
			//"Ability9": "keeper_of_the_light_spirit_form_illuminate_end",
			"AbilityLayout": 6,
			"Armor": -1.0,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 32,
			"DamageMin": 18,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 1.6,
			"AgilityBase": 15,
			"IntelligenceBase": 25,
			"StrengthBase": 14,
			"IntelligenceGain": 2.8,
			"Type": "Intelligence",
			"StrengthGain": 1.8,
			"Enabled": 1,
			"MovementSpeed": 335,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Radiant"
		},
		"kunkka": {
			"Name": "Kunkka",
			"LoreName": "Admiral",
			"Ability1": "kunkka_torrent",
			"Ability2": "kunkka_tidebringer",
			"Ability3": "kunkka_x_marks_the_spot",
			"Ability4": "kunkka_ghostship",
			//"Ability6": "kunkka_return",
			"Armor": 2,
			"AttackPoint": 0.4,
			"AttackType": "Melee",
			"DamageMax": 36,
			"DamageMin": 26,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.3,
			"AgilityBase": 14,
			"IntelligenceBase": 18,
			"StrengthBase": 24,
			"IntelligenceGain": 1.5,
			"Type": "Strength",
			"StrengthGain": 3,
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.6,
			"Team": "Radiant"
		},
		"legion_commander": {
			"Name": "Legion Commander",
			"LoreName": "Tresdin",
			"Aliases": ["lc"],
			"Ability1": "legion_commander_overwhelming_odds",
			"Ability2": "legion_commander_press_the_attack",
			"Ability3": "legion_commander_moment_of_courage",
			"Ability4": "legion_commander_duel",
			"Ability5": "attribute_bonus",
			"Armor": 0.0,
			"AttackPoint": 0.46,
			"AttackType": "Melee",
			"DamageMax": 39,
			"DamageMin": 35,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.7,
			"AgilityBase": 18,
			"IntelligenceBase": 20,
			"StrengthBase": 26,
			"IntelligenceGain": 2.2,
			"Type": "Strength",
			"StrengthGain": 2.6,
			"Enabled": 1,
			"MovementSpeed": 320,
			"TurnRate": 0.5,
			"Team": "Radiant"
		},
		"leshrac": {
			"Name": "Leshrac",
			"LoreName": "Tormented Soul",
			"Aliases": ["disco pony"],
			"Ability1": "leshrac_split_earth",
			"Ability2": "leshrac_diabolic_edict",
			"Ability3": "leshrac_lightning_storm",
			"Ability4": "leshrac_pulse_nova",
			"Armor": 0,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 19,
			"DamageMin": 15,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 1.7,
			"AgilityBase": 23,
			"IntelligenceBase": 26,
			"StrengthBase": 16,
			"IntelligenceGain": 3,
			"Type": "Intelligence",
			"StrengthGain": 1.5,
			"Enabled": 1,
			"MovementSpeed": 325,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"lich": {
			"Name": "Lich",
			"LoreName": "Ethreain",
			"Ability1": "lich_frost_nova",
			"Ability2": "lich_frost_armor",
			"Ability3": "lich_dark_ritual",
			"Ability4": "lich_chain_frost",
			"Armor": -1,
			"AttackPoint": 0.46,
			"AttackType": "Ranged",
			"DamageMax": 33,
			"DamageMin": 24,
			"Range": 550,
			"AttackRate": 1.7,
			"AgilityGain": 2,
			"AgilityBase": 15,
			"IntelligenceBase": 18,
			"StrengthBase": 18,
			"IntelligenceGain": 3.25,
			"Type": "Intelligence",
			"StrengthGain": 1.55,
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"life_stealer": {
			"Name": "Lifestealer",
			"LoreName": "N'aix",
			"Aliases": ["ls", "naix"],
			"Ability1": "life_stealer_rage",
			"Ability2": "life_stealer_feast",
			"Ability3": "life_stealer_open_wounds",
			//"Ability4": "life_stealer_assimilate",
			//"Ability5": "life_stealer_assimilate_eject",
			"Ability4": "life_stealer_infest",
			//"Ability7": "life_stealer_control",
			//"Ability8": "life_stealer_consume",
			//"Ability9": "attribute_bonus",
			"Armor": -1,
			"AttackPoint": 0.39,
			"AttackType": "Melee",
			"DamageMax": 42,
			"DamageMin": 32,
			"Range": 150,
			"AttackRate": 1.85,
			"AgilityGain": 1.9,
			"AgilityBase": 18,
			"IntelligenceBase": 15,
			"StrengthBase": 25,
			"IntelligenceGain": 1.75,
			"Type": "Strength",
			"StrengthGain": 3.0,
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 1.0,
			"Team": "Dire"
		},
		"lina": {
			"Name": "Lina",
			"LoreName": "Slayer",
			"Ability1": "lina_dragon_slave",
			"Ability2": "lina_light_strike_array",
			"Ability3": "lina_fiery_soul",
			"Ability4": "lina_laguna_blade",
			"Armor": -1,
			"AttackPoint": 0.75,
			"AttackType": "Ranged",
			"DamageMax": 31,
			"DamageMin": 13,
			"Range": 670,
			"AttackRate": 1.6,
			"AgilityGain": 1.5,
			"AgilityBase": 16,
			"IntelligenceBase": 27,
			"StrengthBase": 18,
			"IntelligenceGain": 3.2,
			"Type": "Intelligence",
			"StrengthGain": 1.5,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.5,
			"ProjectileSpeed": 1000,
			"Team": "Radiant"
		},
		"lion": {
			"Name": "Lion",
			"LoreName": "Demon Witch",
			"Ability1": "lion_impale",
			"Ability2": "lion_voodoo",
			"Ability3": "lion_mana_drain",
			"Ability4": "lion_finger_of_death",
			"Armor": -1,
			"AttackPoint": 0.43,
			"AttackType": "Ranged",
			"DamageMax": 33,
			"DamageMin": 27,
			"Range": 600,
			"AttackRate": 1.7,
			"StrengthBase": 16,
			"StrengthGain": 1.7,
			"AgilityBase": 15,
			"AgilityGain": 1.5,
			"IntelligenceBase": 20,
			"IntelligenceGain": 3.0,
			"Type": "Intelligence",
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"lone_druid": {
			"Name": "Lone Druid",
			"LoreName": "Sylla",
			"Aliases": ["ld", "Syllabear"],
			"Ability1": "lone_druid_spirit_bear",
			"Ability2": "lone_druid_rabid",
			"Ability3": "lone_druid_savage_roar",
			"Ability4": "lone_druid_true_form",
			"Ability5": "attribute_bonus",
			//"Ability6": "lone_druid_true_form_druid",
			"Ability6": "lone_druid_true_form_battle_cry",
			"AbilityLayout": 5,
			"Armor": 0,
			"AttackPoint": 0.33,
			"AttackType": "Ranged",
			"DamageMax": 26,
			"DamageMin": 22,
			"Range": 550,
			"AttackRate": 1.7,
			"AgilityGain": 2.7,
			"AgilityBase": 24,
			"IntelligenceBase": 13,
			"StrengthBase": 17,
			"IntelligenceGain": 1.4,
			"Type": "Agility",
			"StrengthGain": 2.1,
			"Enabled": 1,
			"MovementSpeed": 325,
			"TurnRate": 0.4,
			"ProjectileSpeed": 900,
			"HealthRegeneration": 0.5,
			"Team": "Radiant"
		},
		"luna": {
			"Name": "Luna",
			"LoreName": "Moon Rider",
			"Ability1": "luna_lucent_beam",
			"Ability2": "luna_moon_glaive",
			"Ability3": "luna_lunar_blessing",
			"Ability4": "luna_eclipse",
			"Armor": 1,
			"AttackPoint": 0.46,
			"AttackType": "Ranged",
			"DamageMax": 32,
			"DamageMin": 26,
			"Range": 335,
			"AttackRate": 1.7,
			"AgilityGain": 3.3,
			"AgilityBase": 18,
			"IntelligenceBase": 16,
			"StrengthBase": 15,
			"IntelligenceGain": 1.85,
			"Type": "Agility",
			"StrengthGain": 2.2,
			"Enabled": 1,
			"MovementSpeed": 330,
			"TurnRate": 0.6,
			"ProjectileSpeed": 900,
			"Team": "Radiant"
		},
		"lycan": {
			"Name": "Lycan",
			"LoreName": "Banehallow",
			"Aliases": ["Lycanthrope"],
			"Ability1": "lycan_summon_wolves",
			"Ability2": "lycan_howl",
			"Ability3": "lycan_feral_impulse",
			"Ability4": "lycan_shapeshift",
			"Ability5": "attribute_bonus",
			"Armor": 1,
			"AttackPoint": 0.55,
			"AttackType": "Melee",
			"DamageMax": 41,
			"DamageMin": 36,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.9,
			"AgilityBase": 16,
			"IntelligenceBase": 17,
			"StrengthBase": 22,
			"IntelligenceGain": 1.55,
			"Type": "Strength",
			"StrengthGain": 3,
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.5,
			"Team": "Dire"
		},
		"magnataur": {
			"Name": "Magnus",
			"LoreName": "Magnoceros",
			"Aliases": ["Magnataur"],
			"Ability1": "magnataur_shockwave",
			"Ability2": "magnataur_empower",
			"Ability3": "magnataur_skewer",
			"Ability4": "magnataur_reverse_polarity",
			"Ability5": "attribute_bonus",
			"Armor": 2,
			"AttackPoint": 0.5,
			"AttackType": "Melee",
			"DamageMax": 44,
			"DamageMin": 32,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 21,
			"StrengthGain": 2.9,
			"AgilityBase": 15,
			"AgilityGain": 2.5,
			"IntelligenceBase": 19,
			"IntelligenceGain": 1.65,
			"Type": "Strength",
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 0.8,
			"HealthRegeneration": 0.75,
			"Team": "Dire"
		},
		"medusa": {
			"Name": "Medusa",
			"LoreName": "Gorgon",
			"Ability1": "medusa_split_shot",
			"Ability2": "medusa_mystic_snake",
			"Ability3": "medusa_mana_shield",
			"Ability4": "medusa_stone_gaze",
			"Ability5": "attribute_bonus",
			"Armor": -1,
			"AttackPoint": 0.5,
			"AttackType": "Ranged",
			"DamageMax": 30,
			"DamageMin": 24,
			"Range": 600,
			"AttackRate": 1.7,
			"StrengthBase": 14,
			"StrengthGain": 1.65,
			"AgilityBase": 20,
			"AgilityGain": 2.5,
			"IntelligenceBase": 19,
			"IntelligenceGain": 2.1,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.5,
			"ProjectileSpeed": 1200,
			"Team": "Dire"
		},
		"meepo": {
			"Name": "Meepo",
			"LoreName": "Geomancer",
			"Ability1": "meepo_earthbind",
			"Ability2": "meepo_poof",
			"Ability3": "meepo_geostrike",
			"Ability4": "meepo_divided_we_stand",
			"Ability5": "attribute_bonus",
			"Armor": 1.0,
			"AttackPoint": 0.38,
			"AttackType": "Melee",
			"DamageMax": 26,
			"DamageMin": 20,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.2,
			"AgilityBase": 23,
			"IntelligenceBase": 20,
			"StrengthBase": 23,
			"IntelligenceGain": 1.6,
			"Type": "Agility",
			"StrengthGain": 1.6,
			"Enabled": 1,
			"MagicalResistance": 0.35,
			"MovementSpeed": 315,
			"TurnRate": 0.65,
			"Team": "Dire"
		},
		"mirana": {
			"Name": "Mirana",
			"LoreName": "Princess of the Moon",
			"Aliases": ["potm"],
			"Ability1": "mirana_starfall",
			"Ability2": "mirana_arrow",
			"Ability3": "mirana_leap",
			"Ability4": "mirana_invis",
			"Armor": -1,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 29,
			"DamageMin": 18,
			"Range": 630,
			"AttackRate": 1.7,
			"AgilityGain": 3.3,
			"AgilityBase": 20,
			"IntelligenceBase": 17,
			"StrengthBase": 17,
			"IntelligenceGain": 1.65,
			"Type": "Agility",
			"StrengthGain": 1.85,
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.4,
			"ProjectileSpeed": 900,
			"Team": "Radiant"
		},
		"morphling": {
			"Name": "Morphling",
			"Aliases": ["OSfrog"],
			"Ability1": "morphling_waveform",
			"Ability2": "morphling_adaptive_strike",
			"Ability3": "morphling_morph_agi",
			"Ability4": "morphling_morph_str",
			"Ability5": "morphling_replicate",
			"Ability6": "attribute_bonus",
			"Ability7": "morphling_hybrid",
			//"Ability7": "morphling_morph",
			//"Ability8": "morphling_morph_replicate",
			"AbilityLayout": 5,
			"Armor": -2,
			"AttackPoint": 0.5,
			"AttackType": "Ranged",
			"DamageMax": 22,
			"DamageMin": 13,
			"Range": 350,
			"AttackRate": 1.6,
			"StrengthBase": 19,
			"StrengthGain": 2.0,
			"AgilityBase": 24,
			"AgilityGain": 3.7,
			"IntelligenceBase": 17,
			"IntelligenceGain": 1.1,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 285,
			"TurnRate": 0.6,
			"ProjectileSpeed": 1300,
			"Team": "Radiant"
		},
		"naga_siren": {
			"Name": "Naga Siren",
			"LoreName": "Slithice",
			"Ability1": "naga_siren_mirror_image",
			"Ability2": "naga_siren_ensnare",
			"Ability3": "naga_siren_rip_tide",
			"Ability4": "naga_siren_song_of_the_siren",
			"Ability5": "attribute_bonus",
			//"Ability6": "naga_siren_song_of_the_siren_cancel",
			"Armor": 3,
			"AttackPoint": 0.5,
			"AttackType": "Melee",
			"DamageMax": 25,
			"DamageMin": 23,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 21,
			"StrengthGain": 2.5,
			"AgilityBase": 21,
			"AgilityGain": 2.75,
			"IntelligenceBase": 21,
			"IntelligenceGain": 2.0,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 320,
			"TurnRate": 0.5,
			"HealthRegeneration": 0.75,
			"Team": "Radiant"
		},
		"necrolyte": {
			"Name": "Necrophos",
			"LoreName": "Rotund'jere",
			"Aliases": ["Necrolyte"],
			"Ability1": "necrolyte_death_pulse",
			"Ability2": "necrolyte_heartstopper_aura",
			"Ability3": "necrolyte_sadist",
			"Ability4": "necrolyte_reapers_scythe",
			"Armor": 1.0,
			"AttackPoint": 0.53,
			"AttackType": "Ranged",
			"DamageMax": 26,
			"DamageMin": 22,
			"Range": 550,
			"AttackRate": 1.7,
			"AgilityGain": 1.7,
			"AgilityBase": 15,
			"IntelligenceBase": 22,
			"StrengthBase": 16,
			"IntelligenceGain": 2.5,
			"Type": "Intelligence",
			"StrengthGain": 2.0,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"nevermore": {
			"Name": "Shadow Fiend",
			"LoreName": "Nevermore",
			"Aliases": ["sf"],
			//"Ability1": "nevermore_shadowraze1",
			"Ability1": "nevermore_shadowraze2",
			//"Ability3": "nevermore_shadowraze3",
			"Ability2": "nevermore_necromastery",
			"Ability3": "nevermore_dark_lord",
			"Ability4": "nevermore_requiem",
			"Ability5": "attribute_bonus",
			"AbilityLayout": 6,
			"Armor": -2,
			"AttackPoint": 0.5,
			"AttackType": "Ranged",
			"DamageMax": 21,
			"DamageMin": 15,
			"Range": 500,
			"AttackRate": 1.7,
			"AgilityGain": 2.9,
			"AgilityBase": 20,
			"IntelligenceBase": 18,
			"StrengthBase": 15,
			"IntelligenceGain": 2.0,
			"Type": "Agility",
			"StrengthGain": 2.0,
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 1.0,
			"ProjectileSpeed": 1200,
			"HealthRegeneration": 0.5,
			"Team": "Dire"
		},
		"night_stalker": {
			"Name": "Night Stalker",
			"LoreName": "Balanar",
			"Aliases": ["ns"],
			"Ability1": "night_stalker_void",
			"Ability2": "night_stalker_crippling_fear",
			"Ability3": "night_stalker_hunter_in_the_night",
			"Ability4": "night_stalker_darkness",
			"Armor": 3,
			"AttackPoint": 0.55,
			"AttackType": "Melee",
			"DamageMax": 42,
			"DamageMin": 38,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.25,
			"AgilityBase": 18,
			"IntelligenceBase": 16,
			"StrengthBase": 23,
			"IntelligenceGain": 1.6,
			"Type": "Strength",
			"StrengthGain": 2.8,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.5,
			"HealthRegeneration": 2,
			"Team": "Dire",
			"VisionDaytime": 1200,
			"VisionNighttime": 1800
		},
		"nyx_assassin": {
			"Name": "Nyx Assassin",
			"Aliases": ["nerubian assassin"],
			"Ability1": "nyx_assassin_impale",
			"Ability2": "nyx_assassin_mana_burn",
			"Ability3": "nyx_assassin_spiked_carapace",
			"Ability4": "nyx_assassin_vendetta",
			"Ability5": "attribute_bonus",
			"Ability6": "nyx_assassin_burrow",
			//"Ability5": "nyx_assassin_unburrow",
			"Armor": 1.0,
			"AttackPoint": 0.46,
			"AttackType": "Melee",
			"DamageMax": 34,
			"DamageMin": 30,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 18,
			"StrengthGain": 2.0,
			"AgilityBase": 19,
			"AgilityGain": 2.2,
			"IntelligenceBase": 18,
			"IntelligenceGain": 2.1,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.5,
			"HealthRegeneration": 3.5,
			"Team": "Dire"
		},
		"obsidian_destroyer": {
			"Name": "Outworld Devourer",
			"LoreName": "Harbinger",
			"Aliases": ["Obsidian Destroyer", "Outhouse Decorator",
				"mr steal yo intel", "od"
			],
			"Ability1": "obsidian_destroyer_arcane_orb",
			"Ability2": "obsidian_destroyer_astral_imprisonment",
			"Ability3": "obsidian_destroyer_essence_aura",
			"Ability4": "obsidian_destroyer_sanity_eclipse",
			"Ability5": "attribute_bonus",
			"Armor": 0.5,
			"AttackPoint": 0.46,
			"AttackType": "Ranged",
			"DamageMax": 35,
			"DamageMin": 20,
			"Range": 450,
			"AttackRate": 1.7,
			"AgilityGain": 2.0,
			"AgilityBase": 24,
			"IntelligenceBase": 26,
			"StrengthBase": 19,
			"IntelligenceGain": 3.3,
			"Type": "Intelligence",
			"StrengthGain": 2.3,
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"ogre_magi": {
			"Name": "Ogre Magi",
			"LoreName": "Aggron Stonebreak",
			"Ability1": "ogre_magi_fireblast",
			"Ability2": "ogre_magi_ignite",
			"Ability3": "ogre_magi_bloodlust",
			"Ability4": "ogre_magi_unrefined_fireblast",
			"Ability5": "ogre_magi_multicast",
			"Ability6": "attribute_bonus",
			"Armor": 6.0,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 47,
			"DamageMin": 41,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.55,
			"AgilityBase": 14,
			"IntelligenceBase": 17,
			"StrengthBase": 23,
			"IntelligenceGain": 2.4,
			"Type": "Intelligence",
			"StrengthGain": 3.2,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.6,
			"HealthRegeneration": 3.5,
			"Team": "Radiant"
		},
		"omniknight": {
			"Name": "Omniknight",
			"LoreName": "Purist Thunderwrath",
			"Ability1": "omniknight_purification",
			"Ability2": "omniknight_repel",
			"Ability3": "omniknight_degen_aura",
			"Ability4": "omniknight_guardian_angel",
			"Armor": 3,
			"AttackPoint": 0.433,
			"AttackType": "Melee",
			"DamageMax": 41,
			"DamageMin": 31,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 22,
			"StrengthGain": 2.8,
			"AgilityBase": 15,
			"AgilityGain": 1.75,
			"IntelligenceBase": 17,
			"IntelligenceGain": 1.8,
			"Type": "Strength",
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.6,
			"Team": "Radiant"
		},
		"oracle": {
			"Name": "Oracle",
			"LoreName": "Nerif",
			"Ability1": "oracle_fortunes_end",
			"Ability2": "oracle_fates_edict",
			"Ability3": "oracle_purifying_flames",
			"Ability4": "oracle_false_promise",
			"Ability5": "attribute_bonus",
			"Armor": 0,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 22,
			"DamageMin": 16,
			"Range": 620,
			"AttackRate": 1.4,
			"AgilityGain": 1.7,
			"AgilityBase": 15,
			"IntelligenceBase": 23,
			"StrengthBase": 18,
			"IntelligenceGain": 2.9,
			"Type": "Intelligence",
			"StrengthGain": 1.9,
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.4,
			"ProjectileSpeed": 900,
			"Team": "Radiant"
		},
		"phantom_assassin": {
			"Name": "Phantom Asssassin",
			"LoreName": "Mortred",
			"Aliases": ["pa"],
			"Ability1": "phantom_assassin_stifling_dagger",
			"Ability2": "phantom_assassin_phantom_strike",
			"Ability3": "phantom_assassin_blur",
			"Ability4": "phantom_assassin_coup_de_grace",
			"Armor": 1,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 25,
			"DamageMin": 23,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 3.15,
			"AgilityBase": 23,
			"IntelligenceBase": 15,
			"StrengthBase": 20,
			"IntelligenceGain": 1.4,
			"Type": "Agility",
			"StrengthGain": 1.85,
			"Enabled": 1,
			"MovementSpeed": 310,
			"TurnRate": 0.6,
			"Team": "Dire"
		},
		"phantom_lancer": {
			"Name": "Phantom Lancer",
			"LoreName": "Azwraith",
			"Aliases": ["pl", "ebolancer"],
			"Ability1": "phantom_lancer_spirit_lance",
			"Ability2": "phantom_lancer_doppelwalk",
			"Ability3": "phantom_lancer_phantom_edge",
			"Ability4": "phantom_lancer_juxtapose",
			"Armor": 0,
			"AttackPoint": 0.5,
			"AttackType": "Melee",
			"DamageMax": 44,
			"DamageMin": 22,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.6,
			"AgilityBase": 29,
			"IntelligenceBase": 21,
			"StrengthBase": 21,
			"IntelligenceGain": 2.0,
			"Type": "Agility",
			"StrengthGain": 1.7,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.6,
			"HealthRegeneration": 0.75,
			"Team": "Radiant"
		},
		"phoenix": {
			"Name": "Phoenix",
			"Aliases": ["firebird"],
			"Ability1": "phoenix_icarus_dive",
			"Ability2": "phoenix_fire_spirits",
			"Ability3": "phoenix_sun_ray",
			//"Ability4": "phoenix_sun_ray_toggle_move_empty",
			"Ability4": "phoenix_supernova",
			//"Ability6": "phoenix_launch_fire_spirit",
			//"Ability7": "phoenix_icarus_dive_stop",
			//"Ability8": "phoenix_sun_ray_stop",
			//"Ability9": "phoenix_sun_ray_toggle_move",
			"Ability5": "attribute_bonus",
			"AbilityLayout": 5,
			"Armor": -2,
			"AttackPoint": 0.35,
			"AttackType": "Ranged",
			"DamageMax": 36,
			"DamageMin": 26,
			"Range": 500,
			"AttackRate": 1.7,
			"AgilityGain": 1.3,
			"AgilityBase": 12,
			"IntelligenceBase": 18,
			"StrengthBase": 17,
			"IntelligenceGain": 1.8,
			"Type": "Strength",
			"StrengthGain": 2.9,
			"Enabled": 1,
			"MovementSpeed": 285,
			"TurnRate": 1.0,
			"ProjectileSpeed": 1100,
			"Team": "Radiant"
		},
		"puck": {
			"Name": "Puck",
			"LoreName": "Faerie Dragon",
			"Ability1": "puck_illusory_orb",
			"Ability2": "puck_waning_rift",
			"Ability3": "puck_phase_shift",
			"Ability4": "puck_ethereal_jaunt",
			"Ability5": "puck_dream_coil",
			"Ability6": "attribute_bonus",
			"AbilityLayout": 5,
			"Armor": -1,
			"AttackPoint": 0.5,
			"AttackType": "Ranged",
			"DamageMax": 33,
			"DamageMin": 22,
			"Range": 550,
			"AttackRate": 1.7,
			"AgilityGain": 1.7,
			"AgilityBase": 22,
			"IntelligenceBase": 25,
			"StrengthBase": 15,
			"IntelligenceGain": 2.4,
			"Type": "Intelligence",
			"StrengthGain": 1.7,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.4,
			"ProjectileSpeed": 900,
			"Team": "Radiant",
			"VisionNighttime": 800
		},
		"pudge": {
			"Name": "Pudge",
			"LoreName": "Butcher",
			"Aliases": ["Pudga"],
			"Ability1": "pudge_meat_hook",
			"Ability2": "pudge_rot",
			"Ability3": "pudge_flesh_heap",
			"Ability4": "pudge_dismember",
			"Armor": -1,
			"AttackPoint": 0.5,
			"AttackType": "Melee",
			"DamageMax": 33,
			"DamageMin": 27,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.5,
			"AgilityBase": 14,
			"IntelligenceBase": 14,
			"StrengthBase": 25,
			"IntelligenceGain": 1.5,
			"Type": "Strength",
			"StrengthGain": 3.2,
			"Enabled": 1,
			"MovementSpeed": 285,
			"TurnRate": 0.7,
			"ProjectileSpeed": 0,
			"Team": "Dire"
		},
		"pugna": {
			"Name": "Pugna",
			"Ability1": "pugna_nether_blast",
			"Ability2": "pugna_decrepify",
			"Ability3": "pugna_nether_ward",
			"Ability4": "pugna_life_drain",
			"Armor": -1,
			"AttackPoint": 0.5,
			"AttackType": "Ranged",
			"DamageMax": 27,
			"DamageMin": 19,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 1.0,
			"AgilityBase": 16,
			"IntelligenceBase": 26,
			"StrengthBase": 17,
			"IntelligenceGain": 4.0,
			"Type": "Intelligence",
			"StrengthGain": 1.2,
			"Enabled": 1,
			"MovementSpeed": 330,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"queenofpain": {
			"Name": "Queen of Pain",
			"LoreName": "Akasha",
			"Aliases": ["qop", "succubus"],
			"Ability1": "queenofpain_shadow_strike",
			"Ability2": "queenofpain_blink",
			"Ability3": "queenofpain_scream_of_pain",
			"Ability4": "queenofpain_sonic_wave",
			"Armor": -1,
			"AttackPoint": 0.56,
			"AttackType": "Ranged",
			"DamageMax": 33,
			"DamageMin": 25,
			"Range": 550,
			"AttackRate": 1.6,
			"AgilityGain": 2,
			"AgilityBase": 18,
			"IntelligenceBase": 24,
			"StrengthBase": 16,
			"IntelligenceGain": 2.5,
			"Type": "Intelligence",
			"StrengthGain": 1.7,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.5,
			"ProjectileSpeed": 1500,
			"Team": "Dire"
		},
		"rattletrap": {
			"Name": "Clockwerk",
			"LoreName": "Rattletrap",
			"Ability1": "rattletrap_battery_assault",
			"Ability2": "rattletrap_power_cogs",
			"Ability3": "rattletrap_rocket_flare",
			"Ability4": "rattletrap_hookshot",
			"Armor": 0,
			"AttackPoint": 0.33,
			"AttackType": "Melee",
			"DamageMax": 33,
			"DamageMin": 31,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 24,
			"StrengthGain": 2.9,
			"AgilityGain": 2.3,
			"AgilityBase": 13,
			"IntelligenceBase": 17,
			"IntelligenceGain": 1.3,
			"Type": "Strength",
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 0.6,
			"Team": "Radiant"
		},
		"razor": {
			"Name": "Razor",
			"LoreName": "Lightning Revenant",
			"Ability1": "razor_plasma_field",
			"Ability2": "razor_static_link",
			"Ability3": "razor_unstable_current",
			"Ability4": "razor_eye_of_the_storm",
			"Armor": -1,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 25,
			"DamageMin": 23,
			"Range": 475,
			"AttackRate": 1.7,
			"AgilityGain": 2.0,
			"AgilityBase": 22,
			"IntelligenceBase": 19,
			"StrengthBase": 21,
			"IntelligenceGain": 1.8,
			"Type": "Agility",
			"StrengthGain": 2.3,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.4,
			"ProjectileSpeed": 2000,
			"Team": "Dire"
		},
		"riki": {
			"Name": "Riki",
			"LoreName": "Stealth Assassin",
			"Aliases": ["Rikimaru"],
			"Ability1": "riki_smoke_screen",
			"Ability2": "riki_blink_strike",
			"Ability3": "riki_permanent_invisibility",
			"Ability4": "riki_tricks_of_the_trade",
			"Armor": 0,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 8,
			"DamageMin": 4,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 17,
			"StrengthGain": 1.6,
			"AgilityGain": 2.2,
			"AgilityBase": 34,
			"IntelligenceBase": 14,
			"IntelligenceGain": 1.3,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.6,
			"HealthRegeneration": 0.25,
			"Team": "Radiant"
		},
		"rubick": {
			"Name": "Rubick",
			"LoreName": "Grand Magus",
			"Ability1": "rubick_telekinesis",
			//"Ability2": "rubick_telekinesis_land",
			"Ability2": "rubick_fade_bolt",
			"Ability3": "rubick_null_field",
			//"Ability5": "rubick_empty1",
			//"Ability6": "rubick_empty2",
			"Ability4": "rubick_spell_steal",
			"Ability5": "attribute_bonus",
			//"Ability9": "rubick_hidden1",
			//"Ability10": "rubick_hidden2",
			//"Ability11": "rubick_hidden3",
			"AbilityLayout": 6,
			"Armor": -1.0,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 27,
			"DamageMin": 17,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 1.6,
			"AgilityBase": 14,
			"IntelligenceBase": 27,
			"StrengthBase": 19,
			"IntelligenceGain": 2.4,
			"Type": "Intelligence",
			"StrengthGain": 1.5,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.7,
			"ProjectileSpeed": 1125,
			"Team": "Radiant"
		},
		"sand_king": {
			"Name": "Sand King",
			"LoreName": "Crixalis",
			"Aliases": ["sk", "sentient sand"],
			"Ability1": "sandking_burrowstrike",
			"Ability2": "sandking_sand_storm",
			"Ability3": "sandking_caustic_finale",
			"Ability4": "sandking_epicenter",
			"Armor": 0,
			"AttackPoint": 0.53,
			"AttackType": "Melee",
			"DamageMax": 41,
			"DamageMin": 25,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 22,
			"StrengthGain": 2.6,
			"AgilityBase": 19,
			"AgilityGain": 2.1,
			"IntelligenceBase": 16,
			"IntelligenceGain": 1.8,
			"Type": "Strength",
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.5,
			"Team": "Dire"
		},
		"shadow_demon": {
			"Name": "Shadow Demon",
			"Aliases": ["sd"],
			"Ability1": "shadow_demon_disruption",
			"Ability2": "shadow_demon_soul_catcher",
			"Ability3": "shadow_demon_shadow_poison",
			"Ability4": "shadow_demon_shadow_poison_release",
			"Ability5": "shadow_demon_demonic_purge",
			"Ability6": "attribute_bonus",
			"AbilityLayout": 5,
			"Armor": 0,
			"AttackPoint": 0.35,
			"AttackType": "Ranged",
			"DamageMax": 31,
			"DamageMin": 27,
			"Range": 500,
			"AttackRate": 1.7,
			"AgilityGain": 2.2,
			"AgilityBase": 18,
			"IntelligenceBase": 23,
			"StrengthBase": 17,
			"IntelligenceGain": 2.7,
			"Type": "Intelligence",
			"StrengthGain": 1.9,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.6,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"shadow_shaman": {
			"Name": "Shadow Shaman",
			"LoreName": "Rhasta",
			"Aliases": ["ss"],
			"Ability1": "shadow_shaman_ether_shock",
			"Ability2": "shadow_shaman_voodoo",
			"Ability3": "shadow_shaman_shackles",
			"Ability4": "shadow_shaman_mass_serpent_ward",
			"Armor": -1,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 33,
			"DamageMin": 26,
			"Range": 500,
			"AttackRate": 1.7,
			"AgilityGain": 1.6,
			"AgilityBase": 16,
			"IntelligenceBase": 21,
			"StrengthBase": 21,
			"IntelligenceGain": 3.0,
			"Type": "Intelligence",
			"StrengthGain": 1.8,
			"Enabled": 1,
			"MovementSpeed": 285,
			"TurnRate": 0.4,
			"ProjectileSpeed": 900,
			"Team": "Radiant"
		},
		"shredder": {
			"Name": "Timbersaw",
			"LoreName": "Rizzrack",
			"Aliases": ["Shredder"],
			"Ability1": "shredder_whirling_death",
			"Ability2": "shredder_timber_chain",
			"Ability3": "shredder_reactive_armor",
			//"Ability4": "shredder_chakram_2",
			//"Ability5": "shredder_return_chakram_2",
			"Ability4": "shredder_chakram",
			//"Ability7": "shredder_return_chakram",
			"Ability5": "attribute_bonus",
			"AbilityLayout": 4,
			"Armor": -2,
			"AttackPoint": 0.36,
			"AttackType": "Melee",
			"DamageMax": 30,
			"DamageMin": 26,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 21,
			"StrengthGain": 1.8,
			"AgilityBase": 16,
			"AgilityGain": 1.3,
			"IntelligenceBase": 21,
			"IntelligenceGain": 2.4,
			"Type": "Strength",
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.6,
			"Team": "Radiant"
		},
		"silencer": {
			"Name": "Silencer",
			"LoreName": "Nortrom",
			"Ability1": "silencer_curse_of_the_silent",
			"Ability2": "silencer_glaives_of_wisdom",
			"Ability3": "silencer_last_word",
			"Ability4": "silencer_global_silence",
			"Armor": -1,
			"AttackPoint": 0.5,
			"AttackType": "Ranged",
			"DamageMax": 30,
			"DamageMin": 16,
			"Range": 600,
			"AttackRate": 1.7,
			"StrengthBase": 17,
			"StrengthGain": 2.2,
			"AgilityBase": 22,
			"AgilityGain": 3.0,
			"IntelligenceBase": 27,
			"IntelligenceGain": 2.5,
			"Type": "Intelligence",
			"Enabled": 1,
			"MagicalResistance": 0.25,
			"MovementSpeed": 295,
			"TurnRate": 0.6,
			"ProjectileSpeed": 1000,
			"Team": "Radiant"
		},
		"skeleton_king": {
			"Name": "Wraith King",
			"LoreName": "Ostarion",
			"Aliases": ["wk", "Skeleton King"],
			"Ability1": "skeleton_king_hellfire_blast",
			"Ability2": "skeleton_king_vampiric_aura",
			"Ability3": "skeleton_king_mortal_strike",
			"Ability4": "skeleton_king_reincarnation",
			"Armor": 0,
			"AttackPoint": 0.56,
			"AttackType": "Melee",
			"DamageMax": 41,
			"DamageMin": 39,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.7,
			"AgilityBase": 18,
			"IntelligenceBase": 18,
			"StrengthBase": 22,
			"IntelligenceGain": 1.6,
			"Type": "Strength",
			"StrengthGain": 2.9,
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.4,
			"ProjectileSpeed": 0,
			"Team": "Dire"
		},
		"skywrath_mage": {
			"Name": "Skywrath Mage",
			"LoreName": "dragonus",
			"Ability1": "skywrath_mage_arcane_bolt",
			"Ability2": "skywrath_mage_concussive_shot",
			"Ability3": "skywrath_mage_ancient_seal",
			"Ability4": "skywrath_mage_mystic_flare",
			"Armor": -2,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 22,
			"DamageMin": 12,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 0.8,
			"AgilityBase": 13,
			"IntelligenceBase": 27,
			"StrengthBase": 19,
			"IntelligenceGain": 3.6,
			"Type": "Intelligence",
			"StrengthGain": 1.5,
			"Enabled": 1,
			"MovementSpeed": 325,
			"TurnRate": 0.5,
			"ProjectileSpeed": 1000,
			"Team": "Radiant"
		},
		"slardar": {
			"Name": "Slardar",
			"LoreName": "Slithereen Guard",
			"Aliases": ["ugly", "sladar"],
			"Ability1": "slardar_sprint",
			"Ability2": "slardar_slithereen_crush",
			"Ability3": "slardar_bash",
			"Ability4": "slardar_amplify_damage",
			"Armor": 3,
			"AttackPoint": 0.36,
			"AttackType": "Melee",
			"DamageMax": 38,
			"DamageMin": 30,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.4,
			"AgilityBase": 17,
			"IntelligenceBase": 15,
			"StrengthBase": 21,
			"IntelligenceGain": 1.5,
			"Type": "Strength",
			"StrengthGain": 2.8,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.5,
			"ProjectileSpeed": 0,
			"Team": "Dire"
		},
		"slark": {
			"Name": "Slark",
			"LoreName": "Nightcrawler",
			"Aliases": ["fish"],
			"Ability1": "slark_dark_pact",
			"Ability2": "slark_pounce",
			"Ability3": "slark_essence_shift",
			"Ability4": "slark_shadow_dance",
			"Ability5": "attribute_bonus",
			"Armor": -1,
			"AttackPoint": 0.5,
			"AttackType": "Melee",
			"DamageMax": 41,
			"DamageMin": 33,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.5,
			"AgilityBase": 21,
			"IntelligenceBase": 16,
			"StrengthBase": 21,
			"IntelligenceGain": 1.9,
			"Type": "Agility",
			"StrengthGain": 1.8,
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.5,
			"ProjectileSpeed": 0,
			"Team": "Dire",
			"VisionDaytime": 1800,
			"VisionNighttime": 1800
		},
		"sniper": {
			"Name": "Sniper",
			"LoreName": "Kardel Sharpeye",
			"Aliases": ["hoho haha"],
			"Ability1": "sniper_shrapnel",
			"Ability2": "sniper_headshot",
			"Ability3": "sniper_take_aim",
			"Ability4": "sniper_assassinate",
			"Armor": -1,
			"AttackPoint": 0.17,
			"AttackType": "Ranged",
			"DamageMax": 21,
			"DamageMin": 15,
			"Range": 550,
			"AttackRate": 1.7,
			"AgilityGain": 2.5,
			"AgilityBase": 21,
			"IntelligenceBase": 15,
			"StrengthBase": 16,
			"IntelligenceGain": 2.6,
			"Type": "Agility",
			"StrengthGain": 1.7,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.7,
			"ProjectileSpeed": 3000,
			"Team": "Radiant",
			"VisionNighttime": 1100
		},
		"spectre": {
			"Name": "Spectre",
			"LoreName": "Mercurial",
			"Ability1": "spectre_spectral_dagger",
			"Ability2": "spectre_desolate",
			"Ability3": "spectre_dispersion",
			"Ability4": "spectre_reality",
			"Ability5": "spectre_haunt",
			"Ability6": "attribute_bonus",
			"AbilityLayout": 5,
			"Armor": 0,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 27,
			"DamageMin": 23,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.8,
			"AgilityBase": 23,
			"IntelligenceBase": 16,
			"StrengthBase": 19,
			"IntelligenceGain": 1.9,
			"Type": "Agility",
			"StrengthGain": 2.0,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.4,
			"Team": "Dire"
		},
		"spirit_breaker": {
			"Name": "Spirit Breaker",
			"LoreName": "Barathrum",
			"Aliases": ["sb", "space cow"],
			"Ability1": "spirit_breaker_charge_of_darkness",
			"Ability2": "spirit_breaker_empowering_haste",
			"Ability3": "spirit_breaker_greater_bash",
			"Ability4": "spirit_breaker_nether_strike",
			"Ability5": "attribute_bonus",
			"Armor": 3.0,
			"AttackPoint": 0.6,
			"AttackType": "Melee",
			"DamageMax": 41,
			"DamageMin": 31,
			"Range": 150,
			"AttackRate": 1.9,
			"AgilityGain": 1.7,
			"AgilityBase": 17,
			"IntelligenceBase": 14,
			"StrengthBase": 29,
			"IntelligenceGain": 1.8,
			"Type": "Strength",
			"StrengthGain": 2.4,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.4,
			"HealthRegeneration": 0.75,
			"Team": "Dire"
		},
		"storm_spirit": {
			"Name": "Storm Spirit",
			"LoreName": "Raijin Thunderkeg",
			"Aliases": ["ss"],
			"Ability1": "storm_spirit_static_remnant",
			"Ability2": "storm_spirit_electric_vortex",
			"Ability3": "storm_spirit_overload",
			"Ability4": "storm_spirit_ball_lightning",
			"Armor": 2,
			"AttackPoint": 0.5,
			"AttackType": "Ranged",
			"DamageMax": 32,
			"DamageMin": 22,
			"Range": 480,
			"AttackRate": 1.7,
			"StrengthBase": 19,
			"StrengthGain": 1.5,
			"AgilityBase": 22,
			"AgilityGain": 1.8,
			"IntelligenceBase": 24,
			"IntelligenceGain": 3.0,
			"Type": "Intelligence",
			"Enabled": 1,
			"MovementSpeed": 285,
			"TurnRate": 0.8,
			"ProjectileSpeed": 1100,
			"Team": "Radiant"
		},
		"sven": {
			"Name": "Sven",
			"LoreName": "Rogue Knight",
			"Ability1": "sven_storm_bolt",
			"Ability2": "sven_great_cleave",
			"Ability3": "sven_warcry",
			"Ability4": "sven_gods_strength",
			"Armor": 2,
			"AttackPoint": 0.4,
			"AttackType": "Melee",
			"DamageMax": 43,
			"DamageMin": 41,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.0,
			"AgilityBase": 21,
			"IntelligenceBase": 16,
			"StrengthBase": 23,
			"IntelligenceGain": 1.3,
			"Type": "Strength",
			"StrengthGain": 2.7,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.6,
			"ProjectileSpeed": 0,
			"Team": "Radiant"
		},
		"techies": {
			"Name": "Techies",
			"LoreName": "Squee, Spleen, Spoon",
			"Aliases": ["tekiss"],
			"Ability1": "techies_land_mines",
			"Ability2": "techies_stasis_trap",
			"Ability3": "techies_suicide",
			//"Ability4": "techies_focused_detonate",
			//"Ability5": "techies_minefield_sign",
			"Ability4": "techies_remote_mines",
			"Ability5": "attribute_bonus",
			"AbilityLayout": 6,
			"Armor": 5,
			"AttackPoint": 0.5,
			"AttackType": "Ranged",
			"DamageMax": 9,
			"DamageMin": 7,
			"Range": 700,
			"AttackRate": 1.7,
			"AgilityGain": 1.3,
			"AgilityBase": 14,
			"IntelligenceBase": 22,
			"StrengthBase": 17,
			"IntelligenceGain": 2.9,
			"Type": "Intelligence",
			"StrengthGain": 2.0,
			"Enabled": 1,
			"MagicalResistance": 0.25,
			"MovementSpeed": 270,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"ManaRegeneration": 0.02,
			"Team": "Radiant"
		},
		"templar_assassin": {
			"Name": "Templar assassin",
			"LoreName": "Lanaya",
			"Aliases": ["ta", "futa", "trap"],
			"Ability1": "templar_assassin_refraction",
			"Ability2": "templar_assassin_meld",
			"Ability3": "templar_assassin_psi_blades",
			"Ability4": "templar_assassin_psionic_trap",
			"Ability5": "templar_assassin_trap",
			"Ability6": "attribute_bonus",
			"AbilityLayout": 5,
			"Armor": 1,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 36,
			"DamageMin": 30,
			"Range": 140,
			"AttackRate": 1.7,
			"AgilityGain": 2.7,
			"AgilityBase": 23,
			"IntelligenceBase": 20,
			"StrengthBase": 18,
			"IntelligenceGain": 2.0,
			"Type": "Agility",
			"StrengthGain": 2.1,
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.7,
			"ProjectileSpeed": 900,
			"Team": "Radiant"
		},
		"terrorblade": {
			"Name": "Terrorblade",
			"LoreName": "Demon Marauder",
			"Aliases": ["tb"],
			"Ability1": "terrorblade_reflection",
			"Ability2": "terrorblade_conjure_image",
			"Ability3": "terrorblade_metamorphosis",
			"Ability4": "terrorblade_sunder",
			"Armor": 7,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 32,
			"DamageMin": 26,
			"Range": 150,
			"AttackRate": 1.5,
			"AgilityGain": 3.2,
			"AgilityBase": 22,
			"IntelligenceBase": 19,
			"StrengthBase": 15,
			"IntelligenceGain": 1.75,
			"Type": "Agility",
			"StrengthGain": 1.4,
			"Enabled": 1,
			"MovementSpeed": 315,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"HealthRegeneration": 2.0,
			"Team": "Dire"
		},
		"tidehunter": {
			"Name": "Tidehunter",
			"LoreName": "Leviathan",
			"Ability1": "tidehunter_gush",
			"Ability2": "tidehunter_kraken_shell",
			"Ability3": "tidehunter_anchor_smash",
			"Ability4": "tidehunter_ravage",
			"Armor": 1,
			"AttackPoint": 0.6,
			"AttackType": "Melee",
			"DamageMax": 31,
			"DamageMin": 25,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 1.5,
			"AgilityBase": 15,
			"IntelligenceBase": 16,
			"StrengthBase": 22,
			"IntelligenceGain": 1.7,
			"Type": "Strength",
			"StrengthGain": 3.0,
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.4,
			"Team": "Dire"
		},
		"tinker": {
			"Name": "Tinker",
			"LoreName": "Boush",
			"Ability1": "tinker_laser",
			"Ability2": "tinker_heat_seeking_missile",
			"Ability3": "tinker_march_of_the_machines",
			"Ability4": "tinker_rearm",
			"Armor": 2,
			"AttackPoint": 0.35,
			"AttackType": "Ranged",
			"DamageMax": 28,
			"DamageMin": 22,
			"Range": 500,
			"AttackRate": 1.7,
			"StrengthBase": 17,
			"StrengthGain": 2.0,
			"AgilityBase": 13,
			"AgilityGain": 1.2,
			"IntelligenceBase": 30,
			"IntelligenceGain": 2.2,
			"Type": "Intelligence",
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.6,
			"ProjectileSpeed": 900,
			"Team": "Radiant"
		},
		"tiny": {
			"Name": "Tiny",
			"Ability1": "tiny_avalanche",
			"Ability2": "tiny_toss",
			"Ability3": "tiny_craggy_exterior",
			"Ability4": "tiny_grow",
			"Armor": -1,
			"AttackPoint": 0.49,
			"AttackType": "Melee",
			"DamageMax": 43,
			"DamageMin": 37,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 0.9,
			"AgilityBase": 9,
			"IntelligenceBase": 17,
			"StrengthBase": 26,
			"IntelligenceGain": 1.6,
			"Type": "Strength",
			"StrengthGain": 3.0,
			"Enabled": 1,
			"MovementSpeed": 285,
			"TurnRate": 0.5,
			"Team": "Radiant"
		},
		"treant": {
			"Name": "Treant Protector",
			"LoreName": "Rooftrellen",
			"Aliases": ["tree"],
			"Ability1": "treant_natures_guise",
			"Ability2": "treant_leech_seed",
			"Ability3": "treant_living_armor",
			"Ability4": "treant_eyes_in_the_forest",
			"Ability5": "treant_overgrowth",
			"Ability6": "attribute_bonus",
			"Armor": -1,
			"AttackPoint": 0.6,
			"AttackType": "Melee",
			"DamageMax": 70,
			"DamageMin": 62,
			"Range": 150,
			"AttackRate": 1.9,
			"AgilityGain": 2.0,
			"AgilityBase": 15,
			"IntelligenceBase": 17,
			"StrengthBase": 25,
			"IntelligenceGain": 1.8,
			"Type": "Strength",
			"StrengthGain": 3.3,
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.5,
			"Team": "Radiant"
		},
		"troll_warlord": {
			"Name": "Troll Warlord",
			"LoreName": "Jah'rakal",
			"Ability1": "troll_warlord_berserkers_rage",
			"Ability2": "troll_warlord_whirling_axes_ranged",
			//"Ability3": "troll_warlord_whirling_axes_melee",
			"Ability3": "troll_warlord_fervor",
			"Ability4": "troll_warlord_battle_trance",
			"Ability5": "attribute_bonus",
			"Armor": -1,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 35,
			"DamageMin": 17,
			"Range": 500,
			"AttackRate": 1.7,
			"StrengthBase": 20,
			"StrengthGain": 2.2,
			"AgilityBase": 21,
			"AgilityGain": 2.75,
			"IntelligenceBase": 13,
			"IntelligenceGain": 1.0,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.5,
			"ProjectileSpeed": 1200,
			"Team": "Radiant"
		},
		"tusk": {
			"Name": "Tusk",
			"LoreName": "Ymir",
			"Ability1": "tusk_ice_shards",
			"Ability2": "tusk_snowball",
			"Ability3": "tusk_frozen_sigil",
			//"Ability4": "tusk_launch_snowball",
			"Ability4": "tusk_walrus_punch",
			"Ability5": "tusk_walrus_kick",
			"Ability6": "attribute_bonus",
			"AbilityLayout": 5,
			"Armor": 0.0,
			"AttackPoint": 0.36,
			"AttackType": "Melee",
			"DamageMax": 31,
			"DamageMin": 27,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.1,
			"AgilityBase": 23,
			"IntelligenceBase": 18,
			"StrengthBase": 23,
			"IntelligenceGain": 1.7,
			"Type": "Strength",
			"StrengthGain": 2.3,
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.5,
			"Team": "Radiant"
		},
		"undying": {
			"Name": "Undying",
			"LoreName": "Almighty Dirge",
			"Ability1": "undying_decay",
			"Ability2": "undying_soul_rip",
			"Ability3": "undying_tombstone",
			"Ability4": "undying_flesh_golem",
			"Ability5": "attribute_bonus",
			"Armor": 2,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 43,
			"DamageMin": 35,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 22,
			"StrengthGain": 2.1,
			"AgilityBase": 10,
			"AgilityGain": 0.8,
			"IntelligenceBase": 27,
			"IntelligenceGain": 2.8,
			"Type": "Strength",
			"Enabled": 1,
			"MovementSpeed": 310,
			"TurnRate": 0.6,
			"Team": "Dire"
		},
		"ursa": {
			"Name": "Ursa",
			"LoreName": "Ulfsaar",
			"Ability1": "ursa_earthshock",
			"Ability2": "ursa_overpower",
			"Ability3": "ursa_fury_swipes",
			"Ability4": "ursa_enrage",
			"Armor": 3,
			"AttackPoint": 0.3,
			"AttackType": "Melee",
			"DamageMax": 31,
			"DamageMin": 27,
			"Range": 150,
			"AttackRate": 1.7,
			"AgilityGain": 2.1,
			"AgilityBase": 18,
			"IntelligenceBase": 16,
			"StrengthBase": 23,
			"IntelligenceGain": 1.5,
			"Type": "Agility",
			"StrengthGain": 2.7,
			"Enabled": 1,
			"MovementSpeed": 310,
			"TurnRate": 0.5,
			"HealthRegeneration": 0.75,
			"Team": "Radiant"
		},
		"vengefulspirit": {
			"Name": "Vengeful Spirit",
			"LoreName": "Shandelzare",
			"Ability1": "vengefulspirit_magic_missile",
			"Ability2": "vengefulspirit_wave_of_terror",
			"Ability3": "vengefulspirit_command_aura",
			"Ability4": "vengefulspirit_nether_swap",
			"Armor": 0,
			"AttackPoint": 0.33,
			"AttackType": "Ranged",
			"DamageMax": 26,
			"DamageMin": 12,
			"Range": 400,
			"AttackRate": 1.7,
			"StrengthBase": 18,
			"StrengthGain": 2.6,
			"AgilityBase": 27,
			"AgilityGain": 3.3,
			"IntelligenceBase": 13,
			"IntelligenceGain": 1.5,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 300,
			"TurnRate": 0.6,
			"ProjectileSpeed": 1500,
			"Team": "Radiant"
		},
		"venomancer": {
			"Name": "Venomancer",
			"LoreName": "Lesale Deathbringer",
			"Ability1": "venomancer_venomous_gale",
			"Ability2": "venomancer_poison_sting",
			"Ability3": "venomancer_plague_ward",
			"Ability4": "venomancer_poison_nova",
			"Armor": 0,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 21,
			"DamageMin": 19,
			"Range": 450,
			"AttackRate": 1.7,
			"StrengthBase": 18,
			"StrengthGain": 1.85,
			"AgilityBase": 22,
			"AgilityGain": 2.6,
			"IntelligenceBase": 17,
			"IntelligenceGain": 1.8,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 285,
			"TurnRate": 0.4,
			"ProjectileSpeed": 900,
			"HealthRegeneration": 0.25,
			"Team": "Dire"
		},
		"viper": {
			"Name": "Viper",
			"LoreName": "Netherdrake",
			"Aliases": ["boring"],
			"Ability1": "viper_poison_attack",
			"Ability2": "viper_nethertoxin",
			"Ability3": "viper_corrosive_skin",
			"Ability4": "viper_viper_strike",
			"Armor": -1,
			"AttackPoint": 0.33,
			"AttackType": "Ranged",
			"DamageMax": 25,
			"DamageMin": 23,
			"Range": 575,
			"AttackRate": 1.7,
			"StrengthBase": 20,
			"StrengthGain": 2.1,
			"AgilityBase": 21,
			"AgilityGain": 2.9,
			"IntelligenceBase": 15,
			"IntelligenceGain": 1.8,
			"Type": "Agility",
			"Enabled": 1,
			"MovementSpeed": 285,
			"TurnRate": 0.4,
			"ProjectileSpeed": 1200,
			"Team": "Dire"
		},
		"visage": {
			"Name": "Visage",
			"LoreName": "Necro'lic",
			"Ability1": "visage_grave_chill",
			"Ability2": "visage_soul_assumption",
			"Ability3": "visage_gravekeepers_cloak",
			"Ability4": "visage_summon_familiars",
			"Ability5": "attribute_bonus",
			"Armor": -2.0,
			"AttackPoint": 0.46,
			"AttackType": "Ranged",
			"DamageMax": 34,
			"DamageMin": 24,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 1.3,
			"AgilityBase": 11,
			"IntelligenceBase": 24,
			"StrengthBase": 22,
			"IntelligenceGain": 2.5,
			"Type": "Intelligence",
			"StrengthGain": 2.4,
			"Enabled": 1,
			"MagicalResistance": 0.10,
			"MovementSpeed": 285,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"warlock": {
			"Name": "Warlock",
			"LoreName": "Demnok Lannik",
			"Ability1": "warlock_fatal_bonds",
			"Ability2": "warlock_shadow_word",
			"Ability3": "warlock_upheaval",
			"Ability4": "warlock_rain_of_chaos",
			"Armor": 1,
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 32,
			"DamageMin": 22,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 1.0,
			"AgilityBase": 10,
			"IntelligenceBase": 24,
			"StrengthBase": 22,
			"IntelligenceGain": 2.7,
			"Type": "Intelligence",
			"StrengthGain": 2.5,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.4,
			"ProjectileSpeed": 1200,
			"Team": "Dire"
		},
		"weaver": {
			"Name": "Weaver",
			"LoreName": "Skitskurr",
			"Aliases": ["Nerubian Weaver"],
			"Ability1": "weaver_the_swarm",
			"Ability2": "weaver_shukuchi",
			"Ability3": "weaver_geminate_attack",
			"Ability4": "weaver_time_lapse",
			"Armor": -1,
			"AttackPoint": 0.64,
			"AttackType": "Ranged",
			"DamageMax": 51,
			"DamageMin": 41,
			"Range": 425,
			"AttackRate": 1.8,
			"AgilityGain": 2.5,
			"AgilityBase": 14,
			"IntelligenceBase": 15,
			"StrengthBase": 15,
			"IntelligenceGain": 1.8,
			"Type": "Agility",
			"StrengthGain": 1.5,
			"Enabled": 1,
			"MovementSpeed": 290,
			"TurnRate": 0.5,
			"ProjectileSpeed": 900,
			"Team": "Dire"
		},
		"windrunner": {
			"Name": "Windranger",
			"LoreName": "Lyralei",
			"Aliases": ["Windrunner"],
			"Ability1": "windrunner_shackleshot",
			"Ability2": "windrunner_powershot",
			"Ability3": "windrunner_windrun",
			"Ability4": "windrunner_focusfire",
			"Armor": -1,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 34,
			"DamageMin": 22,
			"Range": 600,
			"AttackRate": 1.5,
			"AgilityGain": 1.4,
			"AgilityBase": 17,
			"IntelligenceBase": 22,
			"StrengthBase": 15,
			"IntelligenceGain": 2.6,
			"Type": "Intelligence",
			"StrengthGain": 2.5,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.6,
			"ProjectileSpeed": 1250,
			"Team": "Radiant"
		},
		"winter_wyvern": {
			"Name": "Winter Wyvern",
			"LoreName": "Auroth",
			"Aliases": ["ww"],
			"Ability1": "winter_wyvern_arctic_burn",
			"Ability2": "winter_wyvern_splinter_blast",
			"Ability3": "winter_wyvern_cold_embrace",
			"Ability4": "winter_wyvern_winters_curse",
			"Ability5": "attribute_bonus",
			"Armor": -1,
			"AttackPoint": 0.25,
			"AttackType": "Ranged",
			"DamageMax": 20,
			"DamageMin": 13,
			"Range": 425,
			"AttackRate": 1.7,
			"AgilityGain": 1.9,
			"AgilityBase": 16,
			"IntelligenceBase": 25,
			"StrengthBase": 24,
			"IntelligenceGain": 3.1,
			"Type": "Intelligence",
			"StrengthGain": 2.1,
			"Enabled": 1,
			"MagicalResistance": 0.25,
			"MovementSpeed": 285,
			"TurnRate": 0.4,
			"ProjectileSpeed": 700,
			"Team": "Dire",
			"VisionDaytime": 1800,
			"VisionNighttime": 800
		},
		"wisp": {
			"Name": "IO",
			"LoreName": "Wisp",
			"Aliases": ["ball"],
			"Ability1": "wisp_tether",
			//"Ability2": "wisp_tether_break",
			"Ability2": "wisp_spirits",
			"Ability3": "wisp_overcharge",
			//"Ability5": "wisp_empty1",
			//"Ability6": "wisp_empty2",
			"Ability4": "wisp_relocate",
			"Ability5": "attribute_bonus",
			//"Ability9": "wisp_spirits_in",
			//"Ability10": "wisp_spirits_out",
			"AbilityLayout": 6,
			"Armor": -2.0,
			"AttackPoint": 0.15,
			"AttackType": "Ranged",
			"DamageMax": 35,
			"DamageMin": 26,
			"Range": 575,
			"AttackRate": 1.7,
			"AgilityGain": 1.6,
			"AgilityBase": 14,
			"IntelligenceBase": 23,
			"StrengthBase": 17,
			"IntelligenceGain": 1.7,
			"Type": "Strength",
			"StrengthGain": 1.9,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.7,
			"ProjectileSpeed": 1200,
			"Team": "Radiant"
		},
		"witch_doctor": {
			"Name": "Witch Doctor",
			"LoreName": "Zharvakko",
			"Aliases": ["wd"],
			"Ability1": "witch_doctor_paralyzing_cask",
			"Ability2": "witch_doctor_voodoo_restoration",
			"Ability3": "witch_doctor_maledict",
			"Ability4": "witch_doctor_death_ward",
			"Armor": -1,
			"AttackPoint": 0.4,
			"AttackType": "Ranged",
			"DamageMax": 37,
			"DamageMin": 27,
			"Range": 600,
			"AttackRate": 1.7,
			"AgilityGain": 1.4,
			"AgilityBase": 13,
			"IntelligenceBase": 24,
			"StrengthBase": 16,
			"IntelligenceGain": 2.9,
			"Type": "Intelligence",
			"StrengthGain": 1.8,
			"Enabled": 1,
			"MovementSpeed": 305,
			"TurnRate": 0.4,
			"ProjectileSpeed": 1200,
			"Team": "Dire"
		},
		"zuus": {
			"Name": "Zeus",
			"LoreName": "Lord of the Heaven",
			"Ability1": "zuus_arc_lightning",
			"Ability2": "zuus_lightning_bolt",
			"Ability3": "zuus_static_field",
			"Ability4": "zuus_thundergods_wrath",
			"Armor": 0,
			"AttackPoint": 0.633,
			"AttackType": "Ranged",
			"DamageMax": 29,
			"DamageMin": 21,
			"Range": 350,
			"AttackRate": 1.7,
			"AgilityGain": 1.2,
			"AgilityBase": 11,
			"IntelligenceBase": 20,
			"StrengthBase": 19,
			"IntelligenceGain": 2.7,
			"Type": "Intelligence",
			"StrengthGain": 2.3,
			"Enabled": 1,
			"MovementSpeed": 295,
			"TurnRate": 0.6,
			"ProjectileSpeed": 1100,
			"Team": "Radiant"
		},
		"arc_warden": {
			"Name": "Arc Warden",
			"LoreName": "Zet",
			"Ability1": "arc_warden_flux",
			"Ability2": "arc_warden_magnetic_field",
			"Ability3": "arc_warden_spark_wraith",
			"Ability4": "arc_warden_tempest_double",
			"AttackPoint": 0.3,
			"AttackType": "Ranged",
			"DamageMax": 39,
			"DamageMin": 29,
			"Range": 625,
			"ProjectileSpeed": 800,
			"AttackRate": 1.7,
			"AgilityBase": 15,
			"AgilityGain": 1.8,
			"StrengthBase": 24,
			"StrengthGain": 2.3,
			"IntelligenceBase": 24,
			"IntelligenceGain": 2.6,
			"Type": "Agility",
			"Enabled": 1,
			"Armor": -2,
			"MovementSpeed": 295,
			"TurnRate": 0.4,
			"Team": "Dire"
		},
		"abyssal_underlord": {
			"Name": "Underlord",
			"LoreName": "Vrogros",
			"Aliases": ["Abyssal Underlord"],
			"Enabled": 1,
			"Ability1": "abyssal_underlord_firestorm",
			"Ability2": "abyssal_underlord_pit_of_malice",
			"Ability3": "abyssal_underlord_atrophy_aura",
			"Ability4": "abyssal_underlord_dark_rift",
			"Ability5": "attribute_bonus",
			//"Ability5": "abyssal_underlord_cancel_dark_rift",
			"AttackPoint": 0.45,
			"AttackType": "Melee",
			"DamageMax": 43,
			"DamageMin": 37,
			"Range": 150,
			"AttackRate": 1.7,
			"StrengthBase": 25,
			"StrengthGain": 2.6,
			"AgilityBase": 12,
			"AgilityGain": 1.3,
			"IntelligenceBase": 17,
			"IntelligenceGain": 2.6,
			"Type": "Strength",
			"Armor": 2,
			"MovementSpeed": 305,
			"TurnRate": 0.6,
			"Team": "Dire"
		}
	},

	//
	//	Item definition
	//

	"Items": {
		"_base": {
			"Name": "NO-DISPLAY-NAME",
			"Cost": 0
		},
		/* Consumables */
		"clarity": {
			"Name": "Clarity",
			"Cost": 50,
			"Section": "Consumables",
			"SectionIndex": 0,
			"Charges": 1,
			"ChargesStack": true,
			"Consumable": true
		},
		"faerie_fire": {
			"Name": "Faerie fire",
			"Cost": 75,
			"Section": "Consumables",
			"SectionIndex": 1,
			"Damage": 2,
			"Consumable": true,
			"Cooldown": 5
		},
		"enchanted_mango": {
			"Name": "Enchanted Mango",
			"Cost": 125,
			"Section": "Consumables",
			"SectionIndex": 2,
			"Consumable": true,
			"HealthRegeneration": 1
		},
		"tango": {
			"Name": "Tango",
			"Cost": 125,
			"Section": "Consumables",
			"SectionIndex": 3,
			"Charges": 4,
			"ChargesStack": true,
			"Consumable": true
		},
		"salve": {
			"Name": "Salve",
			"Cost": 110,
			"Section": "Consumables",
			"SectionIndex": 4,
			"Charges": 1,
			"ChargesStack": true,
			"Consumable": true
		},
		"smoke_of_deceit": {
			"Name": "Smoke of Deceit",
			"Cost": 50,
			"Section": "Consumables",
			"SectionIndex": 5,
			"Charges": 1,
			"ChargesStack": true,
			"Consumable": true,
			"Cooldown": 1
		},
		"tpscroll": {
			"Name": "Town Portal Scroll",
			"Aliases": ["tp"],
			"Cost": 50,
			"Section": "Consumables",
			"SectionIndex": 6,
			"Charges": 1,
			"ChargesStack": true,
			"Consumable": true,
			"Cooldown": 70,
			"ManaCost": 75
		},
		"dust": {
			"Name": "Dust of Appearance",
			"Cost": 180,
			"Section": "Consumables",
			"SectionIndex": 7,
			"Charges": 2,
			"ChargesStack": true,
			"Consumable": true,
			"Cooldown": 30
		},
		"courier": {
			"Name": "Animal Courier",
			"Aliases": ["donkey", "chicken"],
			"Cost": 100,
			"Section": "Consumables",
			"SectionIndex": 8,
			"Charges": 1,
			"Consumable": true
		},
		"flying_courier": {
			"Name": "Flying Courier",
			"Aliases": ["crow"],
			"Cost": 150,
			"Section": "Consumables",
			"SectionIndex": 9,
			"Charges": 1,
			"ChargesStack": false,
			"Consumable": true
		},
		"ward_observer": {
			"Name": "Observer Ward",
			"Cost": 65,
			"Section": "Consumables",
			"SectionIndex": 10,
			"Charges": 1,
			"ChargesStack": true,
			"Consumable": true,
			"Cooldown": 1
		},
		"ward_sentry": {
			"Name": "Sentry Ward",
			"Cost": 200,
			"Section": "Consumables",
			"SectionIndex": 11,
			"Charges": 2,
			"ChargesStack": true,
			"Consumable": true,
			"Cooldown": 1
		},
		"tome_of_knowledge": {
			"Name": "Tome of Knowledge",
			"Cost": 150,
			"Section": "Consumables",
			"SectionIndex": 12,
			"Charges": 1,
			"ChargesStack": true,
			"Consumable": true
		},
		"bottle": {
			"Name": "Bottle",
			"Image": function(){
				if (this.Charges == 0)
					return "bottle_empty"
				if (this.Charges == 1)
					return "bottle_small"
				if (this.Charges == 2)
					return "bottle_medium"
				return "bottle"
			},
			"Cost": 660,
			"Section": "Consumables",
			"SectionIndex": 13,
			"Charges": 3,
			"ChargesMax": 3
		},

		/* Attributes */
		"branches": {
			"Name": "Iron branches",
			"Aliases": ["gg branch"],
			"Cost": 50,
			"Section": "Attributes",
			"SectionIndex": 0,
			"Strength": 1,
			"Agility": 1,
			"Intelligence": 1
		},
		"gauntlets": {
			"Name": "Gauntlets of Strength",
			"Cost": 150,
			"Section": "Attributes",
			"SectionIndex": 1,
			"Strength": 3
		},
		"slippers": {
			"Name": "Slippers of Agility",
			"Cost": 150,
			"Section": "Attributes",
			"SectionIndex": 2,
			"Agility": 3
		},
		"mantle": {
			"Name": "Mantle of Intelligence",
			"Cost": 150,
			"Section": "Attributes",
			"SectionIndex": 3,
			"Intelligence": 3
		},
		"circlet": {
			"Name": "Circlet",
			"Cost": 165,
			"Section": "Attributes",
			"SectionIndex": 4,
			"Strength": 2,
			"Agility": 2,
			"Intelligence": 2
		},
		"belt_of_strength": {
			"Name": "Belt of Strength",
			"Cost": 450,
			"Section": "Attributes",
			"SectionIndex": 5,
			"Strength": 6
		},
		"band_of_elvenskin": {
			"Name": "Band of Elvenskin",
			"Cost": 450,
			"Section": "Attributes",
			"SectionIndex": 6,
			"Agility": 6
		},
		"robe": {
			"Name": "Robe of the Magi",
			"Cost": 450,
			"Section": "Attributes",
			"SectionIndex": 7,
			"Intelligence": 6
		},
		"ogre_axe": {
			"Name": "Ogre Club",
			"Cost": 1000,
			"Section": "Attributes",
			"SectionIndex": 8,
			"Strength": 10
		},
		"blade_of_alacrity": {
			"Name": "Blade of Alacrity",
			"Cost": 1000,
			"Section": "Attributes",
			"SectionIndex": 9,
			"Agility": 10
		},
		"staff_of_wizardry": {
			"Name": "Staff of Wizardry",
			"Cost": 1000,
			"Section": "Attributes",
			"SectionIndex": 10,
			"Intelligence": 10
		},
		/* Armamaments */
		"ring_of_protection": {
			"Name": "Ring of Protection",
			"Aliases": ["rop"],
			"Cost": 175,
			"Section": "Armaments",
			"SectionIndex": 0,
			"Armor": 2
		},
		"stout_shield": {
			"Name": "Stout Shield",
			"Cost": 200,
			"Section": "Armaments",
			"SectionIndex": 1
		},
		"quelling_blade": {
			"Name": "Quelling blade",
			"Cost": 200,
			"Section": "Armaments",
			"SectionIndex": 2,
			"Cooldown": 4
		},
		"infused_raindrop": {
			"Name": "Infused Raindrop",
			"Cost": 225,
			"Section": "Armaments",
			"SectionIndex": 3,
			"Charges": 5,
			"ChargesStack": false,
			"ManaRegenerationFlat": 0.85,
			"Cooldown": 6,
		},
		"blight_stone": {
			"Name": "Blight Stone",
			"Cost": 300,
			"Section": "Armaments",
			"SectionIndex": 4
		},
		"orb_of_venom": {
			"Name": "Orb of Venom",
			"Aliases": ["oov"],
			"Cost": 275,
			"Section": "Armaments",
			"SectionIndex": 5
		},
		"blades_of_attack": {
			"Name": "Blades of Attack",
			"Cost": 420,
			"Section": "Armaments",
			"SectionIndex": 6,
			"Damage": 9
		},
		"chainmail": {
			"Name": "Chainmail",
			"Cost": 550,
			"Section": "Armaments",
			"SectionIndex": 7,
			"Armor": 5
		},
		"quarterstaff": {
			"Name": "Quarterstaff",
			"Cost": 875,
			"Section": "Armaments",
			"SectionIndex": 8,
			"Damage": 10,
			"AttackSpeed": 10
		},
		"helm_of_iron_will": {
			"Name": "Helm of Iron Will",
			"Cost": 900,
			"Section": "Armaments",
			"SectionIndex": 9,
			"Armor": 5,
			"HealthRegeneration": 3
		},
		"broadsword": {
			"Name": "Broadsword",
			"Cost": 1200,
			"Section": "Armaments",
			"SectionIndex": 10,
			"Damage": 18
		},
		"claymore": {
			"Name": "Claymore",
			"Cost": 1400,
			"Section": "Armaments",
			"SectionIndex": 11,
			"Damage": 21
		},
		"javelin": {
			"Name": "Javelin",
			"Cost": 1500,
			"Section": "Armaments",
			"SectionIndex": 12,
			"Damage": 10
		},
		"mithril_hammer": {
			"Name": "Mithril Hammer",
			"Cost": 1600,
			"Section": "Armaments",
			"SectionIndex": 13,
			"Damage": 24
		},
		/* Arcane */
		"wind_lace": {
			"Name": "Wind Lace",
			"Cost": 235,
			"Section": "Arcane",
			"SectionIndex": 0,
			"MovementSpeed": 235
		},
		"magic_stick": {
			"Name": "Magic Stick",
			"Cost": 200,
			"Section": "Arcane",
			"SectionIndex": 1,
			"Charges": 0,
			"ChargesMax": 10,
			"Cooldown": 13
		},
		"sobi_mask": {
			"Name": "Sage's mask",
			"Aliases": ["sobi mask"],
			"Cost": 325,
			"Section": "Arcane",
			"SectionIndex": 2,
			"ManaRegenerationPercentage": 0.5
		},
		"ring_of_regen": {
			"Name": "Ring of Regen",
			"Cost": 325,
			"Section": "Arcane",
			"SectionIndex": 3,
			"HealthRegeneration": 3,
		},
		"boots": {
			"Name": "Boots of Speed",
			"Cost": 400,
			"Section": "Arcane",
			"SectionIndex": 4,
			"Family": { "Name": "Boots", "Level": 45, "Stats": { "MovementSpeed": 45 } },
		},
		"gloves_of_haste": {
			"Name": "Gloves of Haste",
			"Cost": 500,
			"Section": "Arcane",
			"SectionIndex": 5,
			"AttackSpeed": 20
		},
		"cloak": {
			"Name": "Cloak",
			"Cost": 550,
			"Section": "Arcane",
			"SectionIndex": 6,
			"MagicalResistance": 0.15
		},
		"ring_of_health": {
			"Name": "Ring of Health",
			"Cost": 850,
			"Section": "Arcane",
			"SectionIndex": 7,
			"HealthRegeneration": 6
		},
		"void_stone": {
			"Name": "Void Stone",
			"Cost": 850,
			"Section": "Arcane",
			"SectionIndex": 8,
		},
		"gem": {
			"Name": "Gem of True Sight",
			"Cost": 900,
			"Section": "Arcane",
			"SectionIndex": 9
			//"Aura": "true_sight"
		},
		"lifesteal": {
			"Name": "Morbid Mask",
			"Cost": 900,
			"Section": "Arcane",
			"SectionIndex": 10
			//"UniqueAttackModifier": "lifesteal_15"
		},
		"shadow_amulet": {
			"Name": "Shadow Amulet",
			"Cost": 1300,
			"Section": "Arcane",
			"SectionIndex": 11,
			"AttackSpeed": 20,
			"Cooldown": 10
		},
		"ghost": {
			"Name": "Ghost Scepter",
			"Cost": 1500,
			"Section": "Arcane",
			"SectionIndex": 12,
			"Strength": 5,
			"Agility": 5,
			"Intelligence": 5,
			"Cooldown": 25
		},
		"blink": {
			"Name": "Blink Dagger",
			"Cost": 2250,
			"Section": "Arcane",
			"SectionIndex": 13,
			"Cooldown": 12
		},
		/* Common */
		"magic_wand": {
			"Name": "Magic Wand",
			"Cost": 465,
			"Components": ["magic_stick", "branches", "branches", "circlet"],
			"Section": "Common",
			"SectionIndex": 0,
			"Strength": 4,
			"Agility": 4,
			"Intelligence": 4,
			"Charges": 0,
			"ChargesMax": 17,
			"Cooldown": 13
		},
		"null_talisman": {
			"Name": "Null talisman", //con fuckign gratis you can buy null talis
			"Cost": 470,
			"Components": ["circlet", "mantle", 155],
			"Section": "Common",
			"SectionIndex": 1,
			"Strength": 3,
			"Agility": 3,
			"Intelligence": 6,
			"Damage": 3
		},
		"wraith_band": {
			"Name": "Wraith band",
			"Cost": 485,
			"Components": ["circlet", "slippers", 170],
			"Section": "Common",
			"SectionIndex": 2,
			"Strength": 3,
			"Agility": 6,
			"Intelligence": 3,
			"Damage": 3
		},
		"poor_mans_shield": {
			"Name": "Poor Man's Shield",
			"Aliases": ["pms"],
			"Cost": 500,
			"Components": ["stout_shield", "slippers", "slippers"],
			"Section": "Common",
			"SectionIndex": 3,
			"Agility": 6
		},
		"bracer": {
			"Name": "Bracer",
			"Cost": 525,
			"Components": ["circlet", "gauntlets", 210],
			"Section": "Common",
			"SectionIndex": 4,
			"Strength": 6,
			"Agility": 3,
			"Intelligence": 3,
			"Damage": 3
		},
		"soul_ring": {
			"Name": "Soul ring",
			"Cost": 775,
			"Components": ["ring_of_regen", "sobi_mask", 125],
			"Section": "Common",
			"SectionIndex": 5,
			"HealthRegeneration": 3,
			"ManaRegenerationPercentage": 0.5,
			"Cooldown": 30
		},
		"phase_boots": {
			"Name": "Phase Boots",
			"Cost": 1240,
			"Components": ["boots", "blades_of_attack", "blades_of_attack"],
			"Section": "Common",
			"SectionIndex": 6,
			"Family": { "Name": "Boots", "Level": 45, "Stats": { "MovementSpeed": 45 } },
			"Damage": 24,
			"Buff": {
				"NoTarget": true,
				"Self": "phase_boots_buff",
				"Refresh": "leave"
			},
			"Cooldown": 8
		},
		"power_treads_strength": {
			"Name": "Power Treads (Strength)",
			"Cost": 1350,
			"Components": ["boots", "belt_of_strength", "gloves_of_haste"],
			"Section": "Common",
			"SectionIndex": 7,
			"Family": { "Name": "Boots", "Level": 45, "Stats": { "MovementSpeed": 45 } },
			"Strength": 9,
			"AttackSpeed": 25
		},
		"power_treads_agility": {
			"Name": "Power Treads (Agility)",
			"Cost": 1350,
			"Components": ["boots", "band_of_elvenskin", "gloves_of_haste"],
			"Section": "Unlisted",
			"Family": { "Name": "Boots", "Level": 45, "Stats": { "MovementSpeed": 45 } },
			"Agility": 9,
			"AttackSpeed": 25
		},
		"power_treads_intelligence": {
			"Name": "Power Treads (Intelligence)",
			"Cost": 1350,
			"Components": ["boots", "mantle", "gloves_of_haste"],
			"Section": "Unlisted",
			"Family": { "Name": "Boots", "Level": 45, "Stats": { "MovementSpeed": 45 } },
			"Intelligence": 9,
			"AttackSpeed": 25
		},
		"oblivion_staff": {
			"Name": "Oblivion Staff",
			"Cost": 1650,
			"Components": ["quarterstaff", "robe", "sobi_mask"],
			"Section": "Common",
			"SectionIndex": 8,
			"Intelligence": 6,
			"AttackSpeed": 10,
			"Damage": 15,
			"ManaRegenerationPercentage": 0.75
		},
		"pers": {
			"Name": "Perseverance",
			"Cost": 1700,
			"Components": ["ring_of_health", "void_stone"],
			"Disassemble": true,
			"Section": "Common",
			"SectionIndex": 9,
			"HealthRegeneration": 6,
			"ManaRegenerationPercentage": 1.25,
			"Damage": 10
		},
		"hand_of_midas": {
			"Name": "Hand of Midas",
			"Cost": 2050,
			"Components": ["gloves_of_haste", 1550],
			"Section": "Common",
			"SectionIndex": 10,
			"AttackSpeed": 30,
			"Cooldown": 100
		},
		"travel_boots": {
			"Name": "Boots of Travel",
			"Aliases": ["bot"],
			"Cost": 2400,
			"Components": ["boots", 2000],
			"Section": "Common",
			"SectionIndex": 11,
			"Family": { "Name": "Boots", "Level": 100, "Stats": { "MovementSpeed": 100 } },
			"Cooldown": 45,
			"ManaCost": 75
		},
		"travel_boots_2": {
			"Name": "Boots of Travel",
			"Aliases": ["bot"],
			"Cost": 4400,
			"Components": ["travel_boots", 2000],
			"Section": "Unlisted",
			"Family": { "Name": "Boots", "Level": 100, "Stats": { "MovementSpeed": 100 } },
			"Cooldown": 45,
			"ManaCost": 75
		},
		"moon_shard": {
			"Name": "Moon Shard",
			"Cost": 4000,
			"Components": ["hyperstone", "hyperstone"],
			"Section": "Common",
			"SectionIndex": 12,
			"AttackSpeed": 120,
			"Buff": {
				"Name": "moon_shard_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "leave"
			}
		},
		/* Support */
		"ring_of_basilius": {
			"Name": "Ring of Basilius",
			"Aliases": ["rob"],
			"Cost": 500,
			"Components": ["ring_of_protection", "sobi_mask"],
			"Disassemble": true,
			"Section": "Support",
			"SectionIndex": 0,
			"Damage": 7,
			"Aura": "ring_of_basilius_aura"
		},
		"iron_talon": {
			"Name": "Iron talon",
			"Cost": 500,
			"Components": ["ring_of_protection", "quelling_blade", 125],
			"Section": "Support",
			"SectionIndex": 1,
			"Armor": 2,
			"Cooldown": 14
		},
		"headdress": {
			"Name": "Headress",
			"Cost": 575,
			"Components": ["ring_of_regen", "branches", 200],
			"Section": "Support",
			"SectionIndex": 2,
			"Strength": 2,
			"Agility": 2,
			"Intelligence": 2,
			"Aura": "headdress_aura"
		},
		"buckler": {
			"Name": "Buckler",
			"Cost": 800,
			"Components": ["chainmail", "branches", 200],
			"Section": "Support",
			"SectionIndex": 3,
			"Strength": 2,
			"Agility": 2,
			"Intelligence": 2,
			"Armor": 5,
			"Buff": {
				"Name": "buckler_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "leave"
			},
			"Cooldown": 25,
			"ManaCost": 10
		},
		"urn_of_shadows": {
			"Name": "Urn of Shadows",
			"Cost": 875,
			"Components": ["sobi_mask", "gauntlets", "gauntlets", 250],
			"Section": "Support",
			"SectionIndex": 4,
			"Strength": 6,
			"ManaRegenerationPercentage": 0.5,
			"Cooldown": 7
		},
		"tranquil_boots": {
			"Name": "Tranquil Boots",
			"Cost": 900,
			"Components": ["boots", "ring_of_protection", "ring_of_regen"],
			"Section": "Support",
			"SectionIndex": 5,
			"Family": { "Name": "Boots", "Level": 85, "Stats": { "MovementSpeed": 85 } },
			"Armor": 3,
			"HealthRegeneration": 12,
			"Cooldown": 13
		},
		"tranquil_boots_active": {
			"Name": "Tranquil Boots",
			"Cost": 900,
			"Components": ["boots", "ring_of_protection", "ring_of_regen"],
			"Section": "Unlisted",
			"Family": { "Name": "Boots", "Level": 55, "Stats": { "MovementSpeed": 55 } },
			"Armor": 3
		},
		"ring_of_aquila": {
			"Name": "Ring of Aquila",
			"Aliases": ["roa"],
			"Cost": 985,
			"Components": ["wraith_band", "ring_of_basilius"],
			"Disassemble": true,
			"Section": "Support",
			"SectionIndex": 6,
			"Damage": 10,
			"Strength": 3,
			"Agility": 9,
			"Intelligence": 3,
			"Aura": "ring_of_aquila_aura"
		},
		"medallion_of_courage": {
			"Name": "Medallion of Courage",
			"Cost": 1175,
			"Components": ["chainmail", "sobi_mask", "blight_stone"],
			"Section": "Support",
			"SectionIndex": 7,
			"Armor": 7,
			"ManaRegenerationPercentage": 0.5,
			"Buff": {
				"NoTarget": true,
				"Self": "medallion_of_courage_debuff",
				"Teammates": "medallion_of_courage_buff",
				"Refresh": "leave"
			},
			"Cooldown": 7
		},
		"arcane_boots": {
			"Name": "Arcane Boots",
			"Aliases": ["mana boots", "mb"],
			"Cost": 1300,
			"Components": ["boots", "energy_booster"],
			"Disassemble": true,
			"Section": "Support",
			"SectionIndex": 8,
			"Family": { "Name": "Boots", "Level": 50, "Stats": { "MovementSpeed": 50 } },
			"Mana": 250,
			"Cooldown": 55
		},
		"ancient_janggo": {
			"Name": "Drums of Endurance",
			"Cost": 1785,
			"Components": ["bracer", "ring_of_regen", "wind_lace", 700],
			"Charges": 6,
			"ChargesMax": 6,
			"Section": "Support",
			"SectionIndex": 9,
			"Strength": 6,
			"Agility": 3,
			"Intelligence": 9,
			"Damage": 3,
			"HealthRegeneration": 3,
			"Aura": "ancient_janggo_aura",
			"Buff": {
				"Name": "ancient_janggo_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "leave"
			},
			"Cooldown": 30
		},
		"mekansm": {
			"Name": "Mekansm",
			"Aliases": ["mechanism", "mekanism"],
			"Cost": 2275,
			"Components": ["headress", "buckler", 900],
			"Section": "Support",
			"SectionIndex": 10,
			"Strength": 5,
			"Agility": 5,
			"Intelligence": 5,
			"Armor": 5,
			"Aura": "mekansm_aura",
			"Buff": {
				"Name": "mekansm_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "leave"
			},
			"Cooldown": 65,
			"ManaCost": 225
		},
		"vladmir": {
			"Name": "Vladmir's Offering",
			"Aliases": ["vladmirs offering", "vladimirs"],
			"Cost": 2275,
			"Components": ["ring_of_basilius", "headdress", "lifesteal", 300],
			"Section": "Support",
			"SectionIndex": 11,
			"Strength": 2,
			"Agility": 2,
			"Intelligence": 2,
			"Aura": "vladmirs_aura"
		},
		"pipe": {
			"Name": "Pipe of Insight",
			"Cost": 3100,
			"Components": ["hood_of_defiance", "headdress", 800],
			"Section": "Support",
			"SectionIndex": 12,
			"HealthRegeneration": 9,
			"MagicalResistance": 0.3,
			"Aura": "pipe_aura",
			"Cooldown": 60,
			"ManaCost": 100
		},
		"guardian_greaves": {
			"Name": "Guardian Greaves",
			"Cost": 5275,
			"Components": ["mekansm", "arcane_boots", 1700],
			"Section": "Support",
			"SectionIndex": 13,
			"MovementSpeed": 55,
			"Mana": 250,
			"Strength": 5,
			"Agility": 5,
			"Intelligence": 5,
			"Armor": 5,
			"Aura": "guardian_greaves_aura",
			"Cooldown": 40
		},

		/* Caster */
		"glimmer_cape": {
			"Name": "Glimmer Cape",
			"Cost": 1950,
			"Components": ["shadow_amulet", "hood"],
			"Disassemble": true,
			"Section": "Caster",
			"SectionIndex": 0,
			"AttackSpeed": 20,
			"MagicalResistance": 0.15,
			"Buff": {
				"Name": "glimmer_cape_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "leave"
			},
			"Cooldown": 16,
			"ManaCost": 90
		},
		"force_staff": {
			"Name": "Force Staff",
			"Aliases": ["fs"],
			"Cost": 2225,
			"Components": ["staff_of_wizardry", "ring_of_regen", 900],
			"Section": "Caster",
			"SectionIndex": 1,
			"Intelligence": 10,
			"HealthRegeneration": 4,
			"Cooldown": 20,
			"ManaCost": 25
		},
		"veil_of_discord": {
			"Name": "Veil of Discord",
			"Aliases": ["vod"],
			"Cost": 2240,
			"Components": ["helm_of_iron_will", "null_talisman", "null_talisman", 400],
			"Section": "Caster",
			"SectionIndex": 2,
			"HealthRegeneration": 6,
			"Armor": 6,
			"Strength": 6,
			"Agility": 6,
			"Intelligence": 12,
			"Damage": 6,
			"Cooldown": 20,
			"ManaCost": 50
		},
		"aether_lens": {
			"Name": "Aether lens",
			"Cost": 2300,
			"Components": ["energy_booster", "ring_of_health", 550],
			"Section": "Caster",
			"SectionIndex": 3,
			"Mana": 250,
			"HealthRegeneration": 8,
			"RangeCasting": 200,
			"MagicalAmplification": 0.05
		},
		"necronomicon": {
			"Name": "Necronomicon",
			"Cost": 2650,
			"Components": ["staff_of_wizardry", "belt_of_strength", 1200],
			"Section": "Caster",
			"SectionIndex": 4,
			"Strength": 8,
			"Intelligence": 15,
			"Cooldown": 95,
			"ManaCost": 50
		},
		"necronomicon_2": {
			"Name": "Necronomicon II",
			"Cost": 3850,
			"Components": ["necronomicon", 1200],
			"Section": "Unlisted",
			"Strength": 12,
			"Intelligence": 21,
			"Cooldown": 95,
			"ManaCost": 50
		},
		"necronomicon_3": {
			"Name": "Necronomicon III",
			"Cost": 5050,
			"Components": ["necronomicon_2", 1200],
			"Section": "Unlisted",
			"Strength": 16,
			"Intelligence": 24,
			"Cooldown": 95,
			"ManaCost": 50
		},
		"dagon": {
			"Name": "Dagon",
			"Cost": 2720,
			"Components": ["staff_of_wizardry", "null_talisman", 1250],
			"Section": "Caster",
			"SectionIndex": 5,
			"Strength": 3,
			"Agility": 3,
			"Intelligence": 16,
			"Damage": 9,
			"Cooldown": 35,
			"ManaCost": 180
		},
		"dagon_2": {
			"Name": "Dagon II",
			"Cost": 3970,
			"Components": ["dagon", 1250],
			"Section": "Unlisted",
			"Agility": 3,
			"Intelligence": 19,
			"Damage": 9,
			"Cooldown": 30,
			"ManaCost": 180
		},
		"dagon_3": {
			"Name": "Dagon III",
			"Cost": 5220,
			"Components": ["dagon_2", 1250],
			"Section": "Unlisted",
			"Strength": 3,
			"Agility": 3,
			"Intelligence": 22,
			"Damage": 9,
			"Cooldown": 25,
			"ManaCost": 180
		},
		"dagon_4": {
			"Name": "Dagon IV",
			"Cost": 6470,
			"Components": ["dagon_3", 1250],
			"Section": "Unlisted",
			"Strength": 3,
			"Agility": 3,
			"Intelligence": 25,
			"Damage": 9,
			"Cooldown": 20,
			"ManaCost": 180
		},
		"dagon_5": {
			"Name": "Dagon V",
			"Cost": 7720,
			"Components": ["dagon_4", 1250],
			"Section": "Unlisted",
			"Strength": 3,
			"Agility": 3,
			"Intelligence": 28,
			"Damage": 9,
			"Cooldown": 15,
			"ManaCost": 180
		},
		"cyclone": {
			"Name": "Eul's Scepter of Divinity",
			"Aliases": ["cyclone", "euls"],
			"Cost": 2735,
			"Components": ["staff_of_wizardry", "wind_lace", "void_stone", 650],
			"Section": "Caster",
			"SectionIndex": 6,
			"Intelligence": 10,
			"ManaRegenerationPercentage": 1.5,
			"MovementSpeed": 40,
			"Cooldown": 23,
			"ManaCost": 175
		},
		"solar_crest": {
			"Name": "Solar Crest",
			"Cost": 2875,
			"Components": ["medallion_of_courage", "talisman_of_evasion"],
			"Disassemble": true,
			"Section": "Caster",
			"SectionIndex": 7,
			"Armor": 10,
			"ManaRegenerationPercentage": 0.75,
			"Evasion": 0.25,
			"Buff": {
				"NoTarget": true,
				"Self": "solar_crest_debuff_self",
				"Teammates": "solar_crest_buff",
				"Refresh": "leave"
			},
			"Cooldown": 7
		},
		"rod_of_atos": {
			"Name": "Rod of Atos",
			"Cost": 3100,
			"Components": ["staff_of_wizardry", "staff_of_wizardry", 1100],
			"Section": "Caster",
			"SectionIndex": 8,
			"Intelligence": 30,
			"Health": 350,
			"Cooldown": 10,
			"ManaCost": 50
		},
		"orchid": {
			"Name": "Orchid Malevolence",
			"Cost": 4075,
			"Components": ["oblivion_staff", "oblivion_staff", 775],
			"Section": "Caster",
			"SectionIndex": 9,
			"Intelligence": 25,
			"ManaRegenerationPercentage": 1.5,
			"Damage": 30,
			"AttackSpeed": 30,
			"Cooldown": 18,
			"ManaCost": 100
		},
		"ultimate_scepter": {
			"Name": "Aghanim's Scepter",
			"Aliases": ["ultimate"],
			"Cost": 4200,
			"Components": ["point_booster", "ogre_club", "blade_of_alacrity", "staff_of_wizardry"],
			"Section": "Caster",
			"SectionIndex": 10,
			"Strength": 10,
			"Agility": 10,
			"Intelligence": 10,
			"Health": 175,
			"Mana": 175,
			"Buff": {
				"Name": "ultimate_scepter_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "leave"
			},
			"HasAghanims": true
		},
		"refresher": {
			"Name": "Refresher Orb",
			"Cost": 5200,
			"Components": ["pers", "pers", 1800],
			"Section": "Caster",
			"SectionIndex": 11,
			"Damage": 20,
			"HealthRegeneration": 12,
			"ManaRegenerationPercentage": 2.5,
			"Cooldown": 195,
			"ManaCost": 375
		},
		"sheepstick": {
			"Name": "Scythe of Vyse",
			"Aliases": ["hex", "sheepstick"],
			"Cost": 5650,
			"Components": ["mystic_staff", "ultimate_orb", "void_stone"],
			"Section": "Caster",
			"SectionIndex": 12,
			"Strength": 10,
			"Agility": 10,
			"Intelligence": 35,
			"ManaRegenerationPercentage": 1.5,
			"Cooldown": 25,
			"ManaCost": 100
		},
		"octarine_core": {
			"Name": "Octarine Core",
			"Cost": 5900,
			"Components": ["mystic_staff", "soul_booster"],
			"Section": "Caster",
			"SectionIndex": 13,
			"Intelligence": 25,
			"Health": 425,
			"Mana": 425,
			"ManaRegenerationPercentage": 0.5,
			"CooldownReduction": 0.25
		},
		/* Weapons */
		"lesser_crit": {
			"Name": "Crystalys",
			"Cost": 2120,
			"Components": ["broadsword", "blades_of_attack", 500],
			"Section": "Weapons",
			"SectionIndex": 0,
			"Damage": 30
		},
		"armlet": {
			"Name": "Armlet of Mordiggian",
			"Cost": 2370,
			"Components": ["helm_of_iron_will", "gloves_of_haste", "blades_of_attack", 550],
			"Section": "Weapons",
			"SectionIndex": 1,
			"HealthRegeneration": 7,
			"Damage": 9,
			"Armor": 5,
			"AttackSpeed": 25,
			"Buff": {
				"NoTarget": true,
				"Self": "armlet_buff",
				"Refresh": "leave"
			}
		},
		"invis_sword": {
			"Name": "Shadow Blade",
			"Aliases": ["lothars edge", "lothar's edge", "invis", "sb"],
			"Cost": 2700,
			"Components": ["shadow_amulet", "claymore"],
			"Section": "Weapons",
			"SectionIndex": 2,
			"Damage": 22,
			"AttackSpeed": 30,
			"Cooldown": 28,
			"ManaCost": 75
		},
		"basher": {
			"Name": "Skull Basher",
			"Cost": 2950,
			"Components": ["javelin", "belt_of_strength", 750],
			"Section": "Weapons",
			"SectionIndex": 3,
			"Strength": 10,
			"Damage": 10,
			"Cooldown": 2
		},
		"bfury": {
			"Name": "Battlefury",
			"Aliases": ["bfury"],
			"Cost": 4500,
			"Components": ["claymore", "broadsword", "pers", "quelling_blade"],
			"Section": "Weapons",
			"SectionIndex": 4,
			"HealthRegeneration": 6,
			"ManaRegenerationPercentage": 1.5,
			"Damage": 55,
			"Cooldown": 4
		},
		"ethereal_blade": {
			"Name": "Ethereal Blade",
			"Aliases": ["eb"],
			"Cost": 4700,
			"Components": ["ghost", "eagle"],
			"Disassemble": true,
			"Section": "Weapons",
			"SectionIndex": 5,
			"Strength": 10,
			"Agility": 40,
			"Intelligence": 10,
			"Cooldown": 20,
			"ManaCost": 100
		},
		"silver_edge": {
			"Name": "Silver Edge",
			"Aliases": ["invis", "sb", "shadow blade"],
			"Cost": 4800,
			"Components": ["invis_sword", "ultimate_orb", 300],
			"Section": "Weapons",
			"SectionIndex": 6,
			"Strength": 15,
			"Agility": 15,
			"Intelligence": 15,
			"Damage": 30,
			"AttackSpeed": 30,
			"Cooldown": 24,
			"ManaCost": 75
		},
		"radiance": {
			"Name": "Radiance",
			"Cost": 5150,
			"Components": ["sacred_relic", 1350],
			"Section": "Weapons",
			"SectionIndex": 7,
			"Damage": 65
		},
		"radiance_inactive": {
			"Name": "Radiance",
			"Cost": 5150,
			"Components": ["sacred_relic", 1350],
			"Damage": 65
		},
		"monkey_king_bar": {
			"Name": "Monkey King Bar",
			"Aliases": ["mkb"],
			"Cost": 5400,
			"Components": ["javelin", "javelin", "demon_edge"],
			"Section": "Weapons",
			"SectionIndex": 8,
			"Damage": 66,
			"AttackSpeed": 15
		},
		"greater_crit": {
			"Name": "Daedalus",
			"Cost": 5520,
			"Components": ["lesser_crit", "demon_edge", 1000],
			"Section": "Weapons",
			"SectionIndex": 9,
			"Damage": 81
		},
		"butterfly": {
			"Name": "Butterfly",
			"Aliases": ["bfly"],
			"Cost": 5775,
			"Components": ["eagle", "talisman_of_evasion", "quarterstaff"],
			"Section": "Weapons",
			"SectionIndex": 10,
			"Agility": 35,
			"Damage": 30,
			"AttackSpeed": 30,
			"Evasion": 0.35,
			"Buff": {
				"NoTarget": true,
				"Self": "butterfly_buff",
				"Refresh": "leave"
			},
			"Cooldown": 25
		},
		"rapier": {
			"Name": "Divine Rapier",
			"Cost": 6200,
			"Components": ["sacred_relic", "demon_edge"],
			"Section": "Weapons",
			"SectionIndex": 11,
			"Damage": 330
		},
		"abyssal_blade": {
			"Name": "Abyssal Blade",
			"Cost": 6750,
			"Components": ["vanguard", "basher", 1550],
			"Disassemble": true,
			"Section": "Weapons",
			"SectionIndex": 12,
			"Strength": 10,
			"Damage": 10,
			"Health": 250,
			"HealthRegeneration": 15,
			"Cooldown": 35,
			"ManaCost": 75
		},
		"bloodthorn": {
			"Name": "Bloodthorn",
			"Cost": 7195,
			"Components": ["orchid", "lesser_crit", 1000],
			"Section": "Weapons",
			"SectionIndex": 13,
			"Intelligence": 25,
			"AttackSpeed": 30,
			"Damage": 60,
			"ManaRegenerationPercentage": 1.5,
			"Cooldown": 11,
			"ManaCost": 100
		},
		/* Armor */
		"hood_of_defiance": {
			"Name": "Hood of Defiance",
			"Cost": 1725,
			"Components": ["ring_of_health", "cloak", "ring_of_regen"],
			"Section": "Armor",
			"SectionIndex": 0,
			"HealthRegeneration": 9,
			"MagicalResistance": 0.3,
			"Cooldown": 60,
			"ManaCost": 75
		},
		"vanguard": {
			"Name": "Vanguard",
			"Cost": 2150,
			"Components": ["ring_of_health", "vitality_booster", "stout_shield"],
			"Section": "Armor",
			"SectionIndex": 1,
			"Health": 250,
			"HealthRegeneration": 8
		},
		"blade_mail": {
			"Name": "Blade Mail",
			"Cost": 2200,
			"Components": ["broadsword", "chainmail", "robe"],
			"Section": "Armor",
			"SectionIndex": 2,
			"Intelligence": 10,
			"Damage": 22,
			"Armor": 6,
			"Cooldown": 18,
			"ManaCost": 25
		},
		"soul_booster": {
			"Name": "Soul booster",
			"Cost": 3200,
			"Components": ["point_booster", "vitality_booster", "energy_booster"],
			"Section": "Armor",
			"SectionIndex": 3,
			"Health": 425,
			"Mana": 425,
			"ManaRegenerationPercentage": 0.5
		},
		"crimson_guard": {
			"Name": "Crimson Guard",
			"Cost": 3550,
			"Components": ["vanguard", "buckler", 600],
			"Section": "Armor",
			"SectionIndex": 4,
			"Strength": 2,
			"Agility": 2,
			"Intelligence": 2,
			"Health": 250,
			"HealthRegeneration": 8,
			"Armor": 5,
			"Buff": {
				"Name": "crimson_guard_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "leave"
			},
			"Cooldown": 46
		},
		"black_king_bar": {
			"Name": "Black King Bar",
			"Aliases": ["bkb"],
			"Cost": 3975,
			"Components": ["ogre_club", "mythril_hammer", 1375],
			"Section": "Armor",
			"SectionIndex": 5,
			"Level": 1,
			"LevelMin": 1,
			"LevelMax": 6,
			"Strength": 10,
			"Damage": 24,
			"Cooldown": function(){ return 85 - 5 * this.Level },
			"Buff": {
				"NoTarget": true,
				"Self": "black_king_bar_buff",
				"Refresh": "override"
			}
		},
		"lotus_orb": {
			"Name": "Lotus Orb",
			"Aliases": ["ls"],
			"Cost": 4000,
			"Components": ["pers", "platemail", "energy_booster"],
			"Disassemble": true,
			"Section": "Armor",
			"SectionIndex": 6,
			"HealthRegeneration": 6,
			"ManaRegenerationPercentage": 1.25,
			"Damage": 10,
			"Armor": 10,
			"Mana": 250,
			"Cooldown": 15,
			"ManaCost": 75
		},
		"shivas_guard": {
			"Name": "Shiva's Guard",
			"Cost": 4700,
			"Components": ["mystic_staff", "platemail", 600],
			"Disassemble": true,
			"Section": "Armor",
			"SectionIndex": 7,
			"Intelligence": 30,
			"Armor": 15,
			"Cooldown": 30,
			"ManaCost": 100
		},
		"bloodstone": {
			"Name": "Bloodstone",
			"Aliases": ["bs"],
			"Cost": 4875,
			"Components": ["soul_booster", "soul_ring", 900],
			"Section": "Armor",
			"SectionIndex": 8,
			"Health": 475,
			"HealthRegeneration": 9,
			"Mana": 425,
			"ManaRegenerationPercentage": 2,
			"ManaRegenerationFlat": function() { return this.Charges },
			"Charges": 12,
			"Cooldown": 300
		},
		"manta": {
			"Name": "Manta Style",
			"Cost": 4950,
			"Components": ["ultimate_orb", "yasha", 800],
			"Section": "Armor",
			"SectionIndex": 9,
			"Family": { "Name": "Yasha", "Level": 0.1, "Stats": {"MovementSpeedPercentage": 0.1 } },
			"Strength": 10,
			"Agility": 26,
			"Intelligence": 10,
			"AttackSpeed": 15,
			"MovementSpeedPercentage": 0.1,
			"ManaCost": 125,
			"Cooldown": function(){
				if (this.heroTotal.AttackType == "Melee")
					return 30;
				return 45;
			}
		},
		"sphere": {
			"Name": "Linken's Sphere",
			"Aliases": ["ls"],
			"Cost": 4800,
			"Components": ["pers", "ultimate_orb", 1000],
			"Section": "Armor",
			"SectionIndex": 10,
			"Strength": 15,
			"Agility": 15,
			"Intelligence": 15,
			"HealthRegeneration": 6,
			"ManaRegenerationPercentage": 1.5,
			"Damage": 15,
			"Cooldown": 13
		},
		"hurricane_pike": {
			"Name": "Hurricane Pike",
			"Aliases": ["fs", "force staff"],
			"Cost": 4375,
			"Components": ["force_staff", "dragon_lance", 250],
			"Section": "Armor",
			"SectionIndex": 11,
			"Intelligence": 10,
			"Regeneration": 4,
			"Agility": 20,
			"Strength": 15,
			"Range": 140,
			"Buff": {
				"NoTarget": true,
				"Self": "hurricane_pike_buff",
				"Refresh": "override"
			},
		},
		"assault": {
			"Name": "Assault Cuirass",
			"Aliases": ["ac"],
			"Cost": 5250,
			"Components": ["platemail", "hyperstone", "chainmail", 1300],
			"Section": "Armor",
			"SectionIndex": 12,
			"Armor": 10,
			"AttackSpeed": 35,
			"Aura": "assault_aura"
		},
		"heart": {
			"Name": "Heart of Tarrasque",
			"Aliases": ["hot"],
			"Cost": 5500,
			"Components": ["reaver", "vitality_booster", 1400],
			"Section": "Armor",
			"SectionIndex": 13,
			"Strength": 45,
			"Health": 250,
			"Cooldown": function(){
				if (this.heroTotal.AttackType == "Melee")
					return 5;
				return 7;
			}
		},
		/* Artifacts */
		"mask_of_madness": {
			"Name": "Mask of Madness",
			"Aliases": ["mom"],
			"Cost": 1800,
			"Components": ["lifesteal", 900],
			"Section": "Artifacts",
			"SectionIndex": 0,
			"Lore": "Once this mask is worn, its bearer becomes an uncontrollable aggressive force.",
			"Buff": {
				"Name": "mask_of_madness_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "leave"
			},
			"Cooldown": 25,
			"ManaCost": 25
		},
		"helm_of_the_dominator": {
			"Name": "Helm of the Dominator",
			"Aliases": ["hotd"],
			"Cost": 1800,
			"Components": ["helm_of_iron_will", "lifesteal"],
			"Disassemble": true,
			"Section": "Artifacts",
			"SectionIndex": 1,
			"HealthRegeneration": 3,
			"Damage": 20,
			"Armor": 5,
			"Cooldown": 60,
			"ManaCost": 75
		},
		"dragon_lance": {
			"Name": "Dragon lance",
			"Cost": 1900,
			"Components": ["ogre_axe", "band_of_elvenskin", "band_of_elvenskin"],
			"Section": "Artifacts",
			"SectionIndex": 2,
			"Strength": 13,
			"Agility": 14,
			"Range": function(){ return this.heroTotal.AttackType == "Ranged" ? 140 : 0 },
		},
		"sange": {
			"Name": "Sange",
			"Cost": 2050,
			"Components": ["ogre_club", "belt_of_strength", 600],
			"Section": "Artifacts",
			"SectionIndex": 3,
			"Strength": 16,
			"Damage": 10
		},
		"yasha": {
			"Name": "Yasha",
			"Cost": 2050,
			"Components": ["blade_of_alacrity", "band_of_elvenskin", 600],
			"Section": "Artifacts",
			"SectionIndex": 4,
			"Family": { "Name": "Yasha", "Level": 0.08, "Stats": {"MovementSpeedPercentage": 0.08 } },
			"Agility": 16,
			"AttackSpeed": 15
		},
		"echo_sabre": {
			"Name": "Echo Sabre",
			"Cost": 2650,
			"Components": ["ogre_axe", "oblivion_staff"],
			"Section": "Artifacts",
			"SectionIndex": 5,
			"Strength": 10,
			"Intelligence": 10,
			"AttackSpeed": 10,
			"Damage": 15,
			"ManaRegenerationPercentage": 0.75
		},
		"maelstrom": {
			"Name": "Maelstrom",
			"Cost": 2800,
			"Components": ["mithril_hammer", "gloves_of_haste", 700],
			"Section": "Artifacts",
			"SectionIndex": 6,
			"Damage": 24,
			"AttackSpeed": 25
		},
		"diffusal_blade": {
			"Name": "Diffusal Blade",
			"Cost": 3150,
			"Components": ["blade_of_alacrity", "blade_of_alacrity", "robe", 700],
			"Section": "Artifacts",
			"SectionIndex": 7,
			"Agility": 25,
			"Intelligence": 10,
			"Charges": 8,
			"Cooldown": 4,
		},
		"diffusal_blade_2": {
			"Name": "Diffusal Blade II",
			"Cost": 3850,
			"Components": ["diffusal_blade", 700],
			"Section": "Unlisted",
			"Agility": 35,
			"Intelligence": 15,
			"Charges": 8,
			"Cooldown": 4,
		},
		"desolator": {
			"Name": "Desolator",
			"Cost": 3500,
			"Components": ["mithril_hammer", "mithril_hammer", "blight_stone"],
			"Section": "Artifacts",
			"SectionIndex": 8,
			"Damage": 50
		},
		"heavens_halberd": {
			"Name": "Heaven's Halberd",
			"Cost": 3850,
			"Components": ["sange", "talisman_of_evasion"],
			"Disassemble": true,
			"Section": "Artifacts",
			"SectionIndex": 9,
			"Strength": 20,
			"Damage": 25,
			"Evasion": 0.25,
			"Cooldown": 30,
			"ManaCost": 100
		},
		"sange_and_yasha": {
			"Name": "Sange and Yasha",
			"Aliases": ["sny", "s&y", "sy"],
			"Cost": 4100,
			"Components": ["yasha", "sange"],
			"Disassemble": true,
			"Section": "Artifacts",
			"SectionIndex": 10,
			"Family": { "Name": "Yasha", "Level": 0.16, "Stats": {"MovementSpeedPercentage": 0.16 } },
			"Strength": 16,
			"Agility": 16,
			"Damage": 16,
			"AttackSpeed": 16,
		},
		"skadi": {
			"Name": "Eye of Skadi",
			"Aliases": ["eos"],
			"Cost": 5675,
			"Components": ["ultimate_orb", "ultimate_orb", "point_booster", "orb_of_venom"],
			"Section": "Artifacts",
			"SectionIndex": 11,
			"Strength": 25,
			"Agility": 25,
			"Intelligence": 25,
			"Health": 225,
			"Mana": 250
		},
		"mjollnir": {
			"Name": "Mjollnir",
			"Cost": 5700,
			"Components": ["hyperstone", "maelstrom", 900],
			"Disassemble": true,
			"Section": "Artifacts",
			"SectionIndex": 12,
			"Damage": 24,
			"AttackSpeed": 80,
			"Cooldown": 35,
			"ManaCost": 50
		},
		"satanic": {
			"Name": "Satanic",
			"Cost": 5900,
			"Components": ["reaver", "helm_of_the_dominator", 1100],
			"Section": "Artifacts",
			"SectionIndex": 13,
			"Strength": 25,
			"Damage": 20,
			"Armor": 5,
			"Cooldown": 35
		},

		/* Secret */
		"energy_booster": {
			"Name": "Energy Booster",
			"Cost": 900,
			"Section": "Secret",
			"SectionIndex": 0,
			"Mana": 250
		},
		"point_booster": {
			"Name": "Point Booster",
			"Cost": 1200,
			"Section": "Secret",
			"SectionIndex": 1,
			"Health": 175,
			"Mana": 175
		},
		"vitality_booster": {
			"Name": "Vitality Booster",
			"Cost": 1100,
			"Section": "Secret",
			"SectionIndex": 2,
			"Health": 250
		},
		"platemail": {
			"Name": "Platemail",
			"Cost": 1400,
			"Section": "Secret",
			"SectionIndex": 3,
			"Armor": 10
		},
		"talisman_of_evasion": {
			"Name": "Talisman of Evasion",
			"Cost": 1700,
			"Section": "Secret",
			"SectionIndex": 4,
			"Evasion": 0.25
		},
		"hyperstone": {
			"Name": "Hyperstone",
			"Cost": 2000,
			"Section": "Secret",
			"SectionIndex": 5,
			"AttackSpeed": 55
		},
		"ultimate_orb": {
			"Name": "Ultimate Orb",
			"Cost": 2100,
			"Section": "Secret",
			"SectionIndex": 6,
			"Strength": 10,
			"Agility": 10,
			"Intelligence": 10
		},
		"demon_edge": {
			"Name": "Demon Edge",
			"Cost": 2400,
			"Section": "Secret",
			"SectionIndex": 7,
			"Damage": 46
		},
		"mystic_staff": {
			"Name": "Mystic Staff",
			"Cost": 2700,
			"Section": "Secret",
			"SectionIndex": 8,
			"Intelligence": 25
		},
		"reaver": {
			"Name": "Reaver",
			"Cost": 3000,
			"Section": "Secret",
			"SectionIndex": 9,
			"Strength": 25
		},
		"eagle": {
			"Name": "Eaglesong",
			"Cost": 3200,
			"Section": "Secret",
			"SectionIndex": 10,
			"Agility": 25
		},
		"relic": {
			"Name": "Sacred Relic",
			"Cost": 3800,
			"Section": "Secret",
			"SectionIndex": 11,
			"Damage": 60
		},
		"aegis": {
			"Name": "Aegis",
			"Cost": 0,
			"Section": "Unlisted"
		},
	},

	//
	//	Ability definition
	//

	"Abilities": {
		"_base": {
			"Name": "Unimplemented ability",
			"Level": 0,
			"LevelMax": "4",
			"Class": "Ability",
			"Restrictions": [1, 3, 5, 7]
		},
		"empty": {
			"Name": "Empty",
			"Level": 0,
			"LevelMax": 0,
			"Class": "Ability",
			"Restrictions": []
		},
		"attribute_bonus": {
			"Name": "Attribute bonus",
			"Level": 0,
			"LevelMax": 10,
			"Restrictions": [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
			"Strength": function() { return this.Level * 2 },
			"Agility": function() { return this.Level * 2 },
			"Intelligence": function() { return this.Level * 2 }
		},
		"abaddon_death_coil": {
			"Name": "Death coil",
			"Cooldown": 4.5,
			"ManaCost": function() {
				return 40 + this.Level * 10
			}
		},
		"abaddon_aphotic_shield": {
			"Name": "Aphotic shield",
			"Cooldown": function() { return 14 - this.Level * 2 },
			"ManaCost": function() { return 95 + this.Level * 5 }
		},
		"abaddon_frostmourne": {
			"Name": "Curse of Avernus",
			"Buff": {
				"Name": "abaddon_frostmourne_buff",
				"NoTarget" : true,
				"Self" : true,
				"Teammates" : true,
				"Refresh" : "override"
			}
		},
		"abaddon_borrowed_time": {
			"Name": "Borrowed time",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 70 - this.Level * 10 }
		},
		"alchemist_acid_spray": {
			"Name": "Acid spray",
			"Cooldown": 22,
			"ManaCost": function(){return 120 + this.Level * 10}
		},
		"alchemist_unstable_concoction": {
			"Name": "Unstable concoction",
			"Cooldown": 16,
			"ManaCost": 120
		},
		"alchemist_goblins_greed": {
			"Name": "Greevil's greed",
			"Class": "Passive"
		},
		"alchemist_chemical_rage": {
			"Name": "Chemical rage",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": {
				"Name": "alchemist_chemical_rage_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "override"
			},
			"Cooldown": 45,
			"ManaCost": function(){return this.Level * 50}
		},
		"ancient_apparition_cold_feet": {
			"Name": "Cold feet",
			"Cooldown": function(){ return 15 - this.Level * 2 },
			"ManaCost": 150
		},
		"ancient_apparition_ice_vortex": {
			"Name": "Ice vortex",
			"Cooldown": 4,
			"ManaCost": function(){ return 70 + this.Level * 10 }
		},
		"ancient_apparition_chilling_touch": {
			"Name": "Chilling touch",
			"Cooldown": function(){ return 58 - this.Level * 8 },
			"ManaCost": function(){ return 100 + this.Level * 10 }
		},
		"ancient_apparition_ice_blast": {
			"Name": "Ice blast",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 40,
			"ManaCost": function(){ return 75 + this.Level * 25 }
		},
		"antimage_mana_break": {
			"Name": "Mana break"
		},
		"antimage_blink": {
			"Name": "Blink",
			"Cooldown": [12, 9, 7, 5],
			"ManaCost": 60
		},
		"antimage_spell_shield": {
			"Name": "Spell shield",
			"Class": "Passive",
			"MagicalResistance": function() { return 0.18 + this.Level * 0.08 }
		},
		"antimage_mana_void": {
			"Name": "Mana void",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 70,
			"ManaCost": function(){ return 50 + this.Level * 75 }
		},
		"axe_berserkers_call": {
			"Name": "Berserker's call",
			"Buff": {
				"Name": "axe_berserkers_call_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "leave"
			},
			"Cooldown": function(){ return 18 - this.Level * 2 },
			"ManaCost": function(){ return 70 + this.Level * 10 }
		},
		"axe_battle_hunger": {
			"Name": "Battle hunger",
			"Cooldown": function(){ return 25 - this.Level * 5 },
			"ManaCost": 75
		},
		"axe_counter_helix": {
			"Name": "Counter helix",
			"Cooldown": function(){ return 0.5 - this.Level * 0.05 }
		},
		"axe_culling_blade": {
			"Name": "Culling blade",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": {
				"Name": "axe_culling_blade_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "leave"
			},
			"Cooldown": function() {
				if (this.heroTotal.HasAghanims)
					return 6;
				return 85 - this.Level * 10;
			},
			"ManaCost": function(){ return this.Level * 60 }
		},
		"bane_enfeeble": {
			"Name": "Enfeeble",
			"Cooldown": 8,
			"ManaCost": 95
		},
		"bane_brain_sap": {
			"Name": "Brain sap",
			"Cooldown": function(){ return 15 - this.Level },
			"ManaCost": function(){ return 40 + this.Level * 30 }
		},
		"bane_nightmare": {
			"Name": "Nightmare",
			"Cooldown": function(){ return 25 - this.Level * 3 },
			"ManaCost": 165
		},
		"bane_fiends_grip": {
			"Name": "Fiend's grip",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 100,
			"ManaCost": function(){ return 100 + this.Level * 100 }
		},
		"batrider_sticky_napalm": {
			"Name": "Sticky napalm",
			"Cooldown": 3,
			"ManaCost": 20
		},
		"batrider_flamebreak": {
			"Name": "Flamebreak",
			"Cooldown": 17,
			"ManaCost": function(){ return 100 + this.Level * 10 }
		},
		"batrider_firefly": {
			"Name": "Firefly",
			"Cooldown": 40,
			"ManaCost": 100
		},
		"batrider_flaming_lasso": {
			"Name": "Flaming lasso",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 105 - this.Level * 15 },
			"ManaCost": 225
		},
		"beastmaster_wild_axes": {
			"Name": "Wild axes",
			"Cooldown": 13,
			"ManaCost": 120
		},
		"beastmaster_call_of_the_wild": {
			"Name": "Call of the wild (hawk)",
			"Cooldown": function(){ return 46 - this.Level * 4 },
			"ManaCost": 25
		},
		"beastmaster_call_of_the_wild_boar": {
			"Name": "Call of the wild (boar)",
			"Cooldown": function(){ return 46 - this.Level * 4 },
			"ManaCost": 25,
			"LockedLevel": true,
			"Level": function() {
				if (this.heroRef && this.heroRef.AbilityIds["beastmaster_call_of_the_wild"])
					return this.heroRef.AbilityIds["beastmaster_call_of_the_wild"].Level
				return 0
			},
		},
		"beastmaster_inner_beast": {
			"Name": "Inner beast",
			"Aura": "beastmaster_inner_beast_aura"
		},
		"beastmaster_primal_roar": {
			"Name": "Primal roar",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function() {
				if (this.heroTotal.HasAghanims)
					return 45;
				return 85 - this.Level * 5;
			},
			"ManaCost": function(){ return 125 + this.Level * 25 }
		},
		"bloodseeker_bloodrage": {
			"Name": "Bloodrage",
			"Cooldown": function(){ return 14 - this.Level * 2 }
		},
		"bloodseeker_blood_bath": {
			"Name": "Blood rite",
			"Cooldown": function(){ return 29 - this.Level * 4 },
			"ManaCost": 100
		},
		"bloodseeker_thirst": {
			"Name": "Thirst",
			"Charges": 0,
			"ChargesMin": 0,
			"ChargesMax": 500,
			"MovementSpeedPercentage": function(){
				return (this.Level + 1) * 0.08 * this.Charges / this.ChargesMax * 5
			},
			"MovementSpeedUncapped": true,
			"Warning": "Each 100 of stacks is a range from 75% to 25%, 0 meaning all enemies are over 75% hp and 500 meaning 5 heroes below 25% hp",
			"Damage": function(){
				return Math.round((this.Level + 1) * 8 * this.Charges / this.ChargesMax * 5)
			},
		},
		"bloodseeker_rupture": {
			"Name": "Rupture",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 60,
			"ManaCost": function(){ return 100 + this.Level * 50 }
		},
		"bounty_hunter_shuriken_toss": {
			"Name": "Shuriken toss",
			"Cooldown": 10,
			"ManaCost": function(){ return 110 + this.Level * 10 }
		},
		"bounty_hunter_jinada": {
			"Name": "Jinada",
			"Cooldown": function(){ return 14 - this.Level * 2 }
		},
		"bounty_hunter_wind_walk": {
			"Name": "Shadow walk",
			"Buff": {
				"Name": "bounty_hunter_wind_walk_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "override"
			},
			"Cooldown": 15,
			"ManaCost": 65
		},
		"bounty_hunter_track": {
			"Name": "Track",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": {
				"Name": "bounty_hunter_track_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "leave"
			},
			"Cooldown": 4,
			"ManaCost": 65
		},
		"brewmaster_thunder_clap": {
			"Name": "Thunder clap",
			"Cooldown": 13,
			"ManaCost": function(){ return 75 + this.Level * 15 }
		},
		"brewmaster_drunken_haze": {
			"Name": "Drunken haze",
			"Cooldown": function(){ return 9 - this.Level },
			"ManaCost": 50
		},
		"brewmaster_drunken_brawler": {
			"Name": "Drunken brawler",
			"Evasion": function() { return 0.05 + this.Level * 0.05 }
		},
		"brewmaster_primal_split": {
			"Name": "Primal split",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 160 - this.Level * 20 },
			"ManaCost": function(){ return 100 + this.Level * 25 }
		},
		"bristleback_viscous_nasal_goo": {
			"Name": "Viscous nasal goo",
			"Cooldown": 1.5,
			"ManaCost": 25
		},
		"bristleback_quill_spray": {
			"Name": "Quill spray",
			"Cooldown": 3,
			"ManaCost": 35
		},
		"bristleback_bristleback": {
			"Name": "Bristleback"
		},
		"bristleback_warpath": {
			"Name": "Warpath",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Charges": 0,
			"ChargesMax": function(){ return this.Level > 0 ? 4 + this.Level : 0 },
			"ChargesSemantic": "Stacks",
			"MovementSpeedPercentage": function() { return (0.02 + 0.01 * this.Level) * this.Charges },
			"Damage": function() { return (15 + 5 * this.Level) * this.Charges  }
		},
		"broodmother_spawn_spiderlings": {
			"Name": "Spawn spiderlings",
			"Cooldown": 10,
			"ManaCost": 120
		},
		"broodmother_spin_web": {
			"Name": "Spin web",
			"Cooldown": 40,
			"ManaCost": 50,
			"Buff": {
				"Name": "broodmother_spin_web_buff",
				"Self": true,
				"NoTarget": true,
				"Refresh": true
			}
		},
		"broodmother_incapacitating_bite": {
			"Name": "Incapacitating bite"
		},
		"broodmother_insatiable_hunger": {
			"Name": "Insatiable hunger",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": {
				"Name": "broodmother_insatiable_hunger_buff",
				"Self": true,
				"NoTarget": true,
				"Refresh": "override"
			},
			"Cooldown": 45,
			"ManaCost": 100,
		},
		"centaur_hoof_stomp": {
			"Name": "Hoof stomp",
			"Cooldown": 13,
			"ManaCost": 130
		},
		"centaur_double_edge": {
			"Name": "Double edge",
			"Cooldown": 5
		},
		"centaur_return": {
			"Name": "Return"
		},
		"centaur_stampede": {
			"Name": "Stampede",
			"Class": "Ultimate",
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 105 - this.Level * 15 },
			"ManaCost": 100
		},
		"chaos_knight_chaos_bolt": {
			"Name": "Chaos bolt",
			"Cooldown": 10,
			"ManaCost": 140
		},
		"chaos_knight_reality_rift": {
			"Name": "Reality rift",
			"Cooldown": function(){ return 32 - this.Level * 6 },
			"ManaCost": 50
		},
		"chaos_knight_chaos_strike": {
			"Name": "Chaos strike"
		},
		"chaos_knight_phantasm": {
			"Name": "Phantasm",
			"Class": "Ultimate",
			"Restrictions": [6, 11, 16],
			"Cooldown": 130,
			"ManaCost": function(){ return 50 + this.Level * 75 }
		},
		"chen_penitence": {
			"Name": "Penitence",
			"Cooldown": function(){ return 15 - this.Level },
			"ManaCost": 70
		},
		"chen_test_of_faith": {
			"Name": "Test of faith",
			"Cooldown": 16,
			"ManaCost": function(){ return 80 + this.Level * 10 }
		},
		"chen_test_of_faith_teleport": {
			"Name": "Test of faith (Teleport)",
			"Cooldown": 24,
			"ManaCost": 200
		},
		"chen_holy_persuasion": {
			"Name": "Holy persuasion",
			"Cooldown": function(){ return 34 - this.Level * 4 },
			"ManaCost": 100
		},
		"chen_hand_of_god": {
			"Name": "Hand of god",
			"Class": "Ultimate",
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 180 - this.Level * 20 },
			"ManaCost": function(){ return 100 + this.Level * 100 }
		},
		"clinkz_strafe": {
			"Name": "Strafe",
			"Buff": {
				"Name": "clinkz_strafe_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "override"
			},
			"Cooldown": function(){ return 45 - this.Level * 5 },
			"ManaCost": 90
		},
		"clinkz_searing_arrows": {
			"Name": "Searing arrows",
			"Damage": function() { return 20 + this.Level * 10 },
			"Buff": {
				"Name": "clinkz_searing_arrows_buff",
				"NoTarget": false,
				"Self": true,
				"Refresh": true
			},
			"ManaCost": 10
		},
		"clinkz_wind_walk": {
			"Name": "Skeleton walk",
			"Buff": {
				"NoTarget": true,
				"Self": "clinkz_wind_walk_buff",
				"Refresh": "override"
			},
			"Cooldown": function(){ return 21 - this.Level },
			"ManaCost": 75
		},
		"clinkz_death_pact": {
			"Name": "Death pact",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": {
				"NoTarget": true,
				"Self": "clinkz_death_pact_buff",
				"Refresh": "override"
			},
			"Cooldown": function(){ return 55 - this.Level * 10 },
			"ManaCost": 100
		},
		"crystal_maiden_crystal_nova": {
			"Name": "Crystal nova",
			"Cooldown": 12,
			"ManaCost": function(){return 80 + 20 * this.Level}
		},
		"crystal_maiden_frostbite": {
			"Name": "Frostbite",
			"Cooldown": function(){return 10 - this.Level},
			"ManaCost": [115, 125, 140, 150],
		},
		"crystal_maiden_brilliance_aura": {
			"Name": "Arcane aura",
			"Aura": "crystal_maiden_brilliance_aura_aura"
		},
		"crystal_maiden_freezing_field": {
			"Name": "Freezing field",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 90,
			"ManaCost": function(){return this.Level * 200}
		},
		"dark_seer_vacuum": {
			"Name": "Vacuum",
			"Cooldown": 28,
			"ManaCost": function(){ return 70 + this.Level * 30 }
		},
		"dark_seer_ion_shell": {
			"Name": "Ion shell",
			"Cooldown": 9,
			"ManaCost": function(){ return 50 + this.Level * 20 }
		},
		"dark_seer_surge": {
			"Name": "Surge",
			"Cooldown": function(){ return 13 - this.Level },
			"ManaCost": 50
		},
		"dark_seer_wall_of_replica": {
			"Name": "Wall of replica",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 100,
			"ManaCost": function(){ return this.Level * 125 }
		},
		"dazzle_poison_touch": {
			"Name": "Poison touch",
			"Cooldown": [15, 13, 11, 7],
			"ManaCost": 70,
		},
		"dazzle_shallow_grave": {
			"Name": "Shallow grave",
			"Cooldown": function(){ return 75 - this.Level * 15 },
			"ManaCost": 150
		},
		"dazzle_shadow_wave": {
			"Name": "Shadow wave",
			"Cooldown": function(){ return 14 - this.Level * 2 },
			"ManaCost": function(){ return 80 + this.Level * 10 }
		},
		"dazzle_weave": {
			"Name": "Weave",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": function() {
				if (this.heroTotal.HasAghanims)
					return {
						"Name": "dazzle_weave_buff",
						"NoTarget": true,
						"Self": true,
						"Teammates": true,
						"Refresh": "override"
					};
				return {
					"Name": "dazzle_weave_buff_aghs",
					"NoTarget": true,
					"Self": true,
					"Teammates": true,
					"Refresh": "override"
				};
			},
			"Cooldown": 40,
			"ManaCost": 100
		},
		"death_prophet_carrion_swarm": {
			"Name": "Crypt swarm",
			"Cooldown": function(){ return 9 - this.Level },
			"ManaCost": [105, 120, 140, 165],
		},
		"death_prophet_silence": {
			"Name": "Silence",
			"Cooldown": function(){ return 16 - this.Level },
			"ManaCost": 80,
		},
		"death_prophet_spirit_siphon": {
			"Name": "Spirit siphon",
			"ManaCost": function(){ return 80 + this.Level * 5 },
		},
		"death_prophet_exorcism": {
			"Name": "Exorcism",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 145,
			"ManaCost": function(){ return 100 + this.Level * 100 },
		},
		"disruptor_thunder_strike": {
			"Name": "Thunder strike",
			"Cooldown": function(){ return 13 - this.Level },
			"ManaCost": 130,
		},
		"disruptor_glimpse": {
			"Name": "Glimpse",
			"Cooldown": function(){ return 74 - this.Level * 14 },
			"ManaCost": 100,
		},
		"disruptor_kinetic_field": {
			"Name": "Kinetic field",
			"Cooldown": function(){ return 14 - this.Level },
			"ManaCost": 70,
		},
		"disruptor_static_storm": {
			"Name": "Static storm",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 100 - this.Level * 10 },
			"ManaCost": function(){ return 75 + this.Level * 50 },
		},
		"doom_bringer_devour": {
			"Name": "Devour",
			"Cooldown": function(){ return 80 - this.Level * 10 },
			"ManaCost": 60
		},
		"doom_bringer_scorched_earth": {
			"Name": "Scorched earth",
			"Buff": {
				"Name": "doom_bringer_scorched_earth_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "override"
			},
			"Cooldown": 55,
			"ManaCost": function(){ return 55 + this.Level * 5 }
		},
		"doom_bringer_infernal_blade": {
			"Name": "Infernal blade",
			"Cooldown": function(){ return 20 - this.Level * 4 },
			"ManaCost": 40
		},
		"doom_bringer_doom": {
			"Name": "Doom",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 145,
			"ManaCost": function(){ return 100 + this.Level * 50 }
		},
		"dragon_knight_breathe_fire": {
			"Name": "Breathe fire",
			"Cooldown": function(){ return 15 - this.Level },
			"ManaCost": function(){ return 90 + this.Level * 10 },
		},
		"dragon_knight_dragon_tail": {
			"Name": "Dragon tail",
			"Cooldown": function(){ return 13 - this.Level },
			"ManaCost": 100,
		},
		"dragon_knight_dragon_blood": {
			"Name": "Dragon_blood",
			"HealthRegeneration": function() { return this.Level * 3},
			"Armor": function() { return this.Level * 3}
		},
		"dragon_knight_elder_dragon_form": {
			"Name": "Elder dragon form",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": {
				"NoTarget": true,
				"Self": "dragon_knight_elder_dragon_form_buff",
				"Refresh": "override"
			},
			"Cooldown": 115,
			"ManaCost": 50,
		},
		"drow_ranger_frost_arrows": {
			"Name": "Frost arrows",
			"ManaCost": 12
		},
		"drow_ranger_wave_of_silence": {
			"Name": "Gust",
			"Cooldown": function(){ return 17 - this.Level },
			"ManaCost": 90
		},
		"drow_ranger_trueshot": {
			"Name": "Precision aura",
			"Class": "Aura",
			"TriggerChangeUpdate": true,
			"Aura": "drow_ranger_trueshot_aura",
			"Cooldown": 100
		},
		"drow_ranger_marksmanship": {
			"Name": "Marksmanship",
			"Class": "Passive",
			"Level": 0,
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Agility": function() { return 20 + this.Level * 20 },
		},
		"earth_spirit_boulder_smash": {
			"Name": "Boulder smash",
			"Cooldown": function(){ return 26 - this.Level * 4 },
			"ManaCost": 100
		},
		"earth_spirit_rolling_boulder": {
			"Name": "Rolling boulder",
			"Cooldown": function(){ return 20 - this.Level * 4 },
			"ManaCost": 50
		},
		"earth_spirit_geomagnetic_grip": {
			"Name": "Geomagnetic grip",
			"Cooldown": 13,
			"ManaCost": 100
		},
		"earth_spirit_stone_caller": {
			"Name": "Stone remnant",
			"Level": 1,
			"LevelMax": 1,
			"LockedLevel": true
		},
		"earth_spirit_petrify": {
			"Name": "Enchant remnant",
			"Level": function() {
				if (this.heroTotal.HasAghanims)
					return 1;
				return 0;
			},
			"LevelMax": 1,
			"LockedLevel": true,
			"Hidden": function() {
				if (this.heroTotal.HasAghanims)
					return false
				return true
			},
			"Cooldown": 45,
			"ManaCost": 150
		},
		"earth_spirit_magnetize": {
			"Name": "Magnetize",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 110 - this.Level * 10 },
			"ManaCost": 100
		},
		"earthshaker_fissure": {
			"Name": "Fissure",
			"Cooldown": 15,
			"ManaCost": function(){ return 110 + this.Level * 15 }
		},
		"earthshaker_enchant_totem": {
			"Name": "Enchant totem",
			"Buff": {
				"Name": "earthshaker_enchant_totem_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "override"
			},
			"Cooldown": 5,
			"ManaCost": function(){ return 10 + this.Level * 10 }
		},
		"earthshaker_aftershock": {
			"Name": "Aftershock"
		},
		"earthshaker_echo_slam": {
			"Name": "Echo slam",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 170 - this.Level * 20 },
			"ManaCost": function(){ return 85 + this.Level * 60 }
		},
		"elder_titan_echo_stomp": {
			"Name": "Echo stomp",
			"Cooldown": function(){ return 15 - this.Level },
			"ManaCost": 100,
		},
		"elder_titan_ancestral_spirit": {
			"Name": "Astral spirit",
			"Cooldown": 16,
			"ManaCost": function(){ return 70 + this.Level * 10 }
		},
		"elder_titan_natural_order": {
			"Name": "Natural order"
		},
		"elder_titan_earth_splitter": {
			"Name": "Earth splitter",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 100,
			"ManaCost": function(){ return 50 + this.Level * 100 }
		},
		"elder_titan_return_spirit": {
			"Name": "Return Astral spirit"
		},
		"ember_spirit_searing_chains": {
			"Name": "Searing chains",
			"Cooldown": function(){ return 16 - this.Level * 2 },
			"ManaCost": 110,
		},
		"ember_spirit_sleight_of_fist": {
			"Name": "Sleight of fist",
			"Cooldown": function(){ return 38 - this.Level * 8 },
			"ManaCost": 50,
		},
		"ember_spirit_flame_guard": {
			"Name": "Flame guard",
			"Cooldown": 35,
			"ManaCost": function(){ return 70 + this.Level * 10 }
		},
		"ember_spirit_fire_remnant": {
			"Name": "Fire remnant",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"ember_spirit_activate_fire_remnant": {
			"Name": "Activate fire remnant",
			"Level": function() {
				if (this.heroRef && this.heroRef.AbilityIds["ember_spirit_fire_remnant"])
					return this.heroRef.AbilityIds["ember_spirit_fire_remnant"].Level > 0 ? 1 : 0
				return 0
			},
			"LockedLevel": true
		},
		"enchantress_untouchable": {
			"Name": "Untouchable"
		},
		"enchantress_enchant": {
			"Name": "Enchant",
			"Cooldown": function(){ return 36 - this.Level * 6 },
			"ManaCost": 65,
		},
		"enchantress_natures_attendants": {
			"Name": "Nature's attendants",
			"Cooldown": 45,
			"ManaCost": function(){ return 110 + this.Level * 15 }
		},
		"enchantress_impetus": {
			"Name": "Impetus",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"ManaCost": function(){ return 50 + this.Level * 5 }
		},
		"enigma_malefice": {
			"Name": "Malefice",
			"Cooldown": 15,
			"ManaCost": [110, 130, 150, 160],
		},
		"enigma_demonic_conversion": {
			"Name": "Demonic conversion",
			"Cooldown": 35,
			"ManaCost": 170,
		},
		"enigma_midnight_pulse": {
			"Name": "Midnight pulse",
			"Cooldown": 35,
			"ManaCost": function(){ return 80 + this.Level * 15 },
		},
		"enigma_black_hole": {
			"Name": "Black hole",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 220 - this.Level * 20 },
			"ManaCost": function(){ return 225 + this.Level * 50 },
		},
		"faceless_void_time_walk": {
			"Name": "Time walk",
			"Cooldown": function(){ return 30 - this.Level * 6 },
			"ManaCost": 40,
		},
		"faceless_void_time_dilation": {
			"Name": "Time dilation",
			"Cooldown": function(){ return 46 - this.Level * 6 },
			"ManaCost": 75,
		},
		"faceless_void_time_lock": {
			"Name": "Time lock"
		},
		"faceless_void_chronosphere": {
			"Name": "Chronosphere",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 155 - this.Level * 15 },
			"ManaCost": function(){ return 75 + this.Level * 75 }
		},
		"furion_sprout": {
			"Name": "Sprout",
			"Cooldown": function(){ return 12 - this.Level },
			"ManaCost": function(){ return 50 + this.Level * 20 },
		},
		"furion_teleportation": {
			"Name": "Teleportation",
			"Cooldown": function(){ return 60 - this.Level * 10 },
			"ManaCost": 50,
		},
		"furion_force_of_nature": {
			"Name": "Nature's call",
			"Cooldown": 37,
			"ManaCost": 160,
		},
		"furion_wrath_of_nature": {
			"Name": "Wrath of nature",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 105 - this.Level * 5 },
			"ManaCost": function(){ return 125 + this.Level * 50 },
		},
		"gyrocopter_rocket_barrage": {
			"Name": "Rocket barrage",
			"Cooldown": function(){ return 7.5 - this.Level * 0.5 },
			"ManaCost": 90,
		},
		"gyrocopter_homing_missile": {
			"Name": "Homing missile",
			"Cooldown": function(){ return 23 - this.Level * 3 },
			"ManaCost": function(){ return 110 + this.Level * 10 },
		},
		"gyrocopter_flak_cannon": {
			"Name": "Flak cannon",
			"Cooldown": 30,
			"ManaCost": 50,
		},
		"gyrocopter_call_down": {
			"Name": "Call down",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 60 - this.Level * 5 },
			"ManaCost": 125,
		},
		"huskar_inner_vitality": {
			"Name": "Inner vitality",
			"Buff": {
				"Name": "huskar_inner_vitality_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "override"
			},
			"Cooldown": function(){ return 26 - this.Level * 4 },
			"ManaCost": 170,
		},
		"huskar_burning_spear": {
			"Name": "Burning spear",
			"HealthCost": 15,
		},
		"huskar_berserkers_blood": {
			"Name": "Berserker's blood",
			"Charges": 0,
			"ChargesMax": 90,
			"AttackSpeed": function(){ return Math.floor(this.Charges / this.ChargesMax * (168 + this.Level * 28) ) },
			"MagicalResistance": function() { return Math.floor(this.Charges / this.ChargesMax * (0.1 + this.Level * 0.1) *100 ) / 100 },
			"ChargesSemantic": "HP% lost"
		},
		"huskar_life_break": {
			"Name": "Life break",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 12,
		},
		"invoker_quas": {
			"Name": "Quas",
			"Meta": { "Wrap": ["LevelAdjusted"] },
			"Strength": function() { return this.Level * 2 },
			"LevelMax": 7,
			"Restrictions": [1, 3, 5, 7, 9, 11, 13],
			"LockedCharges": true,
			"Charges": 0,
			"ChargesSemantic": "Instances",
			"LevelAdjusted": function() {
				let bonus = this.heroTotal.HasAghanims && this.Level > 0 ? 1 : 0;
				return this.Level + bonus;
			},
			"HealthRegeneration": function() { return this.Charges * this.Level },
			"HiddenAction": function(){ return this.Charges > 2 },
			"Action": {
				"Type": "Operation",
				"Function": function applyQuas(){
					let abilities = this.heroRef.AbilityIds,
						instanceStack = abilities.invoker_invoke.InstanceStack,
						lastIndex = 0;
					if (instanceStack[0] == this.ID)
						lastIndex = instanceStack.lastIndexOf(this.ID, 1) + 1
					if (instanceStack.length > 2) {
						let [lastInstance] = instanceStack.splice(lastIndex, 1)
						if (abilities[lastInstance].Charges > 0)
							abilities[lastInstance].Charges--;
					}
					instanceStack.push(this.ID)
					this.Charges++;
				}
			},
		},
		"invoker_wex": {
			"Name": "Wex",
			"Meta": { "Wrap": ["LevelAdjusted"] },
			"Agility": function() { return this.Level * 2 },
			"LevelMax": 7,
			"Restrictions": [1, 3, 5, 7, 9, 11, 13],
			"LockedCharges": true,
			"Charges": 0,
			"ChargesSemantic": "Instances",
			"LevelAdjusted": function() {
				let bonus = this.heroTotal.HasAghanims && this.Level > 0 ? 1 : 0;
				return this.Level + bonus;
			},
			"AttackSpeed": function() { return this.Charges * this.Level * 2 },
			"MovementSpeedPercentage": function() { return this.Charges * this.Level * 0.01 },
			"HiddenAction": function(){ return this.Charges > 2 },
			"Action": {
				"Type": "Operation",
				"Function": function applyWex(){
					let abilities = this.heroRef.AbilityIds,
						instanceStack = abilities.invoker_invoke.InstanceStack,
						lastIndex = 0;
					if (instanceStack[0] == this.ID)
						lastIndex = instanceStack.lastIndexOf(this.ID, 1) + 1
					if (instanceStack.length > 2) {
						let [lastInstance] = instanceStack.splice(lastIndex, 1)
						if (abilities[lastInstance].Charges > 0)
							abilities[lastInstance].Charges--;
					}
					instanceStack.push(this.ID)
					this.Charges++;
				}
			},
		},
		"invoker_exort": {
			"Name": "Exort",
			"Meta": { "Wrap": ["LevelAdjusted"] },
			"Intelligence": function() { return this.Level * 2 },
			"LevelMax": 7,
			"Restrictions": [1, 3, 5, 7, 9, 11, 13],
			"LockedCharges": true,
			"Charges": 0,
			"ChargesSemantic": "Instances",
			"ChargesMax": 3,
			"LevelAdjusted": function() {
				let bonus = this.heroTotal.HasAghanims && this.Level > 0 ? 1 : 0;
				return this.Level + bonus;
			},
			"Damage": function() { return this.Charges * this.Level * 3 },
			"HiddenAction": function(){ return this.Charges > 2 },
			"Action": {
				"Type": "Operation",
				"Function": function applyExort(){
					let abilities = this.heroRef.AbilityIds,
						instanceStack = abilities.invoker_invoke.InstanceStack,
						lastIndex = 0;
					if (instanceStack[0] == this.ID)
						lastIndex = instanceStack.lastIndexOf(this.ID, 1) + 1
					if (instanceStack.length > 2) {
						let [lastInstance] = instanceStack.splice(lastIndex, 1)
						if (abilities[lastInstance].Charges > 0)
							abilities[lastInstance].Charges--;
					}
					instanceStack.push(this.ID)
					this.Charges++;
				}
			},
		},
		"invoker_invoke": {
			"Name": "Invoke",
			"Class": "Ultimate",
			"Level": 1,
			"LevelMin": 1,
			"LevelMax": 4,
			"Restrictions": [6, 11, 16],
			"Strength": function() {
				if (this.heroRef && this.heroRef.Meta.Level >= 25)
					return 6;
				return 0;
			},
			"Agility": function() {
				if (this.heroRef && this.heroRef.Meta.Level >= 25)
					return 6;
				return 0;
			},
			"Intelligence": function() {
				if (this.heroRef && this.heroRef.Meta.Level >= 25)
					return 6;
				return 0;
			},
			"Warning": "At hero level 25, this skill gives +6 to all stats",
			"Lore": "So begins a new age of knowledge",
			"Cooldown": function(){
				if (this.heroTotal.HasAghanims)
					return 2 ** (5 - this.Level);
				return [0, 22, 17, 12, 5][this.Level]
			},
			"ManaCost": function(){
				if (this.heroTotal.HasAghanims)
					return 0;
				return this.Level * 20;
			},
			"InstanceStack": [], // the orb activation order
		},
		"invoker_cold_snap": {
			"Name": "Cold snap",
			"Cooldown": 20,
			"ManaCost": 100,
		},
		"invoker_ghost_walk": {
			"Name": "Ghost walk",
			"Level": true,
			"HiddenAction": function(){
				if (this.heroRef == undefined ||
					this.heroRef.AbilityIds.invoker_wex.Level == 0 ||
					this.heroRef.AbilityIds.invoker_quas.Level == 0)
					return true
				return false
			},
			"Action": {
				"Type": "Buff",
				"Id": "invoker_ghost_walk_buff",
				"Modifier": function ghostWalkModifier(newBuff) {
					newBuff.Quas = this.heroRef.AbilityIds.invoker_quas.LevelAdjusted
					newBuff.Wex = this.heroRef.AbilityIds.invoker_wex.LevelAdjusted
				},
				"NoTarget": true,
				"Self": true,
				"Refresh": "override"
			},
			"Cooldown": 45,
			"ManaCost": 200,
		},
		"invoker_tornado": {
			"Name": "Tornado",
			"Cooldown": 30,
			"ManaCost": 150,
		},
		"invoker_emp": {
			"Name": "EMP",
			"Cooldown": 30,
			"ManaCost": 125,
		},
		"invoker_alacrity": {
			"Name": "Alacrity",
			"Level": true,
			"HiddenAction": function(){
				if (this.heroRef == undefined ||
					this.heroRef.AbilityIds.invoker_wex.Level == 0 ||
					this.heroRef.AbilityIds.invoker_exort.Level == 0)
					return true
				return false
			},
			"Action": {
				"Type": "Buff",
				"Id": "invoker_alacrity_buff",
				"Modifier": function alacrityModifier(newBuff) {
					newBuff.Wex = this.heroRef.AbilityIds.invoker_wex.LevelAdjusted
					newBuff.Exort = this.heroRef.AbilityIds.invoker_exort.LevelAdjusted
				},
				"Self": true,
				"Teammates": true,
				"NoTarget": true,
				"Refresh": "override",
			},
			"Cooldown": 15,
			"ManaCost": 45,
		},
		"invoker_chaos_meteor": {
			"Name": "Chaos meteor", // Meatball!
			"Cooldown": 55,
			"ManaCost": 200,
		},
		"invoker_sun_strike": {
			"Name": "Sun strike",
			"Cooldown": 25,
			"ManaCost": 175,
		},
		"invoker_forge_spirit": {
			"Name": "Forge spirit",
			"Cooldown": 30,
			"ManaCost": 75,
		},
		"invoker_ice_wall": {
			"Name": "Ice wall",
			"Cooldown": 25,
			"ManaCost": 175,
		},
		"invoker_deafening_blast": {
			"Name": "Deafening blast",
			"Cooldown": 40,
			"ManaCost": 300,
		},
		"jakiro_dual_breath": {
			"Name": "Dual breath",
			"Cooldown": 10,
			"ManaCost": [135, 140, 155, 170],
		},
		"jakiro_ice_path": {
			"Name": "Ice path",
			"Cooldown": function(){ return 13 - this.Level },
			"ManaCost": 90,
		},
		"jakiro_liquid_fire": {
			"Name": "Liquid fire",
			"Cooldown": [20, 15, 10, 4],
		},
		"jakiro_macropyre": {
			"Name": "Macropyre",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 60,
			"ManaCost": function(){ return 110 + this.Level * 110 },
		},
		"juggernaut_blade_fury": {
			"Name": "Blade fury",
			"Cooldown": function(){ return 50 - this.Level * 8 },
			"ManaCost": function(){ return 130 - this.Level * 10 },
		},
		"juggernaut_healing_ward": {
			"Name": "Healing ward",
			"Cooldown": 60,
			"ManaCost": function(){ return 115 + this.Level * 5 },
		},
		"juggernaut_blade_dance": {
			"Name": "Blade dance"
		},
		"juggernaut_omni_slash": {
			"Name": "Omnislash",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 140 - this.Level * 10 },
			"ManaCost": function(){ return 125 + this.Level * 75 },
		},
		"keeper_of_the_light_illuminate": {
			"Name": "Illuminate",
			"Cooldown": 10,
			"ManaCost": function(){ return 140 + this.Level * 10 },
		},
		"keeper_of_the_light_mana_leak": {
			"Name": "Mana leak",
			"Cooldown": function(){ return 18 - this.Level * 2 },
			"ManaCost": 150,
		},
		"keeper_of_the_light_chakra_magic": {
			"Name": "Chakra magic",
			"Cooldown": function(){ return 18 - this.Level },
			"ManaCost": function(){ return 15 + this.Level * 10 },
		},
		"keeper_of_the_light_blinding_light": {
			"Name": "Blinding light",
			"LockedLevel": true,
			"Level": function() {
				if (this.heroRef && this.heroRef.AbilityIds["keeper_of_the_light_spirit_form"])
					return this.heroRef.AbilityIds["keeper_of_the_light_spirit_form"].Level
				return 0
			},
			"Cooldown": function(){ return 24 - this.Level * 4 },
			"ManaCost": 50,
		},
		"keeper_of_the_light_recall": {
			"Name": "Recall",
			"LockedLevel": true,
			"Level": function() {
				if (this.heroRef && this.heroRef.AbilityIds["keeper_of_the_light_spirit_form"])
					return this.heroRef.AbilityIds["keeper_of_the_light_spirit_form"].Level
				return 0
			},
			"Cooldown": 15,
			"ManaCost": 100,
		},
		"keeper_of_the_light_spirit_form": {
			"Name": "Spirit form",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 90 - this.Level * 10 },
			"ManaCost": 100,
		},
		"kunkka_torrent": {
			"Name": "Torrent",
			"Cooldown": 10,
			"ManaCost": function(){ return 80 + this.Level * 10 },
		},
		"kunkka_tidebringer": {
			"Name": "Tidebringer",
			"Cooldown": function(){ return 16 - this.Level * 3 },
		},
		"kunkka_x_marks_the_spot": {
			"Name": "X marks the spot",
			"Cooldown": function(){ return 32 - this.Level * 6 },
			"ManaCost": 50,
		},
		"kunkka_ghostship": {
			"Name": "Ghostship",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 70 - this.Level * 10 },
			"ManaCost": function(){ return 50 + this.Level * 75 },
		},
		"legion_commander_overwhelming_odds": {
			"Name": "Overwhelming odds",
			"Buff": {
				"Name": "legion_commander_overwhelming_odds_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "override"
			},
			"Cooldown": 15,
			"ManaCost": 100,
		},
		"legion_commander_press_the_attack": {
			"Name": "Press the attack",
			"Buff": {
				"Name": "legion_commander_press_the_attack_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "override"
			},
			"Cooldown": function(){ return 17 - this.Level },
			"ManaCost": 110,
		},
		"legion_commander_moment_of_courage": {
			"Name": "Moment of courage",
			"Cooldown": function(){ return 2.8 - this.Level * 0.5 },
		},
		"legion_commander_duel": {
			"Name": "Duel",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 50,
			"ManaCost": 75,
		},
		"leshrac_split_earth": {
			"Name": "Split earth",
			"Cooldown": 9,
			"ManaCost": [100, 125, 140, 160],
		},
		"leshrac_diabolic_edict": {
			"Name": "Diabolic edict",
			"Cooldown": 22,
			"ManaCost": [95, 120, 135, 155],
		},
		"leshrac_lightning_storm": {
			"Name": "Lightning storm",
			"Cooldown": 4,
			"ManaCost": function(){ return 80 + this.Level * 10 },
		},
		"leshrac_pulse_nova": {
			"Name": "Pulse nova",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 1,
			"ManaCost": function(){ return 50 + this.Level * 20 },
		},
		"lich_frost_nova": {
			"Name": "Frost nova",
			"Cooldown": 8,
			"ManaCost": [125, 150, 170, 190],
		},
		"lich_frost_armor": {
			"Name": "Frost armor",
			"Buff": {
				"Name": "lich_frost_armor_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "override"
			},
			"Cooldown": 5,
			"ManaCost": 50,
		},
		"lich_dark_ritual": {
			"Name": "Sacrifice",
			"Cooldown": function(){ return 70 - this.Level * 10 },
			"ManaCost": 25,
		},
		"lich_chain_frost": {
			"Name": "Chain frost",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 150 - this.Level * 30 },
			"ManaCost": [200, 325, 500],
		},
		"life_stealer_rage": {
			"Name": "Rage",
			"Buff": {
				"Name": "life_stealer_rage_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "Override"
			},
			"Cooldown": 16,
			"ManaCost": 75,
		},
		"life_stealer_feast": {
			"Name": "Feast"
		},
		"life_stealer_open_wounds": {
			"Name": "Open wounds",
			"Cooldown": function(){ return 28 - this.Level * 4 },
			"ManaCost": 110,
		},
		"life_stealer_infest": {
			"Name": "Infest",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 125 - this.Level * 5 },
			"ManaCost": 50,
		},
		"lina_dragon_slave": {
			"Name": "Dragon slave",
			"Cooldown": 8,
			"ManaCost": function(){ return 85 + this.Level * 15 }
		},
		"lina_light_strike_array": {
			"Name": "Light strike array",
			"Cooldown": 7,
			"ManaCost": function(){ return 90 + this.Level * 10 }
		},
		"lina_fiery_soul": {
			"Name": "Fiery soul",
			"Charges": 0,
			"ChargesMax": 3,
			"ChargesSemantic": "Stacks",
			"AttackSpeed": function() { return this.Level > 0 ? (25 + this.Level * 15) * this.Charges : 0 },
			"MovementSpeedPercentage": function() { return this.Level > 0 ? (0.04 + this.Level * 0.01) * this.Charges : 0 },
		},
		"lina_laguna_blade": {
			"Name": "Laguna blade",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 80 - this.Level * 10 },
			"ManaCost": [280, 420, 680],
		},
		"lion_impale": {
			"Name": "Earth spike",
			"Cooldown": 12,
			"ManaCost": function(){ return 80 + this.Level * 20 },
		},
		"lion_voodoo": {
			"Name": "Hex",
			"Cooldown": function(){ return 36 - this.Level * 6 },
			"ManaCost": function(){ return 100 + this.Level * 25 },
		},
		"lion_mana_drain": {
			"Name": "Mana drain",
			"Cooldown": function(){ return 20 - this.Level * 4 },
			"ManaCost": 10,
		},
		"lion_finger_of_death": {
			"Name": "Finger of death",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 220 - this.Level * 60 },
			"ManaCost": function(){
				if (this.heroTotal.HasAghanims)
					return [0, 200, 420, 625][this.Level] // Wow, 25 mana less
				return [0, 200, 420, 650][this.Level]
			},
		},
		"lone_druid_spirit_bear": {
			"Name": "Spirit bear",
			"Cooldown": 120,
			"ManaCost": 75,
		},
		"lone_druid_rabid": {
			"Name": "Rabid",
			"Buff": {
				"Name": "lone_druid_rabid_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "override"
			},
			"Cooldown": 30,
			"ManaCost": 50,
		},
		"lone_druid_savage_roar": {
			"Name": "Savage roar",
			"Cooldown": function(){ return 44 - this.Level * 6 },
			"ManaCost": 50,
		},
		"lone_druid_true_form": {
			"Name": "True form",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": {
				"Name": "lone_druid_true_form_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "override"
			},
			"ManaCost": 25,
		},
		"lone_druid_true_form_battle_cry": {
			"Name": "Battle cry",
			"Level": function() {
				if (this.heroRef && this.heroRef.AbilityIds.lone_druid_true_form)
					return this.heroRef.AbilityIds["lone_druid_true_form"].Level
				return 0
			},
			"LockedLevel": true,
			"Buff": {
				"NoTarget": true,
				"Self": "lone_druid_true_form_battle_cry_buff",
				"Refresh": "override"
			},
			"Cooldown": 60,
			"ManaCost": 50,
		},
		"luna_lucent_beam": {
			"Name": "Lucent beam",
			"Cooldown": 6,
			"ManaCost": function(){ return 80 + this.Level * 10 },
		},
		"luna_moon_glaive": {
			"Name": "Moon glaive"
		},
		"luna_lunar_blessing": {
			"Name": "Lunar blessing",
			"Aura": "luna_lunar_blessing_aura",
			"VisionNight": 1000
		},
		"luna_eclipse": {
			"Name": "Eclipse",
			"LevelMax": 3,
			"Class": "Ultimate",
			"Restrictions": [6, 11, 16],
			"Cooldown": 140,
			"ManaCost": function(){ return 100 + this.Level * 50 },
		},
		"lycan_summon_wolves": {
			"Name": "Summon wolves",
			"Cooldown": 30,
			"ManaCost": 145,
		},
		"lycan_howl": {
			"Name": "Howl",
			"Buff": {
				"Name": "lycan_howl_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "override"
			},
			"Cooldown": function(){ return 55 - this.Level * 5 },
			"ManaCost": function(){ return 10 + this.Level * 5 },
		},
		"lycan_feral_impulse": {
			"Name": "Feral impulse",
			"AttackSpeed": function(){ return 10 + 5 * this.Level },
			"DamagePercentage": function(){ return 0.1 + 0.05 * this.Level }
		},
		"lycan_shapeshift": {
			"Name": "Shapeshift",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 150 - this.Level * 30 },
			"ManaCost": 100,
			"Buff": {
				"Name": "lycan_shapeshift_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "override",
			}
		},
		"magnataur_shockwave": {
			"Name": "Shockwave",
			"Cooldown": function(){ return 11 - this.Level },
			"ManaCost": 90,
		},
		"magnataur_empower": {
			"Name": "Empower",
			"Buff": {
				"Name": "magnataur_empower_buff",
				"NoTarget": true,
				"Teammates": true,
				"Self": true,
				"Refresh": "override"
			},
			"Cooldown": 8,
			"ManaCost": function(){ return 20 + this.Level * 10 },
		},
		"magnataur_skewer": {
			"Name": "Skewer",
			"Cooldown": 30,
			"ManaCost": 80,
		},
		"magnataur_reverse_polarity": {
			"Name": "Reverse polarity",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 130 - this.Level * 10 },
			"ManaCost": function(){ return 150 + this.Level * 50 },
		},
		"medusa_split_shot": {
			"Name": "Split shot"
		},
		"medusa_mystic_snake": {
			"Name": "Mystic snake",
			"Cooldown": 11,
			"ManaCost": function(){ return 130 + this.Level * 10 },
		},
		"medusa_mana_shield": {
			"Name": "Mana shield"
		},
		"medusa_stone_gaze": {
			"Name": "Stone gaze",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 90,
			"ManaCost": 200,
		},
		"meepo_earthbind": {
			"Name": "Earthbind",
			"Cooldown": function(){ return 24 - this.Level * 4 },
			"ManaCost": 100,
		},
		"meepo_poof": {
			"Name": "Poof",
			"Cooldown": function(){ return 14 - this.Level * 2 },
			"ManaCost": 80,
		},
		"meepo_geostrike": {
			"Name": "Geostrike"
		},
		"meepo_divided_we_stand": {
			"Name": "Divided we stand",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [3, 10, 17]
		},
		"mirana_starfall": {
			"Name": "Starstorm",
			"Cooldown": 12,
			"ManaCost": function(){ return 80 + this.Level * 20 },
		},
		"mirana_arrow": {
			"Name": "Sacred arrow",
			"Cooldown": 17,
			"ManaCost": 100,
		},
		"mirana_leap": {
			"Name": "Leap",
			"Cooldown": function(){ return 34 - this.Level * 4 },
			"ManaCost": function(){ return 45 + this.Level * 5 },
		},
		"mirana_invis": {
			"Name": "Moonlight shadow",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 160 - this.Level * 20 },
			"ManaCost": 75,
		},
		"morphling_waveform": {
			"Name": "Waveform",
			"Cooldown": 11,
			"ManaCost": [140, 155, 160, 165],
		},
		"morphling_adaptive_strike": {
			"Name": "Adaptive strike",
			"Cooldown": 10,
			"ManaCost": function(){ return 110 - this.Level * 10 },
		},
		"morphling_morph_agi": {
			"Name": "Morph (Agility)",
			"Agility": function(){ return this.Level > 0 ? 2 + this.Level : 0 }
		},
		"morphling_morph_str": {
			"Name": "Morph (Strength)",
			"Strength": function(){ return this.Level > 0 ? 2 + this.Level : 0 },
			"LockedLevel": true,
			"Level": function() {
				if (this.heroRef && this.heroRef.AbilityIds.morphling_morph_agi)
					return this.heroRef.AbilityIds.morphling_morph_agi.Level
				return 0
			},
		},
		"morphling_replicate": {
			"Name": "Replicate",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 80,
			"ManaCost": 25,
		},
		"morphling_hybrid": {
			"Name": "Hybrid",
			"Level": function() {
				if (this.heroTotal.HasAghanims)
					return 1
				return 0
			},
			"LevelMin": 1,
			"LevelMax": 1,
			"Hidden": function() {
				if (this.heroTotal.HasAghanims)
					return false
				return true
			},
			"Cooldown": 60,
			"ManaCost": 200,
		},
		"naga_siren_mirror_image": {
			"Name": "Mirror image",
			"Cooldown": 40,
			"ManaCost": function(){ return 60 + this.Level * 10 },
		},
		"naga_siren_ensnare": {
			"Name": "Ensnare",
			"Cooldown": 12,
			"ManaCost": function(){ return 80 + this.Level * 10 },
		},
		"naga_siren_rip_tide": {
			"Name": "Rip Tide",
			"Cooldown": 10,
			"ManaCost": function(){ return 70 + this.Level * 10 },
		},
		"naga_siren_song_of_the_siren": {
			"Name": "Song of the Siren",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 240 - this.Level * 60 },
			"ManaCost": 100,
		},
		"necrolyte_death_pulse": {
			"Name": "Death pulse",
			"Cooldown": function(){ return 9 - this.Level },
			"ManaCost": function(){ return 105 + this.Level * 20 },
		},
		"necrolyte_heartstopper_aura": {
			"Name": "Heartstopper aura"
		},
		"necrolyte_sadist": {
			"Name": "Sadist",
			"Meta": { "Wrap": ["SadistScale"] },
			"Charges": 0,
			"HealthRegeneration": function(){ return this.Charges * this.SadistScale || 0 },
			"ManaRegenerationFlat": function(){ return this.Charges * this.SadistScale * 2 || 0 },
			"SadistScale": [1, 2, 3, 6],
		},
		"necrolyte_reapers_scythe": {
			"Name": "Reaper's scythe",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){
				if (this.heroTotal.HasAghanims)
					return 70
				return 115 - this.Level * 15
			},
			"ManaCost": function() {
				if (this.heroTotal.HasAghanims)
					return [0, 150, 340, 500][this.Level]
				return [0, 175, 340, 500][this.Level]
			},
		},
		"nevermore_shadowraze1": {
			"Name": "Shadowraze (near)",
			"Cooldown": 10,
			"ManaCost": 90,
		},
		"nevermore_shadowraze2": {
			"Name": "Shadowraze(medium)",
			"Cooldown": 10,
			"ManaCost": 90,
		},
		"nevermore_shadowraze3": {
			"Name": "Shadowraze (far)",
			"Cooldown": 10,
			"ManaCost": 90,
		},
		"nevermore_necromastery": {
			"Name": "Necromastery",
			"Charges": 0,
			"ChargesMax": function(){
				if (this.Level < 1)
					return 0;
				if (this.heroTotal.HasAghanims)
					return 14 + this.Level * 8
				return 12 + this.Level * 6
			},
			"ChargesSemantic": "Souls",
			"Damage": function(){ return this.Charges * 2 }
		},
		"nevermore_dark_lord": {
			"Name": "Presence of the Dark Lord"
		},
		"nevermore_requiem": {
			"Name": "Requiem of Souls",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 130 - this.Level * 10 },
			"ManaCost": function(){ return 125 + this.Level * 25 },
		},
		"night_stalker_void": {
			"Name": "Void"
		},
		"night_stalker_crippling_fear": {
			"Name": "Crippling fear"
		},
		"night_stalker_hunter_in_the_night": {
			"Name": "Hunter in the night",
			"Charges": 0,
			"ChargesMax": 1,
			"ChargesSemantic": "Night",
			"AttackSpeed": function(){ return this.Level > 0 ? (30 + 15 * this.Level) * this.Charges : 0 },
			"MovementSpeedPercentage": function(){ return this.Level > 0 ? (0.15 + 0.05 * this.Level) * this.Charges : 0 }
		},
		"night_stalker_darkness": {
			"Name": "Darkness",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"nyx_assassin_impale": {
			"Name": "Impale"
		},
		"nyx_assassin_mana_burn": {
			"Name": "Mana burn"
		},
		"nyx_assassin_spiked_carapace": {
			"Name": "Spiked carapace"
		},
		"nyx_assassin_burrow": {
			"Name": "Burrow",
			"Level": function() {
				if (this.heroTotal.HasAghanims)
					return 1
				return 0
			},
			"Hidden": function() {
				if (this.heroTotal.HasAghanims)
					return false
				return true
			},
		},
		"nyx_assassin_vendetta": {
			"Name": "Vendetta",
			"Buff": {
				"Name": "nyx_assassin_vendetta_buff",
				"NoTarget": true,
				"Self": true,
				"Refresh": "override"
			},
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"obsidian_destroyer_arcane_orb": {
			"Name": "Arcane orb",
			"Buff": {
				"NoTarget": true,
				"Self": "obsidian_destroyer_arcane_orb_buff",
				"Refresh": "override"
			}
		},
		"obsidian_destroyer_astral_imprisonment": {
			"Name": "Astral"
		},
		"obsidian_destroyer_essence_aura": {
			"Name": "Essence aura",
			"Mana": function(){ return 50 + 75 * this.Level }
		},
		"obsidian_destroyer_sanity_eclipse": {
			"Name": "Sanity's eclipse",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"ogre_magi_fireblast": {
			"Name": "Fireblast"
		},
		"ogre_magi_ignite": {
			"Name": "Ignite"
		},
		"ogre_magi_bloodlust": {
			"Name": "Bloodlust",
			"Buff": {
				"Name": "ogre_magi_bloodlust_buff",
				"Self": true,
				"Teammates": true,
				"NoTarget": true,
				"Refresh": "override"
			}
		},
		"ogre_magi_unrefined_fireblast": {
			"Name": "Unrefined fireblast",
			"Level": function() {
				if (this.heroTotal.HasAghanims)
					return 1
				return 0
			},
			"Hidden": function() {
				if (this.heroTotal.HasAghanims)
					return false
				return true
			},
		},
		"ogre_magi_multicast": {
			"Name": "Multicast",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"omniknight_purification": {
			"Name": "Purification",
			"Cooldown": 10,
			"ManaCost": function(){ return 80 + this.Level * 20 },
		},
		"omniknight_repel": {
			"Name": "Repel",
			"Cooldown": 14,
			"ManaCost": 50,
		},
		"omniknight_degen_aura": {
			"Name": "Degen aura"
		},
		"omniknight_guardian_angel": {
			"Name": "Guardian angel",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 150,
			"ManaCost": [125, 175, 250],
		},
		"oracle_fortunes_end": {
			"Name": "Fortune's end",
			"Cooldown": function(){ return 18 - this.Level * 3 },
			"ManaCost": 110,
		},
		"oracle_fates_edict": {
			"Name": "Fate's edict",
			"Cooldown": function(){ return 19 - this.Level * 3 },
			"ManaCost": 50,
		},
		"oracle_purifying_flames": {
			"Name": "Purifying flames",
			"Cooldown": function(){
				return this.heroTotal.HasAghanims ? 2.25 : 1
			},
			"ManaCost": function(){ return 40 + this.Level * 10 },
		},
		"oracle_false_promise": {
			"Name": "False promise",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"phantom_assassin_stifling_dagger": {
			"Name": "Stifling dagger"
		},
		"phantom_assassin_phantom_strike": {
			"Name": "Phantom strike",
			"Buff": {
				"NoTarget": true,
				"Self": "phantom_assassin_phantom_strike_buff",
				"Refresh": "leave"
			}
		},
		"phantom_assassin_blur": {
			"Name": "Blur",
			"Evasion": function(){ return this.Level > 0 ? 0.1 + 0.1 * this.Level : 0 }
		},
		"phantom_assassin_coup_de_grace": {
			"Name": "Coup de Grace",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"phantom_lancer_spirit_lance": {
			"Name": "Spirit lance"
		},
		"phantom_lancer_doppelwalk": {
			"Name": "Doppelganger"
		},
		"phantom_lancer_phantom_edge": {
			"Name": "Phantom rush"
		},
		"phantom_lancer_juxtapose": {
			"Name": "Juxtapose",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"phoenix_icarus_dive": {
			"Name": "Icarus dive"
		},
		"phoenix_fire_spirits": {
			"Name": "Fire spirits"
		},
		"phoenix_sun_ray": {
			"Name": "Sun ray"
		},
		"phoenix_supernova": {
			"Name": "Supernova",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"puck_illusory_orb": {
			"Name": "Illusory orb"
		},
		"puck_waning_rift": {
			"Name": "Waning rift"
		},
		"puck_phase_shift": {
			"Name": "Phase shift"
		},
		"puck_ethereal_jaunt": {
			"Name": "Ethereal jaunt",
			"Level": function() {
				if (this.heroRef && this.heroRef.AbilityIds["puck_illusory_orb"])
					return this.heroRef.AbilityIds["puck_illusory_orb"].Level > 0 ? 1 : 0
				return 0
			},
		},
		"puck_dream_coil": {
			"Name": "Dream coil",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"pudge_meat_hook": {
			"Name": "Meat hook",
			"Cooldown": function(){
				if (this.heroTotal.HasAghanims)
					return 4
				return 15 - this.Level
			},
			"ManaCost": function(){ return 100 + this.Level * 10 }
		},
		"pudge_rot": {
			"Name": "Rot"
		},
		"pudge_flesh_heap": {
			"Name": "Flesh Heap",
			"Class": "Passive",
			"Level": 0,
			"LevelMax": 4,
			"Charges": 0,
			"ChargesSemantic": "Stacks",

			"Strength": function() {
				if (this.Level < 1 || this.Charges < 1)
					return 0
				return Math.floor((0.5 + this.Level * 0.5) * this.Charges)
			},
			//"MagicalResistance": function() { return this.Level > 0 ? 0.04 + this.Level * 0.02 : 0 }
			"MagicalResistance": function() { return 0.04 + this.Level * 0.02 }
		},
		"pudge_dismember": {
			"Name": "Dismember",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 35 - this.Level * 5 },
			"ManaCost": [100, 130, 170],
		},
		"pugna_nether_blast": {
			"Name": "Nether blast",
			"Cooldown": 5,
			"ManaCost": function(){ return 65 + this.Level * 20 },
		},
		"pugna_decrepify": {
			"Name": "Decrepify",
			"Buff": {
				"Name": "pugna_decrepify_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "override"
			},
			"Cooldown": function(){ return 18 - this.Level * 3 },
			"ManaCost": 60,
		},
		"pugna_nether_ward": {
			"Name": "Nether ward",
			"Cooldown": 35,
			"ManaCost": 80,
		},
		"pugna_life_drain": {
			"Name": "Life drain",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){	return this.heroTotal.HasAghanims ? 22 : 0 },
			"ManaCost": function(){ return 75 + this.Level * 50 },
		},
		"queenofpain_shadow_strike": {
			"Name": "Shadow strike"
		},
		"queenofpain_blink": {
			"Name": "Blink"
		},
		"queenofpain_scream_of_pain": {
			"Name": "Scream of pain"
		},
		"queenofpain_sonic_wave": {
			"Name": "Sonic wave",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"rattletrap_battery_assault": {
			"Name": "Battery assault"
		},
		"rattletrap_power_cogs": {
			"Name": "Power cogs"
		},
		"rattletrap_rocket_flare": {
			"Name": "Rocket flare"
		},
		"rattletrap_hookshot": {
			"Name": "Hookshot",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"razor_plasma_field": {
			"Name": "Plasma field"
		},
		"razor_static_link": {
			"Name": "Static link",
			"Buff": {
				"NoTarget": true,
				"Self": "razor_static_link_buff",
				"Refresh": "override"
			}
		},
		"razor_unstable_current": {
			"Name": "Unstable current"
		},
		"razor_eye_of_the_storm": {
			"Name": "Eye of the storm",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"riki_smoke_screen": {
			"Name": "Smoke screen",
			"Cooldown": 11,
			"ManaCost": 90,
		},
		"riki_permanent_invisibility": {
			"Name": "Cloak and dagger",
			"Cooldown": function(){ return 7 - this.Level },
		},
		"riki_blink_strike": {
			"Name": "Blink strike",
			"Cooldown": function(){ return 20 - this.Level * 4 },
			"ManaCost": 50,
		},
		"riki_tricks_of_the_trade": {
			"Name": "Tricks of the trade",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 45 - this.Level * 5 },
			"ManaCost": 75,
		},
		"rubick_telekinesis": {
			"Name": "Telekinesis"
		},
		"rubick_fade_bolt": {
			"Name": "Fade bolt"
		},
		"rubick_null_field": {
			"Name": "Null field",
			"Aura": "rubick_null_field_aura"
		},
		"rubick_spell_steal": {
			"Name": "Spell steal",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"sandking_burrowstrike": {
			"Name": "Burrowstrike",
			"Cooldown": 11,
			"ManaCost": function(){ return 100 + this.Level * 10 },
		},
		"sandking_sand_storm": {
			"Name": "Sand storm",
			"Cooldown": function(){ return 42 - this.Level * 8 },
			"ManaCost": function(){ return 70 - this.Level * 10 },
		},
		"sandking_caustic_finale": {
			"Name": "Caustic finale"
		},
		"sandking_epicenter": {
			"Name": "Epicenter",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 130 - this.Level * 10 },
			"ManaCost": function(){ return 75 + this.Level * 75 },
		},
		"shadow_demon_disruption": {
			"Name": "Disruption",
			"Cooldown": function(){ return 30 - this.Level * 3 },
			"ManaCost": 120,
		},
		"shadow_demon_soul_catcher": {
			"Name": "Soul catcher",
			"Cooldown": function(){ return 14 - this.Level },
			"ManaCost": function(){ return 40 + this.Level * 10 },
		},
		"shadow_demon_shadow_poison": {
			"Name": "Shadow poison",
			"Cooldown": 2.5,
			"ManaCost": 40,
		},
		"shadow_demon_shadow_poison_release": {
			"Name": "Shadow poison release",
			"Level": function() {
				if (this.heroRef && this.heroRef.AbilityIds["shadow_demon_shadow_poison"])
					return this.heroRef.AbilityIds["shadow_demon_shadow_poison"].Level > 0 ? 1 : 0
				return 0
			},
		},
		"shadow_demon_demonic_purge": {
			"Name": "Demonic purge",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){
				if (this.heroTotal.HasAghanims)
					return 40
				return 50
			},
			"ManaCost": 200,
		},
		"shadow_shaman_ether_shock": {
			"Name": "Ether shock"
		},
		"shadow_shaman_voodoo": {
			"Name": "Hex"
		},
		"shadow_shaman_shackles": {
			"Name": "Shackles"
		},
		"shadow_shaman_mass_serpent_ward": {
			"Name": "Mass serpent ward",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"shredder_whirling_death": {
			"Name": "Whirling death"
		},
		"shredder_timber_chain": {
			"Name": "Timber chain"
		},
		"shredder_reactive_armor": {
			"Name": "Reactive armor",
			"Charges": 1,
			"ChargesMax": function() { return this.Level * 5 },
			"ChargesSemantic": "Stacks",
			"Armor": function(){ return this.Level > 0 ? this.Charges : 0 },
			"HealthRegeneration": function(){ return this.Level > 0 ? this.Charges : 0 }
		},
		"shredder_chakram": {
			"Name": "Chakram",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"silencer_curse_of_the_silent": {
			"Name": "Arcane curse"
		},
		"silencer_glaives_of_wisdom": {
			"Name": "Glaives of wisdom",
			"Charges": 0,
			"ChargesSemantic": "Stolen int",
			"Intelligence": function(){ return this.Charges }
		},
		"silencer_last_word": {
			"Name": "Last word"
		},
		"silencer_global_silence": {
			"Name": "Global silence",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"skeleton_king_hellfire_blast": {
			"Name": "Hellfire blast"
		},
		"skeleton_king_vampiric_aura": {
			"Name": "Vampiric aura"
		},
		"skeleton_king_mortal_strike": {
			"Name": "Mortal strike"
		},
		"skeleton_king_reincarnation": {
			"Name": "Reincarnation",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"skywrath_mage_arcane_bolt": {
			"Name": "Arcane bolt"
		},
		"skywrath_mage_concussive_shot": {
			"Name": "Concussive shot"
		},
		"skywrath_mage_ancient_seal": {
			"Name": "Ancient seal"
		},
		"skywrath_mage_mystic_flare": {
			"Name": "Mystic flare",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"slardar_sprint": {
			"Name": "Sprint",
			"Buff": {
				"NoTarget": true,
				"Self": "slardar_sprint_buff",
				"Refresh": "override"
			}
		},
		"slardar_slithereen_crush": {
			"Name": "Slithereen crush"
		},
		"slardar_bash": {
			"Name": "Bash"
		},
		"slardar_amplify_damage": {
			"Name": "Amplify damage",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"slark_dark_pact": {
			"Name": "Dark pact"
		},
		"slark_pounce": {
			"Name": "Pounce"
		},
		"slark_essence_shift": {
			"Name": "Essence shift",
			"Charges": 0,
			"ChargesSemantic": "Stolen stats",
			"Agility": function(){ return this.Charges * 3 }
		},
		"slark_shadow_dance": {
			"Name": "Shadow dance",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"sniper_shrapnel": {
			"Name": "Shrapnel"
		},
		"sniper_headshot": {
			"Name": "Headshot"
		},
		"sniper_take_aim": {
			"Name": "Take aim",
			"Range": function() { return this.Level * 100 }
		},
		"sniper_assassinate": {
			"Name": "Assassinate",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"spectre_spectral_dagger": {
			"Name": "Spectral dagger",
			"Buff": {
				"NoTarget": true,
				"Self": "spectre_spectral_dagger_buff",
				"Refresh": "override"
			}
		},
		"spectre_desolate": {
			"Name": "Desolate"
		},
		"spectre_dispersion": {
			"Name": "Dispersion"
		},
		"spectre_reality": {
			"Name": "Reality"
		},
		"spectre_haunt": {
			"Name": "Haunt",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"spirit_breaker_charge_of_darkness": {
			"Name": "Charge of darkness"
		},
		"spirit_breaker_empowering_haste": {
			"Name": "Empowering haste",
			"Aura": "spirit_breaker_empowering_haste_aura",
			"Charges": 0,
			"ChargesMax": 2,
			"ChargesSemantic": "Active status",
			"Warning": "Status represents state: 0 - default, 1 - used, 2 - cooldown"
		},
		"spirit_breaker_greater_bash": {
			"Name": "Greater bash"
		},
		"spirit_breaker_nether_strike": {
			"Name": "Nether strike",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"storm_spirit_static_remnant": {
			"Name": "Static remnant"
		},
		"storm_spirit_electric_vortex": {
			"Name": "Electric vortex",
			"Buff": {
				"NoTarget": true,
				"Self": "storm_spirit_electric_vortex_self",
				"Refresh": "leave"
			}
		},
		"storm_spirit_overload": {
			"Name": "Overload"
		},
		"storm_spirit_ball_lightning": {
			"Name": "Ball lightning",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"sven_storm_bolt": {
			"Name": "Storm bolt"
		},
		"sven_great_cleave": {
			"Name": "Great cleave"
		},
		"sven_warcry": {
			"Name": "Warcry",
			"Buff": {
				"Name": "sven_warcry_buff",
				"Self": true,
				"NoTarget": true,
				"Teammates": true,
				"Refresh": "override"
			}
		},
		"sven_gods_strength": {
			"Name": "God's strength",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": function() { // either brilliant use of what's possible now, or very stupid
				if (this.heroTotal.HasAghanims)
					return { "NoTarget": true, "Self": "sven_gods_strength_buff",
					"Teammates": "sven_gods_strength_buff_aghanims", "Refresh": "override" }
				return { "NoTarget": true, "Self": "sven_gods_strength_buff", "Refresh": "override" }
			}
		},
		"techies_land_mines": {
			"Name": "Land mines"
		},
		"techies_stasis_trap": {
			"Name": "Stasis trap"
		},
		"techies_suicide": {
			"Name": "Suicide squad, attack!"
		},
		"techies_focused_detonate": {
			"Name": "Focused detonate"
		},
		"techies_minefield_sign": {
			"Name": "Minefield sign"
		},
		"techies_remote_mines": {
			"Name": "Remote mines",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"templar_assassin_refraction": {
			"Name": "Refraction",
			"Buff": {
				"NoTarget": true,
				"Refresh": "override",
				"Self": [
					"templar_assassin_refraction_buff_damage",
					"templar_assassin_refraction_buff_absorb"
				]
			}
		},
		"templar_assassin_meld": {
			"Name": "Meld",
			"Buff": {
				"NoTarget": true,
				"Self": "templar_assassin_meld_buff",
				"Refresh": "override"
			}
		},
		"templar_assassin_psi_blades": {
			"Name": "Psi blades",
			"Range": function(){ return 60 * this.Level }
		},
		"templar_assassin_psionic_trap": {
			"Name": "Psionic trap",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"templar_assassin_trap": {
			"Name": "Trap",
			"Level": function() {
				if (this.heroRef && this.heroRef.AbilityIds["templar_assassin_psionic_trap"])
					return this.heroRef.AbilityIds["templar_assassin_psionic_trap"].Level > 0 ? 1 : 0
				return 0
			},
			"LockedLevel": true
		},
		"terrorblade_reflection": {
			"Name": "Reflection",
			"Cooldown": function(){ return 24 - this.Level * 2 },
			"ManaCost": 50,
		},
		"terrorblade_conjure_image": {
			"Name": "Conjure image",
			"Cooldown": 16,
			"ManaCost": 70,
		},
		"terrorblade_metamorphosis": {
			"Name": "Metamorphosis",
			"Buff": {
				"NoTarget": true,
				"Self": "terrorblade_metamorphosis_buff",
				"Refresh": "override"
			},
			"Cooldown": 140,
			"ManaCost": 100,
		},
		"terrorblade_sunder": {
			"Name": "Sunder",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 160 - this.Level * 40 },
			"ManaCost": function(){ return 300 - this.Level * 100 },
		},
		"tidehunter_gush": {
			"Name": "Gush"
		},
		"tidehunter_kraken_shell": {
			"Name": "Kraken shell"
		},
		"tidehunter_anchor_smash": {
			"Name": "Anchor smash"
		},
		"tidehunter_ravage": {
			"Name": "Ravage",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"tinker_laser": {
			"Name": "Laser"
		},
		"tinker_heat_seeking_missile": {
			"Name": "Heat seeking missile"
		},
		"tinker_march_of_the_machines": {
			"Name": "March of the machines"
		},
		"tinker_rearm": {
			"Name": "Rearm",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"tiny_avalanche": {
			"Name": "Avalance",
			"Cooldown": 17,
			"ManaCost": 120,
		},
		"tiny_toss": {
			"Name": "Toss",
			"Cooldown": 8,
			"ManaCost": 120,
		},
		"tiny_craggy_exterior": {
			"Name": "Craggy exterior",
			"Armor": function(){ return this.Level > 0 ? 1 + this.Level : 0 }
		},
		"tiny_grow": {
			"Name": "Grow",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"DamageBase": function(){ return 50 * this.Level },
			"MovementSpeed": function(){ return this.Level > 0 ? 30 + 1 * this.Level : 0 },
			"AttackSpeed": function(){ return this.Level > 0 ? -5 - 15 * this.Level : 0 },
			"Range": function() {
				if (this.heroRef && this.heroRef.Total.HasAghanims)
					return 85
				return 0
			},
		},
		"treant_natures_guise": {
			"Name": "Nature's guise"
		},
		"treant_leech_seed": {
			"Name": "Leech seed"
		},
		"treant_living_armor": {
			"Name": "Living armor"
		},
		"treant_eyes_in_the_forest": {
			"Name": "Eyes in the forest",
			"Level": function() {
				if (this.heroTotal.HasAghanims)
					return 1
				return 0
			},
			"Hidden": function() {
				if (this.heroTotal.HasAghanims)
					return false
				return true
			},
		},
		"treant_overgrowth": {
			"Name": "Overgrowth",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"troll_warlord_berserkers_rage": {
			"Name": "Berserker's rage",
			"Charges": 0,
			"ChargesMax": function(){ return this.Level > 0 ? 1 : 0 },
			"ChargesSemantic": "Active",
			"Image": function(){ return this.Charges ? "troll_warlord_berserkers_rage_active" : "troll_warlord_berserkers_rage" },
			"AttackType": function(){ return this.Charges ? "Melee" : "Ranged" },
			"Range": function(){ return this.Charges ? -350 : 0 },
			"MovementSpeed": function(){ return this.Charges ? 10 * this.Level : 0},
			"AttackRate": function(){ return this.Charges ? -0.2 : 0},
			"Armor": function(){ return this.Charges ? 6 : 0 },
		},
		"troll_warlord_whirling_axes_ranged": {
			"Name": "Whirling axes (Ranged)",
			"Image": function(){
				if (this.heroRef &&
					this.heroRef.AbilityIds["troll_warlord_berserkers_rage"] &&
					this.heroRef.AbilityIds["troll_warlord_berserkers_rage"].Charges > 0 )
					return "troll_warlord_whirling_axes_melee"
				return "troll_warlord_whirling_axes_ranged";
			},
			"Cooldown": function(){ return 22 - this.Level * 3 },
			"ManaCost": 50
		},
		"troll_warlord_whirling_axes_melee": {
			"Name": "Whirling axes (Melee)",
			"Cooldown": 12,
			"ManaCost": 50
		},
		"troll_warlord_fervor": {
			"Name": "Fervor",
			"Charges": 0,
			"ChargesMax": 7,
			"ChargesSemantic": "Stacks",
			"AttackSpeed": function(){ return (10 + 5 * this.Level) * this.Charges }
		},
		"troll_warlord_battle_trance": {
			"Name": "Battle trance",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": {
				"Name": "troll_warlord_battle_trance_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "override"
			},
			"Cooldown": 30,
			"ManaCost": 75
		},
		"tusk_ice_shards": {
			"Name": "Ice shards",
			"Cooldown": function(){ return 22 - this.Level * 3 },
			"ManaCost": function(){ return 95 + this.Level * 5 }
		},
		"tusk_snowball": {
			"Name": "Snowball",
			"Cooldown": function(){ return 22 - this.Level },
			"ManaCost": 75
		},
		"tusk_frozen_sigil": {
			"Name": "Frozen sigil",
			"Cooldown": 50,
			"ManaCost": 75
		},
		"tusk_walrus_punch": {
			"Name": "",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 48 - this.Level * 12 },
			"ManaCost": function(){ return 25 + this.Level * 25 }
		},
		"tusk_walrus_kick": {
			"Name": "Walrus kick",
			"LevelMax": 1,
			"Level": function() {
				if (this.heroTotal.HasAghanims)
					return 1
				return 0
			},
			"Hidden": function() {
				if (this.heroTotal.HasAghanims)
					return false
				return true
			},
			"Cooldown": 8,
			"ManaCost": 100
		},
		"undying_decay": {
			"Name": "Decay",
			"Charges": 0,
			"ChargesSemantic": "Stolen str",
			"Strength": function(){
				if (this.heroTotal.HasAghanims)
					return 10 * this.Charges
				return 4 * this.Charges
			}
		},
		"undying_soul_rip": {
			"Name": "Soul rip"
		},
		"undying_tombstone": {
			"Name": "Tombstone"
		},
		"undying_flesh_golem": {
			"Name": "Flesh golem",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"ursa_earthshock": {
			"Name": "Earthshock",
			"Cooldown": 5,
			"ManaCost": 75,
		},
		"ursa_overpower": {
			"Name": "Overpower",
			"Buff": {
				"NoTarget": true,
				"Self": "ursa_overpower_buff",
				"Refresh": "override"
			},
			"Cooldown": 10,
			"ManaCost": function(){ return 35 + this.Level * 10 },
		},
		"ursa_fury_swipes": {
			"Name": "Fury swipes",
			"Charges": 0,
			"ChargesSemantic": "Stacks",
			"Damage": function() { return this.Level > 0 ? (10 + 5 * this.Level) * this.Charges : 0 }
		},
		"ursa_enrage": {
			"Name": "Enrage",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 60 - this.Level * 10 },
			"ManaCost": 0,
		},
		"vengefulspirit_magic_missile": {
			"Name": "Magic missile",
			"Cooldown": function(){ return 14 - this.Level },
			"ManaCost": function(){ return 100 + this.Level * 10 },
		},
		"vengefulspirit_wave_of_terror": {
			"Name": "Wave of terror",
			"Cooldown": 20,
			"ManaCost": 40,
		},
		"vengefulspirit_command_aura": {
			"Name": "Vengeance aura",
			"Aura": "vengefulspirit_command_aura_aura"
		},
		"vengefulspirit_nether_swap": {
			"Name": "Nether swap",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){
				if (this.heroTotal.HasAghanims)
					return 10;
				return 45;
			},
			"ManaCost": function(){ return 50 + this.Level * 50 },
		},
		"venomancer_venomous_gale": {
			"Name": "Venomous gale",
			"Cooldown": function(){ return 22 - this.Level },
			"ManaCost": 125,
		},
		"venomancer_poison_sting": {
			"Name": "Poison sting",
		},
		"venomancer_plague_ward": {
			"Name": "Plague ward",
			"Cooldown": 50,
			"ManaCost": 20,
		},
		"venomancer_poison_nova": {
			"Name": "Poison nova",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 160 - this.Level * 20 },
			"ManaCost": function(){ return 100 + this.Level * 100 },
		},
		"viper_poison_attack": {
			"Name": "Poison attack",
			"ManaCost": 20,
		},
		"viper_nethertoxin": {
			"Name": "Nethertoxin",
		},
		"viper_corrosive_skin": {
			"Name": "Corrosive skin",
			"Class": "Passive",
			"MagicalResistance": function() { return this.Level > 0 ? 0.05 + this.Level * 0.05 : 0 }
		},
		"viper_viper_strike": {
			"Name": "Viper strike",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 10,
			"ManaCost": [125, 175, 250],
		},
		"visage_grave_chill": {
			"Name": "Grave chill"
		},
		"visage_soul_assumption": {
			"Name": "Soul assumption"
		},
		"visage_gravekeepers_cloak": {
			"Name": "Gravekeeper's cloak",
			"Charges": 4,
			"ChargesMax": 4,
			"ChargesSemantic": "Layers",
			"Armor": function(){ return 1.5 * this.Level * this.Charges },
			"MagicalResistance": function(){ return 0.05 * this.Level * this.Charges }
		},
		"visage_summon_familiars": {
			"Name": "Summon familiars",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"warlock_fatal_bonds": {
			"Name": "Fatal bonds"
		},
		"warlock_shadow_word": {
			"Name": "Shadow word",
			"Buff": {
				"Name": "warlock_shadow_word_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "override"
			}
		},
		"warlock_upheaval": {
			"Name": "Upheaval"
		},
		"warlock_rain_of_chaos": {
			"Name": "Chaotic offering",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"weaver_the_swarm": {
			"Name": "The swarm"
		},
		"weaver_shukuchi": {
			"Name": "Shukuchi"
		},
		"weaver_geminate_attack": {
			"Name": "Geminate attack"
		},
		"weaver_time_lapse": {
			"Name": "Time lapse",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"windrunner_shackleshot": {
			"Name": "Shackleshot",
			"Cooldown": 12,
			"ManaCost": function(){ return 80 + this.Level * 10 },
		},
		"windrunner_powershot": {
			"Name": "Powershot",
			"Cooldown": 9,
			"ManaCost": function(){ return 80 + this.Level * 10 },
		},
		"windrunner_windrun": {
			"Name": "Windrun",
			"Buff": {
				"NoTarget": true,
				"Self": "windrunner_windrun_buff",
				"Refresh": "override"
			},
			"Cooldown": 14,
			"ManaCost": 100,
		},
		"windrunner_focusfire": {
			"Name": "Focus fire",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Buff": function() { // either brilliant use of what's possible now, or very stupid
				if (this.heroTotal.HasAghanims)
					return { "NoTarget": true, "Self": "windrunner_focusfire_buff", "Refresh": "override" }
				return { "NoTarget": true, "Self": "windrunner_focusfire_buff_aghs", "Refresh": "override" }
			},
			"Cooldown": function(){
				if (this.heroTotal.HasAghanims)
					return 15
				return 60
			},
			"ManaCost": function(){ return 50 + this.Level * 25 },
		},
		"winter_wyvern_arctic_burn": {
			"Name": "Arctic burn",
			"Cooldown": function(){ return 60 - this.Level * 10 },
			"ManaCost": function(){ return 130 - this.Level * 10 },
		},
		"winter_wyvern_splinter_blast": {
			"Name": "Splinter blast",
			"Cooldown": 7,
			"ManaCost": function(){ return 110 + this.Level * 10 },
		},
		"winter_wyvern_cold_embrace": {
			"Name": "Cold embrace",
			"Buff": {
				"Name": "winter_wyvern_cold_embrace_buff",
				"Self": true,
				"Teammates": true,
				"NoTarget": true,
				"Refresh": "override"
			},
			"Cooldown": function(){ return 27 - this.Level * 3 },
			"ManaCost": 75,
		},
		"winter_wyvern_winters_curse": {
			"Name": "Winters curse",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 80,
			"ManaCost": 250,
		},
		"wisp_tether": {
			"Name": "Tether",
			"Buff": {
				"Name": "wisp_tether_buff",
				"Self": true,
				"Teammates": true,
				"NoTarget": true,
				"Refresh": "override"
			}
		},
		"wisp_spirits": {
			"Name": "Spirits"
		},
		"wisp_overcharge": {
			"Name": "Overcharge",
			"Buff": {
				"NoTarget": true,
				"Self": "wisp_overcharge_debuff",
				"Teammates":"wisp_overcharge_buff",
				"Refresh": "override"
			}
		},
		"wisp_relocate": {
			"Name": "Relocate",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"witch_doctor_paralyzing_cask": {
			"Name": "Paralyzing cask"
		},
		"witch_doctor_voodoo_restoration": {
			"Name": "Voodoo restoration"
		},
		"witch_doctor_maledict": {
			"Name": "Maledict"
		},
		"witch_doctor_death_ward": {
			"Name": "Death ward",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16]
		},
		"zuus_arc_lightning": {
			"Name": "Arc lightning",
			"Cooldown": 1.6,
			"ManaCost": function(){ return 60 + this.Level * 5 },
		},
		"zuus_lightning_bolt": {
			"Name": "Lightning bolt",
			"Cooldown": 6,
			"ManaCost": function(){ return 55 + this.Level * 20 },
		},
		"zuus_static_field": {
			"Name": "Static field"
		},
		"zuus_thundergods_wrath": {
			"Name": "Thundergod's wrath",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": 90,
			"ManaCost": [225, 325, 450],
		},
		"arc_warden_flux": {
			"Name": "Flux",
			"Cooldown": 18,
			"ManaCost": 75
		},
		"arc_warden_magnetic_field": {
			"Name": "Magnetic field",
			"Buff": {
				"Name": "arc_warden_magnetic_field_buff",
				"NoTarget": true,
				"Self": true,
				"Teammates": true,
				"Refresh": "override"
			},
			"Cooldown": function(){ return 40 - this.Level * 5 },
			"ManaCost": 110
		},
		"arc_warden_spark_wraith": {
			"Name": "Spark wraith",
			"Cooldown": 4,
			"ManaCost": 80
		},
		"arc_warden_tempest_double": {
			"Name": "Tempest double",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 45 - this.Level * 5 },
		},
		"abyssal_underlord_firestorm": {
			"Name": "Firestorm",
			"Cooldown": 12,
			"ManaCost": function(){ return 90 + this.Level * 10},
		},
		"abyssal_underlord_pit_of_malice": {
			"Name": "Pit of Malice",
			"Cooldown": function(){ return 24 - this.Level * 3},
			"ManaCost": function(){ return 85 + this.Level * 15},
		},
		"abyssal_underlord_atrophy_aura": {
			"Name": "Atrophy aura",
		},
		"abyssal_underlord_dark_rift": {
			"Name": "Dark rift",
			"Class": "Ultimate",
			"LevelMax": 3,
			"Restrictions": [6, 11, 16],
			"Cooldown": function(){ return 140 - this.Level * 10},
			"ManaCost": function(){ return this.Level * 75},
		},
	},

	//
	//	Buff definition
	//

	"Buffs": {
		"_base": {
			"Name": "Dummy buff",
			"Image": "empty",
			"Class": "Buff"
		},
		"abaddon_frostmourne_buff": {
			"Name": "Curse of avernus",
			"Image": "abaddon_frostmourne",
			"Class": "Buff",
			"Level": 0,
			"LockedLevel": true,
			"AttackSpeed": function() { return this.Level * 10 },
			"MovementSpeedPercentage": 0.15
		},
		"alchemist_chemical_rage_buff": {
			"Name": "Chemical rage",
			"Image": "alchemist_chemical_rage",
			"Level": 0,
			"LockedLevel": true,
			"AttackRate": function(){ return -0.1 - this.Level * 0.2 },
			"HealthRegeneration": function(){ return 25 + this.Level * 25 },
			"MovementSpeed": [30, 40, 60],
			"ManaRegenerationBase": function(){ return -1.5 + this.Level * 4.5 },
		},
		"axe_berserkers_call_buff": {
			"Name": "Berserker's call armor",
			"Image": "axe_berserkers_call",
			"LockedLevel": true,
			"Class": "Buff",
			"Armor": 40
		},
		"axe_culling_blade_buff": {
			"Name": "Track movespeed",
			"Class": "Buff",
			"Image": "axe_culling_blade",
			"LockedLevel": true,
			"MovementSpeedPercentage": 0.3,
			"AttackSpeed": 30
		},
		"beastmaster_inner_beast_aura": {
			"Name": "Inner beast",
			"Class": "Aura",
			"Image": "beastmaster_inner_beast",
			"Level": function() {
				return this.emitterRef ? this.emitterRef.Level : 0;
			},
			"AttackSpeed": function () {
				if (!this.emitterRef) {
					return 0;
				}
				if (this.emitterRef.Level > 0)
					return 5 + this.emitterRef.Level * 10
				return 0;
			},
			"Hidden": function(){
				return this.Level == 0 || this.AttackSpeed == 0
			}
		},
		"bounty_hunter_wind_walk_buff": {
			"Name": "Wind walk",
			"Class": "Buff",
			"Image": "bounty_hunter_wind_walk",
			"Level": 0,
			"LockedLevel": true,
			"Damage": function() { return this.Level * 30 }
		},
		"bounty_hunter_track_buff": {
			"Name": "Track movespeed",
			"Class": "Buff",
			"Image": "bounty_hunter_track",
			"LockedLevel": true,
			"MovementSpeedPercentage": 0.2
		},
		"broodmother_spin_web_buff": {
			"Name": "Inside web",
			"Image": "broodmother_spin_web",
			"MovementSpeedPercentage": function(){return 0.15 + this.Level * 0.05},
			"HealthRegeneration": function(){return this.Level * 2}
		},
		"broodmother_insatiable_hunger_buff": {
			"Name": "Insatiable hunger",
			"Image": "broodmother_insatiable_hunger",
			"Class": "Buff",
			"Level": 0,
			"LockedLevel": true,
			"Damage": function() {return 30 + this.Level * 30 }
		},
		"clinkz_strafe_buff": {
			"Name": "Strafe",
			"Image": "clinkz_strafe",
			"Level": 0,
			"LockedLevel": true,
			"Class": "Buff",
			"AttackSpeed": 130
		},
		"clinkz_searing_arrows_buff": {
			"Name": "Searing Arrows",
			"Image": "clinkz_searing_arrows",
			"Level": 0,
			"LockedLevel": true,
			"Damage": function(){return 20 + this.Level * 10 }
		},
		"clinkz_wind_walk_buff": {
			"Name": "Skeleton walk",
			"Image": "clinkz_wind_walk",
			"Class": "Buff",
			"Level": 0,
			"LockedLevel": true,
			"MovementSpeedPercentage": function() { return this.Level * 0.11 }
		},
		"clinkz_death_pact_buff": {
			"Name": "Death pact",
			"Image": "clinkz_death_pact",
			"Level": 0,
			"LockedLevel": true,
			"Charges": 240,
			"ChargesMin": 240,
			"ChargesMax": 1400,
			"ChargesSemantic": "Creep HP",
			"DamageBase": function(){ return Math.floor(this.Charges * (0.035 + 0.015 * this.Level)) },
			"Health": function(){ return Math.floor(this.Charges * (0.35 + 0.15 * this.Level)) }
		},
		"crystal_maiden_brilliance_aura_aura": {
			"Name": "Arcane aura",
			"Class": "Aura",
			"Image": "crystal_maiden_brilliance_aura",
			"Level": function() { return this.emitterRef ? this.emitterRef.Level : 0 },
			"ManaRegenerationFlat": function() {
				/*	if (!this.emitterRef)
						return 0;
					if (this.Level < 1)
						return 0;*/
					if (this.heroRef && this.heroRef.AbilityIds.crystal_maiden_brilliance_aura)
						return [0, 2, 3, 4, 8][this.Level]
					return [0, 1, 1.5, 2, 3][this.Level]
			},
			"Hidden": function(){
				return this.Level == 0 || this.ManaRegenerationFlat == 0
			}
		},
		"dazzle_weave_buff": {
			"Name": "Weave",
			"Class": "Buff",
			"Image": "dazzle_weave",
			"LockedLevel": true,
			"Level": 0,
			"Charges": 0,
			"ChargesMax": 24,
			"ChargesSemantic": "Duration",
			"Armor": function(){ return (0.5 + this.Level * 0.25) * this.Charges },
		},
		"dazzle_weave_buff_aghs": {
			"Name": "Weave (upgraded)",
			"Class": "Buff",
			"Image": "dazzle_weave",
			"LockedLevel": true,
			"Level": 0,
			"Charges": 0,
			"ChargesMax": 24,
			"ChargesSemantic": "Duration",
			"Armor": function(){ return this.Level > 0 ? (1.0 + this.Level * 0.25) * this.Charges : 0 }
		},
		"doom_bringer_scorched_earth_buff": {
			"Name": "Scorched earth",
			"Class": "Buff",
			"Image": "doom_bringer_scorched_earth",
			"Level": 0,
			"LockedLevel": true,
			"MovementSpeedPercentage": 0.14,
			"HealthRegeneration": function() { return this.Level > 0 ? this.Level * 10 : 0 }
		},
		"dragon_knight_elder_dragon_form_buff": {
			"Name": "Elder Dragon form",
			"Image": "dragon_knight_elder_dragon_form",
			"Level": 0,
			"LockedLevel": true,
			"MovementSpeed": 25,
			"Range": 372,
			"AttackType": "Ranged"
		},
		"drow_ranger_trueshot_aura": {
			"Name": "Precision aura",
			"Class": "Aura",
			"Image": "drow_ranger_trueshot",
			"Level": function() {
				return this.emitterRef ? this.emitterRef.Level : 0;
			},
			"Damage": function() {
					if (!this.emitterRef)
						return 0;
					if (this.heroTotal.AttackType != "Ranged")
						return 0;
					if (this.emitterRef.Level > 0)
						return Math.floor(this.ownerRef.Total.Agility * (0.14 + this.emitterRef.Level * 0.06))
					return	0;
			},
			"Hidden": function(){
				return this.Level == 0 || this.Damage == 0
			}
		},
		"earthshaker_enchant_totem_buff": {
			"Name": "Enchant totem",
			"Image": "earthshaker_enchant_totem",
			"Level": 0,
			"LockedLevel": true,
			"DamagePercentage": function() { return this.Level }
		},
		"huskar_inner_vitality_buff": {
			"Name": "Inner vitality",
			"Image": "huskar_inner_vitality",
			"Level": 0,
			"LockedLevel": true,
			"Charges": 0,
			"ChargesMax": 1,
			"ChargesSemantic": "Treshold",
			"HealthRegeneration": function() {
				let primaryAtt = this.heroRef ? this.heroRef.Total[this.heroRef.Raw.Type] : 0;
				return primaryAtt * this.Level * 0.05 * (this.Charges ? 4 : 1)
			}
		},
		"invoker_ghost_walk_buff": {
			"Name": "Ghost walk",
			"Image": "invoker_ghost_walk",
			"Class": "Buff",
			"Quas": 0,
			"Wex": 0,
			"MovementSpeedPercentage": function() { return (this.Wex - 4) * 0.1 }
		},
		"invoker_alacrity_buff": {
			"Name": "Alacrity",
			"Image": "invoker_alacrity",
			"Class": "Buff",
			"Wex": 0,
			"Exort": 0,
			"AttackSpeed": function() { return 10 + (this.Wex - 1) * 15 },
			"Damage": function() { return 10 + (this.Exort - 1) * 15 },
		},
		"legion_commander_overwhelming_odds_buff": {
			"Name": "Overwhelming odds",
			"Image": "legion_commander_overwhelming_odds",
			"Class": "Buff",
			"Charges": 0,
			"ChargesMax": 70,
			"LockedLevel": true,
			"MovementSpeedPercentage": function(){ return this.Charges * 0.01 }
		},
		"legion_commander_press_the_attack_buff": {
			"Name": "Press the attack"	,
			"Image": "legion_commander_press_the_attack",
			"Class": "Buff",
			"Level": 0,
			"LockedLevel": true,
			"HealthRegeneration": function() { return 20 + this.Level * 10 },
			"AttackSpeed": function() { return 40 + this.Level * 20 }
		},
		"lich_frost_armor_buff": {
			"Name": "Frost armor",
			"Image": "lich_frost_armor",
			"Level": 0,
			"LockedLevel": true,
			"Armor": function() { return 2 + this.Level }
		},
		"life_stealer_rage_buff": {
			"Name": "Rage",
			"Image": "life_stealer_rage",
			"Level": 0,
			"LockedLevel": 0,
			"AttackSpeed": function() { return this.Level > 0 ? 40 + this.Level * 10 : 0 }
		},
		"lone_druid_rabid_buff": {
			"Name": "Rabid",
			"Image": "lone_druid_rabid",
			"Class": "Buff",
			"Level": 0,
			"LockedLevel": true,
			"MovementSpeedPercentage": function(){ return 0.05 + 0.05 * this.Level },
			"AttackSpeed": function() { return this.Level * 10 }
		},
		"lone_druid_true_form_buff": {
			"Name": "True form",
			"Image": "lone_druid_true_form",
			"Class": "Buff",
			"Level": 0,
			"LockedLevel": true,
			"AttackType": "Melee",
			"AttackRate": -0.2,
			"Range": -422,
			"Armor": function(){ return this.Level ? 2 + 2 * this.Level : 0 },
			"Health": function(){ return this.Level * 300 },
			"MovementSpeed": -45
		},
		"lone_druid_true_form_battle_cry_buff": {
			"Name": "Battle cry",
			"Image": "lone_druid_true_form_battle_cry",
			"Level": 0,
			"LockedLevel": true,
			"Armor": function(){ return 5 + 5 * this.Level },
			"Damage": function(){ return 60 + 30 * this.Level }
		},
		"luna_lunar_blessing_aura": {
			"Name": "Lunar blessing",
			"Class": "Aura",
			"Image": "luna_lunar_blessing",
			"Level": function() {
				return this.emitterRef ? this.emitterRef.Level : 0;
			},
			"Damage": function () {
				if (!this.emitterRef)
					return 0;
				if (this.emitterRef.Level > 0)
					return 6 + this.emitterRef.Level * 8;
				return 0;
			},
			"Hidden": function(){
				return this.Level == 0 || this.Damage == 0
			}
		},
		"lycan_howl_buff": {
			"Name": "Howl",
			"Image": "lycan_howl",
			"Level": 0,
			"LockedLevel": true,
			"Damage": function() { return this.Level > 0 ? 2 + 12 * this.Level : 0 }
		},
		"lycan_shapeshift_buff": {
			"Name": "Shapeshift",
			"Image": "lycan_shapeshift",
			"Level": 0,
			"LockedLevel": true,
			"Haste": 650,
			"VisionNight": 1000,
		},
		"magnataur_empower_buff": {
			"Name": "Empower",
			"Image": "magnataur_empower",
			"Level": 0,
			"LockedLevel": true,
			"DamagePercentage": function(){ return this.Level > 0 ? 0.1 + 0.1 * this.Level : 0 }
		},
		"nyx_assassin_vendetta_buff": {
			"Name": "Vendetta",
			"Level": 0,
			"LockedLevel": true,
			"MovementSpeedPercentage": function(){ return 0.14 + 0.02 * this.Level },
			"Damage": function(){ return 100 + 150 * this.Level }
		},
		"obsidian_destroyer_arcane_orb_buff": {
			"Name": "Arcane orb",
			"Image": "obsidian_destroyer_arcane_orb",
			"Level": 0,
			"LockedLevel": true,
			"Charges": 0,
			"ChargesSemantic": "Stolen int",
			"Intelligence": function(){ return this.Level > 0 ? (1+this.Level)*this.Charges : 0 }
		},
		"ogre_magi_bloodlust_buff": {
			"Name": "Bloodlust",
			"Image": "ogre_magi_bloodlust",
			"Level": 0,
			"LockedLevel": true,
			"MovementSpeed": function(){ return 0.08 + 0.02 * this.Level },
			"AttackSpeed": function(){ return 20 + 10 * this.Level }
		},
		"phantom_assassin_phantom_strike_buff":{
			"Name": "Phantom strike",
			"Image": "phantom_assassin_phantom_strike",
			"Level": 0,
			"LockedLevel": true,
			"AttackSpeed": 130
		},
		"pugna_decrepify_buff": {
			"Name": "Decrepify",
			"Image": "pugna_decrepify",
			"Level": 0,
			"LockedLevel": true,
			"MagicalResistance": -0.25
		},
		"razor_static_link_buff": {
			"Name": "Static link",
			"Image": "razor_static_link",
			"Level": 0,
			"LockedLevel": true,
			"Charges": 1,
			"ChargesMin": 1,
			"ChargesMax": 33,
			"ChargesSemantic": "Steal instances",
			"Warning": "Full duration (8 seconds) is 33 steal instances",
			"Damage": function(){
				return Math.floor(this.Level / 4 * 7 * this.Charges);
			}
		},
		"rubick_null_field_aura": {
			"Name": "Null field",
			"Class": "Aura",
			"Image": "rubick_null_field",
			"Level": function() {
				return this.emitterRef ? this.emitterRef.Level : 0;
			},
			"MagicalResistance": function () {
				if (!this.emitterRef)
					return 0;
				return this.Level * 0.05
			},
			"Hidden": function(){
				return this.Level == 0 || this.MagicalResistance == 0
			}
		},
		"slardar_sprint_buff": {
			"Name": "Sprint",
			"Image": "slardar_sprint",
			"Level": 0,
			"LockedLevel": true,
			"MovementSpeedPercentage": function(){ return 0.12 + 0.08 * this.Level }
		},
		"spectre_spectral_dagger_buff": {
			"Name": "Spectral dagger",
			"Image": "spectre_spectral_dagger",
			"Level": 0,
			"LockedLevel": true,
			"MovementSpeedPercentage": function(){ return 0.04 + 0.04 * this.Level }
		},
		"spirit_breaker_empowering_haste_aura": {
			"Name": "Empowering haste",
			"Class": "Aura",
			"Image": "spirit_breaker_empowering_haste",
			"Level": function() {
				return this.emitterRef ? this.emitterRef.Level : 0;
			},
			"Charges": function() {
				return this.emitterRef ? this.emitterRef.Charges : 0;
			},
			"MovementSpeedPercentage": function () {
				if (!this.emitterRef)
					return 0;
				var speed = this.Level > 0 ? 0.02 + 0.04 * this.Level : 0
				if (this.Charges == 1)
					speed = speed * 1.5
				if (this.Charges == 2)
					speed = speed / 2
				return speed
			},
			"Hidden": function(){
				return this.Level == 0 || this.MovementSpeedPercentage == 0
			}
		},
		"storm_spirit_electric_vortex_self": {
			"Name": "Electric vortex",
			"Image": "storm_spirit_electric_vortex",
			"Level": 0,
			"LockedLevel": true,
			"MovementSpeedPercentage": -0.5
		},
		"sven_warcry_buff": {
			"Name": "Warcry",
			"Image": "sven_warcry",
			"MovementSpeedPercentage": 0.12,
			"Level": 0,
			"LockedLevel": true,
			"Armor": function(){ return 5 * this.Level }
		},
		"sven_gods_strength_buff": {
			"Name": "God's strength",
			"Image": "sven_gods_strength",
			"Level": 0,
			"LockedLevel": true,
			"DamagePercentage": function(){ return 0.5 + 0.5 * this.Level }
		},
		"sven_gods_strength_buff_aghanims": {
			"Name": "God's strength (upgraded)",
			"Image": "sven_gods_strength",
			"Level": 0,
			"LockedLevel": true,
			"DamagePercentage": function(){ return 0.25 + 0.25 * this.Level }
		},
		"templar_assassin_refraction_buff_damage": {
			"Name": "Refraction (damage)",
			"Image": "templar_assassin_refraction_damage",
			"Level": 0,
			"LockedLevel": true,
			"Damage": function(){ return 20 * this.Level }
		},
		"templar_assassin_refraction_buff_absorb": {
			"Name": "Refraction (absorb)",
			"Image": "templar_assassin_refraction",
			"Level": 0,
			"LockedLevel": true
		},
		"terrorblade_metamorphosis_buff": {
			"Name": "Metamorphosis",
			"Image": "terrorblade_metamorphosis",
			"Level": 0,
			"LockedLevel": true,
			"DamageBase": function(){ return 20 * this.Level },
			"MovementSpeed": -25,
			"Range": 400,
			"AttackType": "Ranged"
		},
		"troll_warlord_battle_trance_buff": {
			"Name": "Battle trance",
			"Image": "troll_warlord_battle_trance",
			"Level": 0,
			"LockedLevel": true,
			"AttackSpeed": function(){ return 60 * this.Level }
		},
		"ursa_overpower_buff": {
			"Name": "Overpower",
			"Level": 0,
			"LockedLevel": true,
			"Image": "ursa_overpower",
			"AttackSpeed": 400
		},
		"vengefulspirit_command_aura_aura": {
			"Name": "Vengeance aura",
			"Class": "Aura",
			"Image": "vengefulspirit_command_aura",
			"Level": function() {
				return this.emitterRef ? this.emitterRef.Level : 0;
			},
			"DamagePercentage": function () {
				if (!this.emitterRef) {
					return 0;
				}
				return this.Level > 0 ? 0.04 + 0.08 * this.Level : 0
			},
			"Hidden": function(){
				return this.Level == 0 || this.DamagePercentage == 0
			}
		},
		"warlock_shadow_word_buff": {
			"Name": "Shadow word heal",
			"Image": "warlock_shadow_word",
			"Level": 0,
			"LockedLevel": true,
			"HealthRegeneration": function(){ return 5 + 10 * this.Level }
		},
		"windrunner_windrun_buff": {
			"Name": "Windrun",
			"Image": "windrunner_windrun",
			"Level": 0,
			"LockedLevel": true,
			"Evasion": 1,
			"MovementSpeedPercentage": 0.5
		},
		"windrunner_focusfire_buff": {
			"Name": "Windrun",
			"Image": "windrunner_focusfire",
			"Level": 0,
			"LockedLevel": true,
			"DamageReductionPercentage": function() {
				return -0.6 + 0.1 * this.Level
			},
			"AttackSpeed": 500
		},
		"winter_wyvern_cold_embrace_buff_aghs": {
			"Name": "Cold embrace",
			"Image": "winter_wyvern_cold_embrace",
			"Level": 0,
			"LockedLevel": true,
			"HealthRegeneration": function(){
				if (this.heroRef != undefined)
					return 20 + this.heroRef.Total.Health * (0.02 + 0.01 * this.Level)
				return 20;
			}
		},
		"wisp_tether_buff": {
			"Name": "Tether",
			"Image": "wisp_tether",
			"Level": 0,
			"LockedLevel": true,
			"MovementSpeedPercentage": function(){ return 0.12 + 0.01 * this.Level }
		},
		"wisp_overcharge_buff": {
			"Name": "Overcharge",
			"Image": "wisp_overcharge",
			"Level": 0,
			"LockedLevel": true,
			"AttackSpeed": function(){ return 30 + 10 * this.Level }
		},
		"wisp_overcharge_debuff": {
			"Name": "Overcharge",
			"Image": "wisp_overcharge",
			"LockedLevel": true,
			"AttackSpeed": function(){ return 30 + 10 * this.Level }
		},
		"arc_warden_magnetic_field_buff": {
			"Name": "Magnetic field",
			"Image": "arc_warden_magnetic_field",
			"Level": 1,
			"LockedLevel": true,
			"Evasion": 1,
			"AttackSpeed": function(){ return 40 + 10 * this.Level }
		},

		/* Item origin buffs */
		"ultimate_scepter_buff": {
			"Name": "Aghanim's Scepter",
			"Class": "Permanent",
			"Image": "ultimate_scepter",
			"Strength": 10,
			"Agility": 10,
			"Intelligence": 10,
			"Health": 175,
			"Mana": 175,
			"HasAghanims": true
		},
		"ring_of_basilius_aura": {
			"Name": "Basilius aura",
			"Image": "ring_of_basilius",
			"Class": "Aura",
			"Family": {
				"Name": "Basilius",
				"Level": 0.65,
				"Stats": {
					"ManaRegenerationFlat": 0.65,
					"Armor": 2
				}
			}
		},
		"ring_of_aquila_aura": {
			"Name": "Aquila aura",
			"Image": "ring_of_aquila",
			"Class": "Aura",
			"Family": {
				"Name": "Basilius",
				"Level": 0.65,
				"Stats": {
					"ManaRegenerationFlat": 0.65,
					"Armor": 2
				}
			}
		},
		"vladmirs_aura": {
			"Name": "Vladmir's aura",
			"Image": "vladmir",
			"Class": "Aura",
			"Family": {
				"Name": "Basilius",
				"Level": 0.8,
				"Stats": {
					"DamagePercentage": 0.15,
					"ManaRegenerationFlat": 0.8,
					"Armor": 4,
					"HealthRegeneration": 3
				}
			}
		},
		"ancient_janggo_aura": {
			"Name": "Swiftness aura",
			"Image": "ancient_janggo",
			"Class": "Aura",
			"Family": {
				"Name": "Drums",
				"Level": 1,
				"Stats": {
					"MovementSpeedPercentage": 0.05,
					"AttackSpeed": 5
				}
			}
		},
		"ancient_janggo_buff": {
			"Name": "Endurance",
			"Image": "ancient_janggo",
			"MovementSpeedPercentage": 0.13,
			"AttackSpeed": 25
		},
		"headdress_aura": {
			"Name": "Regeneration aura",
			"Image": "headdress",
			"Class": "Aura",
			"Family": {
				"Name": "Headdress",
				"Level": 1,
				"Stats": {
					"HealthRegeneration": 3
				}
			}
		},
		"mekansm_aura": {
			"Name": "Mekansm aura",
			"Image": "mekansm",
			"Class": "Aura",
			"Family": {
				"Name": "Mekansm_regen",
				"Level": 1,
				"Stats": {
					"HealthRegeneration": 4
				}
			}
		},
		"assault_aura": {
			"Name": "Assault aura",
			"Image": "assault",
			"Class": "Aura",
			"Family": {
				"Name": "Assault",
				"Level": 1,
				"Stats": {
					"AttackSpeed": 20,
					"Armor": 5
				}
			}
		},
		"phase_boots_buff": {
			"Name": "Phase",
			"Image": "phase_boots",
			"MovementSpeedPercentage": function() {
					if (this.heroRef && this.heroRef.Total.AttackType == "Ranged")
						return 0.2;
					return 0.24;
				}
		},
		"pipe_aura": {
			"Name": "Insight aura",
			"Image": "pipe",
			"Class": "Aura",
			"Family": {
				"Name": "Pipe",
				"Level": 1,
				"Stats": {
					"HealthRegeneration": 4,
					"MagicalResistance": 0.1
				}
			}
		},
		"glimmer_cape_buff": {
			"Name": "Glimmer",
			"Image": "glimmer_cape",
			"Class": "Buff",
			"MagicalResistance": 0.45
		},
		"guardian_greaves_aura": {
			"Name": "Guardian aura",
			"Image": "guardian_greaves",
			"Class": "Aura",
			"Family": {
				"Name": "Greaves",
				"Level": 1,
				"Stats": {
					"HealthRegeneration": 4,
					"Armor": 2
				}
			}
		},
		"buckler_buff": {
			"Name": "Armor bonus",
			"Image": "buckler",
			"Class": "Buff",
			"Family": {
				"Name": "Buckler",
				"Level": 1,
				"Stats": {
					"Armor": 2
				}
			}
		},
		"mekansm_buff": {
			"Name": "Restore",
			"Image": "mekansm",
			"Class": "Buff",
			"Family": {
				"Name": "Buckler",
				"Level": 1,
				"Stats": {
					"Armor": 2
				}
			}
		},
		"moon_shard_buff": {
			"Name": "Moon shard",
			"Class": "Permanent",
			"Image": "moon_shard",
			"AttackSpeed": 60
		},
	 	"crimson_guard_buff": {
			"Name": "Guard",
			"Image": "crimson_guard",
			"Class": "Buff",
			"Family": {
				"Name": "Buckler",
				"Level": 1,
				"Stats": {
					"Armor": 2
				}
			}
		},
		"mask_of_madness_buff": {
			"Name": "Berserk",
			"Image": "mask_of_madness",
			"AttackSpeed": 100,
			"MovementSpeedPercentage": 0.17
		},
		"medallion_of_courage_debuff": {
			"Name": "Valor (debuff)",
			"Image": "medallion_of_courage",
			"Armor": -7
		},
		"medallion_of_courage_buff": {
			"Name": "Valor (buff)",
			"Image": "medallion_of_courage",
			"Armor": 7
		},
		"solar_crest_debuff_self": {
			"Name": "Shine (self)",
			"Image": "solar_crest",
			"Armor": -10,
			"Evasion": -0.33333333333333333333333333
		},
		"solar_crest_buff": {
			"Name": "Shine (teammate)",
			"Image": "solar_crest",
			"Armor": 10,
			"Evasion": 0.25
		},
		"black_king_bar_buff": {
			"Name": "Avatar",
			"Image": "black_king_bar",
			"Level": 0,
			"LockedLevel": true,
			"MagicalResistance": 1,
			"MagicalImmunity": 1
		},
		"armlet_buff": {
			"Name": "Unholy strength",
			"Image": "armlet_active",
			"Strength": 25,
			"Damage": 31,
			"Armor": 4,
			"HealthRegeneration": -45
		},
		"butterfly_buff": {
			"Name": "Flutter",
			"Image": "butterfly",
			"MovementSpeedPercentage": 0.35,
			"Evasion": -0.53846153846153846153846153846154 // Very precise evasion cancellation hurr
		},
		"hurricane_pike_buff": {
			"Name": "Hurricane Thrust",
			"Image": "hurricane_pike",
		},
		"rune_regen_buff": {
			"Name": "Regeneration",
			"Image": "rune_regen",
			"HealthRegeneration": 100,
			"ManaRegenerationFlat": 67,
		},
		"rune_invis_buff": {
			"Name": "Invisibility",
			"Image": "rune_invis",
			"Invisible": true,
		},
		"rune_doubledamage_buff": {
			"Name": "Double Damage",
			"Image": "rune_doubledamage",
			"DamagePercentage": 1,
		},
		"rune_arcane_buff": {
			"Name": "Arcane",
			"Image": "rune_arcane",
			"CooldownReduction": 0.3,
			"ManaCostReduction": 0.4,
		},
		"rune_haste_buff": {
			"Name": "Haste",
			"Image": "rune_haste",
			"Haste": 522,
		},

	}

});
}

