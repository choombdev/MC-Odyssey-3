// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

    // Adding Mixing Recipes for all Alloys
    event.recipes.createMixing('alltheores:steel_ingot', [
        'minecraft:iron_ingot',
        'minecraft:coal', 
        'minecraft:coal'
      ]).heated()
    
    event.recipes.createMixing('2x alltheores:enderium_ingot', [
        'alltheores:lead_ingot',
        'alltheores:lead_ingot',
        'alltheores:lead_ingot',
        'minecraft:diamond',
        'minecraft:ender_pearl',
        'minecraft:ender_pearl'
    ]).heated()

    event.recipes.createMixing('4x alltheores:signalum_ingot', [
        'minecraft:copper_ingot',
        'minecraft:copper_ingot',
        'minecraft:copper_ingot',
        'alltheores:silver_ingot',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone'

    ]).heated()


    event.recipes.createMixing('4x alltheores:lumium_ingot', [
        'minecraft:glowstone_dust',
        'minecraft:glowstone_dust',
        'alltheores:tin_ingot',
        'alltheores:tin_ingot',
        'alltheores:tin_ingot',
        'alltheores:silver_ingot'
    ]).heated()
    
    event.recipes.createMixing('3x alltheores:invar_ingot', [
        'alltheores:nickel_ingot',
        'minecraft:iron_ingot',
        'minecraft:iron_ingot'

    ]).heated()
    
    event.recipes.createMixing('4x alltheores:bronze_ingot', [
        'minecraft:copper_ingot',
        'minecraft:copper_ingot',
        'minecraft:copper_ingot',
        'alltheores:tin_ingot'
    ]).heated()

    // Adding Pressing Recipes for all Alloys
    // Registering List of Materials
    var materials = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iridium', 'steel', 'invar', 'electrum', 'bronze', 'enderium', 'lumium', 'signalum', 'constantan', 'brass']
     // Looping through Materials
     materials.forEach(material => {
        event.recipes.createPressing('alltheores:' + material + '_plate', 'alltheores:' + material + '_ingot')
    })
    
})
