// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// Replacing the Compressed Cobblestone with Compressium's
event.replaceInput({}, 'cyclic:compressed_cobblestone', 'compressium:cobblestone_1')
event.replaceOutput({}, 'cyclic:compressed_cobblestone', 'compressium:cobblestone_1')

 // Removing Uncrafter
 event.remove({output:'cyclic:uncrafter'})
// Crystallized Obsidian
event.recipes.mekanismMetallurgicInfusing('cyclic:gem_obsidian', 'mekanism:ingot_refined_obsidian', 'mekanism:redstone', 20)
// Flight
event.shaped('cyclic:chorus_spectral', [
    'CCC',
    'CAC',
    'CCC'
    ],{
     C: 'minecraft:chorus_fruit',
     A: 'cyclic:apple_ender'   
    }) 
event.shaped('cyclic:chorus_flight', [
    'INI',
    'NCN',
    'INI'
    ],{
     I: 'mekanism:ingot_refined_glowstone',
     N: 'cyclic:chorus_spectral',
     C: 'minecraft:nether_star'   
    }) 
})

