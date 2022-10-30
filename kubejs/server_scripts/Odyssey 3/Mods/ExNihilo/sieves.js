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
SieveRecipe('minecraft:dirt', 'exnihilosequentia:mycelium_spores', 0.05, 0.05, 0.05, 0.05, 0.05, 0.05)
SieveRecipe('minecraft:dirt', 'exnihilosequentia:grass_seeds', 0.05, 0.05, 0.05, 0.05, 0.05, 0.05)



// Gravel

SieveRecipe('minecraft:gravel', 'minecraft:flint', 0.25, 0.25, 0, 0, 0, 0)
SieveRecipe('minecraft:gravel', 'minecraft:coal', 0, 0.1, 0.2, 0.25, 0.3, 0.4)
SieveRecipe('minecraft:gravel', 'minecraft:lapis_lazuli', 0, 0.1, 0.15, 0, 0.2, 0.25)
SieveRecipe('minecraft:gravel', 'minecraft:diamond', 0, 0, 0.05, 0.1, 0.15, 0.2)
SieveRecipe('minecraft:gravel', 'minecraft:emerald', 0, 0, 0.05, 0.1, 0.15, 0.2)

SieveRecipe('minecraft:gravel', 'thermal:apatite', 0.05, 0.1, 0.15, 0, 0, 0)
SieveRecipe('minecraft:gravel', 'thermal:sulfur', 0.05, 0.1, 0.15, 0, 0, 0)
SieveRecipe('minecraft:gravel', 'thermal:niter', 0.05, 0.1, 0.15, 0, 0, 0)
SieveRecipe('minecraft:gravel', 'thermal:cinnabar', 0.05, 0.1, 0.15, 0, 0, 0)

SieveRecipe('minecraft:gravel', 'exnihilosequentia:iron_pieces', 0, 0.05, 0.075, 0.1, 0.2, 0.3)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:silver_pieces', 0, 0.05, 0.075, 0.1, 0, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:lead_pieces', 0, 0.05, 0.075, 0.1, 0.15, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:gold_pieces', 0, 0.05, 0.075, 0.1, 0.2, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:copper_pieces', 0, 0.05, 0.075, 0.1, 0.25, 0.35)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:zinc_pieces', 0, 0.05, 0.075, 0.1, 0.1, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:nickel_pieces', 0, 0.05, 0.075, 0.1, 0.1, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:aluminum_pieces', 0, 0.05, 0.075, 0.1, 0.2, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:lead_pieces', 0, 0.05, 0.075, 0.1, 0.2, 0)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:tin_pieces', 0, 0.05, 0.075, 0.1, 0.2, 0)
SieveRecipe('minecraft:gravel', 'exnihilomekanism:osmium_pieces', 0, 0, 0.05, 0.075, 0.2, 0.25)
SieveRecipe('minecraft:gravel', 'exnihilosequentia:platinum_pieces', 0, 0, 0.05, 0.075, 0.1, 0)

// Sand
SieveRecipe('minecraft:sand', 'minecraft:cocoa_beans', 0.1, 0.1, 0, 0, 0.1, 0.2)
SieveRecipe('minecraft:sand', 'minecraft:prismarine_shard', 0, 0, 0.05, 0, 0.1, 0.2)
SieveRecipe('minecraft:sand', 'minecraft:prismarine_crystals', 0, 0, 0.1, 0, 0.1, 0.2)

SieveRecipe('minecraft:sand', 'mekanism:fluorite_gem', 0, 0, 0, 0, 0.1, 0.2)
SieveRecipe('minecraft:sand', 'mekanism:salt', 0.1, 0.1, 0, 0.1, 0, 0.1)

SieveRecipe('minecraft:sand', 'elementalcraft:inert_crystal', 0, 0.15, 0.15, 0, 0, 0.2)

SieveRecipe('minecraft:sand', 'forbidden_arcanus:arcane_crystal', 0, 0.15, 0.15, 0, 0, 0.2)

SieveRecipe('minecraft:sand', 'ars_nouveau:source_gem', 0, 0.15, 0.15, 0, 0, 0.2)

SieveRecipe('minecraft:sand', 'exnihilosequentia:uranium_pieces', 0, 0.05, 0.075, 0.1, 0, 0)

// Dust
SieveRecipe('exnihilosequentia:dust', 'minecraft:bone_meal', 0.1, 0.15, 0.1, 0, 0.2, 0)
SieveRecipe('exnihilosequentia:dust', 'minecraft:gunpowder', 0.1, 0.15, 0.1, 0, 0.2, 0)
SieveRecipe('exnihilosequentia:dust', 'minecraft:clay', 0.1, 0.15, 0, 0, 0.2, 0)
SieveRecipe('exnihilosequentia:dust', 'minecraft:redstone', 0, 0.1, 0.1, 0, 0.2, 0.3)
SieveRecipe('exnihilosequentia:dust', 'minecraft:blaze_powder', 0, 0, 0, 0.1, 0.2, 0.3)

SieveRecipe('exnihilosequentia:dust', 'ae2:sky_dust', 0, 0.1, 0, 0, 0.2, 0.3)
SieveRecipe('exnihilosequentia:dust', 'ae2:certus_quartz_dust', 0, 0.1, 0, 0, 0.2, 0.3)
SieveRecipe('exnihilosequentia:dust', 'ae2:fluix_dust', 0, 0, 0, 0, 0.1, 0.3)

// Crushed Netherrack
SieveRecipe('exnihilosequentia:crushed_netherrack', 'minecraft:netherite_scrap', 0, 0, 0, 0.04, 0.08, 0.1)

// Crushed Skystone
SieveRecipe('exnihiloae:crushed_skystone', 'ae2:certus_quartz_crystal', 0.1, 0, 0.2, 0.3, 0.5, 0.5)

// Soul Sand
SieveRecipe('minecraft:soul_sand', 'minecraft:quartz', 0, 0.1, 0.2, 0, 0.1, 0.2)
SieveRecipe('minecraft:soul_sand', 'minecraft:glowstone_dust', 0.1, 0.2, 0.3, 0, 0.3, 0.2)

// Crushed Endstone
SieveRecipe('exnihilosequentia:crushed_end_stone', 'minecraft:ender_pearl', 0, 0, 0, 0, 0.1, 0.2)

})

