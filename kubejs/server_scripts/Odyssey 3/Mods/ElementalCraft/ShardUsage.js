// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Adding a recipe for each shard
    // Powerful Fire Shard
    event.recipes.createMixing('minecraft:blaze_rod', ['elementalcraft:powerful_fire_shard', 'minecraft:blaze_rod']).heated()
    event.recipes.createMixing('minecraft:gunpowder', ['elementalcraft:powerful_fire_shard', 'minecraft:gunpowder']).heated()
    event.recipes.createMixing('minecraft:ghast_tear', ['elementalcraft:powerful_fire_shard', 'minecraft:ghast_tear']).heated()
    // Powerful Water Shard
    event.recipes.createMixing('minecraft:prismarine_shard', ['elementalcraft:powerful_water_shard', 'minecraft:prismarine_shard']).heated()
    event.recipes.createMixing('minecraft:prismarine_crystals', ['elementalcraft:powerful_water_shard', 'minecraft:prismarine_crystals']).heated()
    event.recipes.createMixing('minecraft:ink_sac', ['elementalcraft:powerful_water_shard', 'minecraft:ink_sac']).heated()
    event.recipes.createMixing('minecraft:cod', ['elementalcraft:powerful_water_shard', 'minecraft:cod']).heated()
    event.recipes.createMixing('minecraft:salmon', ['elementalcraft:powerful_water_shard', 'minecraft:salmon']).heated()
    event.recipes.createMixing('minecraft:glow_ink_sac', ['elementalcraft:powerful_water_shard', 'minecraft:glow_ink_sac']).heated()
    // Powerful Earth Shard
    event.recipes.createMixing('minecraft:bone', ['elementalcraft:powerful_earth_shard', 'minecraft:bone']).heated()
    event.recipes.createMixing('minecraft:bone_meal', ['elementalcraft:powerful_earth_shard', 'minecraft:bone_meal']).heated()
    event.recipes.createMixing('wstweaks:fragment', ['elementalcraft:powerful_earth_shard', 'wstweaks:fragment']).heated()
    event.recipes.createMixing('minecraft:rotten_flesh', ['elementalcraft:powerful_earth_shard', 'minecraft:rotten_flesh']).heated()
    event.recipes.createMixing('tconstruct:necrotic_bone', ['elementalcraft:powerful_earth_shard', 'tconstruct:necrotic_bone']).heated()
    event.recipes.createMixing('minecraft:slime_ball', ['elementalcraft:powerful_earth_shard', 'minecraft:slime_ball']).heated()
    // Powerful Air Shard
    event.recipes.createMixing('minecraft:cobweb', ['elementalcraft:powerful_air_shard', 'minecraft:cobweb']).heated()
    event.recipes.createMixing('minecraft:string', ['elementalcraft:powerful_air_shard', 'minecraft:string']).heated()
    event.recipes.createMixing('minecraft:paper', ['elementalcraft:powerful_air_shard', 'minecraft:paper']).heated()
    event.recipes.createMixing('minecraft:prismarine_shard', ['elementalcraft:powerful_air_shard', 'minecraft:prismarine_shard']).heated()
    event.recipes.createMixing('minecraft:prismarine_crystals', ['elementalcraft:powerful_air_shard', 'minecraft:prismarine_crystals']).heated()
    event.recipes.createMixing('minecraft:ender_pearl', ['elementalcraft:powerful_air_shard', 'minecraft:ender_pearl']).heated()
})

