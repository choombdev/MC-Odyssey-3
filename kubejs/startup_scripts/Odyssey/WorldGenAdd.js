// This script was made by Choomb for MC Odyssey 3, reusing it without explicit permission is not allowed.

onEvent('worldgen.add', event => {
	event.addOre((ore) => {
      ore.id = 'kubejs:choombium_ore'
      ore.biomes = "^end"
      ore.addTarget('minecraft:end_stone', 'kubejs:choombium_ore')
      ore.count([1,3])
      ore.size= 2
      ore.chance = 150

	})
})