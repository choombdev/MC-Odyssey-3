// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

 // Adding a Kelp recipe
 event.recipes.immersiveengineeringCloche(['minecraft:kelp'], 'minecraft:kelp', "minecraft:blue_ice")

// Adding a Crux recipe for Nether Star Seeds
event.remove({id: 'indy32:seeds/nether_star_seeds'})
event.remove({id: 'thermalexpansion:machine/insolator/nether_star_seeds'})
event.recipes.immersiveengineeringCloche(['mysticalagriculture:nether_star_essence'], 'mysticalagriculture:nether_star_seeds', "mysticalagradditions:nether_star_crux")
 
// Adding a Crux recipe for Dragon Egg Seeds
event.remove({id: 'indy32:seeds/dragon_egg_seeds'})
event.remove({id: 'thermalexpansion:machine/insolator/dragon_egg_seeds'})
event.recipes.immersiveengineeringCloche(['mysticalagriculture:dragon_egg_essence'], 'mysticalagriculture:dragon_egg_seeds', "mysticalagradditions:dragon_egg_crux")

// Nitro Seeds
event.recipes.immersiveengineeringCloche(['mysticalagriculture:nitro_crystal_essence'], 'mysticalagriculture:nitro_crystal_seeds','mysticalagradditions:nitro_crystal_crux')
// Missing Mystical Agriculture Seeds
let seeds = ["limestone", "menril", "panda", "fox", "bat", "cat", "wolf", "parrot", "blizz", "blitz", "basalz", "amethyst_bronze", "slimesteel", "pig_iron", "steeleaf", "ironwood", "llama", "husk", "zombified_piglin", "silverfish", "drowned", "guardian", "dolphin", "stray", "vex", "polar_bear", "horse", "witch", "signalum", "lumium", "cobalt", "rose_gold", "fluorite", "knightmetal", "fiery_ingot", "compressed_iron", "energized_steel", "blazing_crystal", "ravager", "magma_cube", "pillager", "piglin", "endermite", "shulker", "villager", "vindicator", "phantom", "mooshroom", "enderium", "manyullyn", "queens_slime", "niotic_crystal", "spirited_crystal", "uraninite", "piglin_brute", "evoker", "choombium"] 
seeds.forEach(seed =>{
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:tertium_farmland')
})
})
