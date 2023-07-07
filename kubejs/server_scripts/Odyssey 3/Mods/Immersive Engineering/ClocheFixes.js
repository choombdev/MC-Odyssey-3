// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

 // Add fertilizer compat, mirroring values from the phytogenic insolator
 let fertilizers = [
  {id: 'thermal:phytogro', multiplier: 3.0},
  {id: 'create:tree_fertilizer', multiplier: 2.0},
  {id: 'thermal:compost', multiplier: 1.75}
 ]
 fertilizers.forEach(fert => {
  event.recipes.immersiveengineeringFertilizer(fert.id).growthModifier(fert.multiplier)
 })

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

// Magical Seeds
event.recipes.immersiveengineeringCloche(['mysticalagriculture:magical_essence'], 'mysticalagriculture:magical_seeds', "mysticalagriculture:supremium_farmland")

// Nitro Seeds
event.recipes.immersiveengineeringCloche(['mysticalagriculture:nitro_crystal_essence'], 'mysticalagriculture:nitro_crystal_seeds','mysticalagradditions:nitro_crystal_crux')

// Nitro Seeds
event.recipes.immersiveengineeringCloche(['mysticalagriculture:choombium_essence'], 'mysticalagriculture:choombium_seeds','gobber2:gobber2_block')

// Missing Mystical Agriculture Seeds
let prudseeds = 
[
"limestone",
"menril",
"panda",
"fox",
"bat",
"cat",
"wolf",
"parrot"]
let tertseeds =
[
    "blizz",
"blitz",
"basalz",
"amethyst_bronze",
"slimesteel",
"pig_iron",
"steeleaf",
"ironwood",
"llama",
"husk",
"zombified_piglin",
"silverfish",
"drowned",
"guardian",
"dolphin",
"stray",
"vex",
"polar_bear",
"horse",
"witch"]
let impseeds = 
[
"signalum",
"lumium",
"cobalt",
"rose_gold",
"fluorite",
"knightmetal",
"fiery_ingot",
"compressed_iron",
"energized_steel",
"blazing_crystal",
"ravager",
"magma_cube",
"pillager",
"piglin",
"endermite",
"shulker",
"villager",
"vindicator",
"phantom",
"mooshroom"]
let supseeds =
[
"enderium",
"manyullyn",
"queens_slime",
"niotic_crystal",
"spirited_crystal",
"uraninite",
"piglin_brute",
"evoker"
]

prudseeds.forEach(seed =>{
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:prudentium_farmland')
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:tertium_farmland')
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:imperium_farmland')
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:supremium_farmland')
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagradditions:insanium_farmland')

})

tertseeds.forEach(seed =>{
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:tertium_farmland')
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:imperium_farmland')
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:supremium_farmland')
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagradditions:insanium_farmland')
})

impseeds.forEach(seed =>{
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:imperium_farmland')
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:supremium_farmland')
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagradditions:insanium_farmland')

})

supseeds.forEach(seed =>{
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagriculture:supremium_farmland')
    event.recipes.immersiveengineeringCloche(['mysticalagriculture:' + seed + '_essence'], 'mysticalagriculture:'+ seed + '_seeds', 'mysticalagradditions:insanium_farmland')

})
})
