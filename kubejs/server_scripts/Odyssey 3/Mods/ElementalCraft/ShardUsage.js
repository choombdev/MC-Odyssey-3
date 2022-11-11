// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Adding a recipe for each shard
    // Powerful Fire Shard
    event.recipes.createMixing('2x minecraft:blaze_rod', ['elementalcraft:powerful_fire_shard', 'minecraft:blaze_rod']).heated()
    event.recipes.createMixing('2x minecraft:gunpowder', ['elementalcraft:powerful_fire_shard', 'minecraft:gunpowder']).heated()
    event.recipes.createMixing('2x minecraft:ghast_tear', ['elementalcraft:powerful_fire_shard', 'minecraft:ghast_tear']).heated()
    // Powerful Water Shard
    event.recipes.createMixing('2x minecraft:prismarine_shard', ['elementalcraft:powerful_water_shard', 'minecraft:prismarine_shard']).heated()
    event.recipes.createMixing('2x minecraft:prismarine_crystals', ['elementalcraft:powerful_water_shard', 'minecraft:prismarine_crystals']).heated()
    event.recipes.createMixing('2x minecraft:ink_sac', ['elementalcraft:powerful_water_shard', 'minecraft:ink_sac']).heated()
    event.recipes.createMixing('2x minecraft:cod', ['elementalcraft:powerful_water_shard', 'minecraft:cod']).heated()
    event.recipes.createMixing('2x minecraft:salmon', ['elementalcraft:powerful_water_shard', 'minecraft:salmon']).heated()
    event.recipes.createMixing('2x minecraft:glow_ink_sac', ['elementalcraft:powerful_water_shard', 'minecraft:glow_ink_sac']).heated()
    // Powerful Earth Shard
    event.recipes.createMixing('2x minecraft:bone', ['elementalcraft:powerful_earth_shard', 'minecraft:bone']).heated()
    event.recipes.createMixing('2x minecraft:bone_meal', ['elementalcraft:powerful_earth_shard', 'minecraft:bone_meal']).heated()
    event.recipes.createMixing('2x wstweaks:fragment', ['elementalcraft:powerful_earth_shard', 'wstweaks:fragment']).heated()
    event.recipes.createMixing('2x minecraft:rotten_flesh', ['elementalcraft:powerful_earth_shard', 'minecraft:rotten_flesh']).heated()
    event.recipes.createMixing('2x tconstruct:necrotic_bone', ['elementalcraft:powerful_earth_shard', 'tconstruct:necrotic_bone']).heated()
    event.recipes.createMixing('2x minecraft:slime_ball', ['elementalcraft:powerful_earth_shard', 'minecraft:slime_ball']).heated()
    // Powerful Air Shard
    event.recipes.createMixing('2x minecraft:cobweb', ['elementalcraft:powerful_air_shard', 'minecraft:cobweb']).heated()
    event.recipes.createMixing('2x minecraft:string', ['elementalcraft:powerful_air_shard', 'minecraft:string']).heated()
    event.recipes.createMixing('2x minecraft:paper', ['elementalcraft:powerful_air_shard', 'minecraft:paper']).heated()
    event.recipes.createMixing('2x minecraft:prismarine_shard', ['elementalcraft:powerful_air_shard', 'minecraft:prismarine_shard']).heated()
    event.recipes.createMixing('2x minecraft:prismarine_crystals', ['elementalcraft:powerful_air_shard', 'minecraft:prismarine_crystals']).heated()
    event.recipes.createMixing('2x minecraft:ender_pearl', ['elementalcraft:powerful_air_shard', 'minecraft:ender_pearl']).heated()
})

