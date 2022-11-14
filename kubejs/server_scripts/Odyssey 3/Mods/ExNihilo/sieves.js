// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// Nuking Sieve Recipes
event.remove({type: "exnihilosequentia:sieve"})

function SieveRecipe (input, output, stringchance, flintchance, ironchance, diamondchance, emeraldchance, netheritechance) {
   event.recipes.exnihilosequentia.sieve(input, output)
   .addRoll(stringchance, 'string')
   .addRoll(flintchance, 'flint')
   .addRoll(ironchance, 'iron')
   .addRoll(diamondchance, 'diamond')
   .addRoll(emeraldchance, 'emerald')
   .addRoll(netheritechance, 'netherite') 
}

// Dirt
SieveRecipe('minecraft:dirt', 'exnihilosequentia:mycelium_spores', 0.005, 0.005, 0.005, 0.005, 0.005, 0.005)
SieveRecipe('minecraft:dirt', 'exnihilosequentia:grass_seeds', 0.005, 0.005, 0.005, 0.005, 0.005, 0.005)



// Gravel

SieveRecipe('minecraft:gravel', 'minecraft:flint', 0.025, 0.025, 0, 0, 0, 0)
SieveRecipe('minecraft:gravel', 'minecraft:coal', 0, 0.01, 0.02, 0.025, 0.03, 0.04)
SieveRecipe('minecraft:gravel', 'minecraft:lapis_lazuli', 0, 0.01, 0.015, 0, 0.02, 0.025)
SieveRecipe('minecraft:gravel', 'minecraft:diamond', 0, 0, 0.005, 0.01, 0.015, 0.02)
SieveRecipe('minecraft:gravel', 'minecraft:emerald', 0, 0, 0.005, 0.01, 0.015, 0.02)

SieveRecipe('minecraft:gravel', 'thermal:apatite', 0.005, 0.01, 0.015, 0, 0, 0)
SieveRecipe('minecraft:gravel', 'thermal:sulfur', 0.005, 0.01, 0.015, 0, 0, 0)
SieveRecipe('minecraft:gravel', 'thermal:niter', 0.005, 0.01, 0.015, 0, 0, 0)
SieveRecipe('minecraft:gravel', 'thermal:cinnabar', 0.005, 0.01, 0.015, 0, 0, 0)

SieveRecipe('minecraft:gravel', 'exnihilosequentia:iron_pieces', 0, 0.005, 0.0075, 0.01, 0.02, 0.03)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:silver_pieces', 0, 0.005, 0.0075, 0.01, 0, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:lead_pieces', 0, 0.005, 0.0075, 0.01, 0.015, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:gold_pieces', 0, 0.005, 0.0075, 0.01, 0.02, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:copper_pieces', 0, 0.005, 0.0075, 0.01, 0.025, 0.035)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:zinc_pieces', 0, 0.005, 0.0075, 0.01, 0.01, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:nickel_pieces', 0, 0.005, 0.0075, 0.01, 0.01, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:aluminum_pieces', 0, 0.005, 0.0075, 0.01, 0.02, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:lead_pieces', 0, 0.005, 0.0075, 0.01, 0.02, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:tin_pieces', 0, 0.005, 0.0075, 0.01, 0.02, 0)
SieveRecipe('minecraft:gravel', 'exnihilomekanism:osmium_pieces', 0, 0, 0.005, 0.0075, 0.02, 0.025)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:platinum_pieces', 0, 0, 0.005, 0.0075, 0.01, 0)

// Sand
SieveRecipe('minecraft:sand', 'minecraft:cocoa_beans', 0.01, 0.01, 0, 0, 0.01, 0.02)
SieveRecipe('minecraft:sand', 'minecraft:prismarine_shard', 0, 0, 0.005, 0, 0.01, 0.02)
SieveRecipe('minecraft:sand', 'minecraft:prismarine_crystals', 0, 0, 0.01, 0, 0.01, 0.02)

SieveRecipe('minecraft:sand', 'mekanism:fluorite_gem', 0, 0, 0, 0, 0.01, 0.02)
SieveRecipe('minecraft:sand', 'mekanism:salt', 0.01, 0.01, 0, 0.01, 0, 0.01)

SieveRecipe('minecraft:sand', 'elementalcraft:inert_crystal', 0, 0.015, 0.015, 0, 0, 0.02)

SieveRecipe('minecraft:sand', 'forbidden_arcanus:arcane_crystal', 0, 0.015, 0.015, 0, 0, 0.02)

SieveRecipe('minecraft:sand', 'ars_nouveau:source_gem', 0, 0.015, 0.015, 0, 0, 0.02)

SieveRecipe('minecraft:sand', 'exnihilosequentia:uranium_pieces', 0, 0.005, 0.0075, 0.01, 0, 0)

// Dust
SieveRecipe('exnihilosequentia:dust', 'minecraft:bone_meal', 0.01, 0.015, 0.01, 0, 0.02, 0)
SieveRecipe('exnihilosequentia:dust', 'minecraft:gunpowder', 0.01, 0.015, 0.01, 0, 0.02, 0)
SieveRecipe('exnihilosequentia:dust', 'minecraft:clay', 0.01, 0.015, 0, 0, 0.02, 0)
SieveRecipe('exnihilosequentia:dust', 'minecraft:redstone', 0, 0.01, 0.01, 0, 0.02, 0.03)
SieveRecipe('exnihilosequentia:dust', 'minecraft:blaze_powder', 0, 0, 0, 0.01, 0.02, 0.03)
SieveRecipe('exnihilosequentia:dust', 'minecraft:glowstone', 0, 0.01, 0.01, 0, 0.02, 0.03)


SieveRecipe('exnihilosequentia:dust', 'ae2:sky_dust', 0, 0.01, 0, 0, 0.02, 0.03)
SieveRecipe('exnihilosequentia:dust', 'ae2:certus_quartz_dust', 0, 0.01, 0, 0, 0.02, 0.03)
SieveRecipe('exnihilosequentia:dust', 'ae2:fluix_dust', 0, 0, 0, 0, 0.01, 0.03)

// Crushed Netherrack
SieveRecipe('exnihilosequentia:crushed_netherrack', 'minecraft:netherite_scrap', 0, 0, 0, 0.004, 0.008, 0.01)

// Crushed Skystone
SieveRecipe('exnihiloae:crushed_skystone', 'ae2:certus_quartz_crystal', 0.01, 0, 0.02, 0.03, 0.05, 0.05)

// Soul Sand
SieveRecipe('minecraft:soul_sand', 'minecraft:quartz', 0, 0.01, 0.02, 0, 0.01, 0.02)
SieveRecipe('minecraft:soul_sand', 'minecraft:glowstone_dust', 0.01, 0.02, 0.03, 0, 0.03, 0.02)

// Crushed Endstone
SieveRecipe('exnihilosequentia:crushed_end_stone', 'minecraft:ender_pearl', 0, 0, 0, 0, 0.01, 0.02)

})

