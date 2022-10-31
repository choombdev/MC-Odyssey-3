// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
 // Adding a Kelp recipe
 event.recipes.immersiveengineeringCloche(['minecraft:kelp'], 'minecraft:kelp', "minecraft:blue_ice")
// Adding a Crux recipe for Nether Star Seeds
event.remove({id: 'indy32:seeds/nether_star_seeds'})
event.remove({id: 'thermalexpansion:machine/insolator/nether_star_seeds'})

event.recipes.immersiveengineeringCloche(['mysticalagriculture:nether_star_essence'], 'mysticalagriculture:nether_star_seeds', "mysticalagradditions:nether_star_crux")
 
})

