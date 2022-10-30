// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    
// End Cake
event.remove({output: 'exnihilosequentia:end_cake'})

// Oak Sieve
    event.remove({output: 'exnihilosequentia:oak_sieve'})
    event.shaped('exnihilosequentia:oak_sieve', [
        'TNT',
        'WOW',
        'SNS'
    ], {
        T: 'botania:terrasteel_ingot',
        N: 'thermal:netherite_gear',
        W: 'immersiveengineering:treated_wood_horizontal',
        S: 'immersiveengineering:stick_treated',
        O: 'minecraft:oak_sapling'
    })

// Birch Sieve
    event.remove({output: 'exnihilosequentia:birch_sieve'})
    event.shaped('exnihilosequentia:birch_sieve', [
        'TNT',
        'WOW',
        'SNS'
    ], {
        T: 'botania:terrasteel_ingot',
        N: 'thermal:netherite_gear',
        W: 'immersiveengineering:treated_wood_horizontal',
        S: 'immersiveengineering:stick_treated',
        O: 'minecraft:birch_sapling'
    })

// Acacia Sieve
    event.remove({output: 'exnihilosequentia:acacia_sieve'})
    event.shaped('exnihilosequentia:acacia_sieve', [
        'TNT',
        'WOW',
        'SNS'
    ], {
        T: 'botania:terrasteel_ingot',
        N: 'thermal:netherite_gear',
        W: 'immersiveengineering:treated_wood_horizontal',
        S: 'immersiveengineering:stick_treated',
        O: 'minecraft:acacia_sapling'
    })

// Jungle Sieve
    event.remove({output: 'exnihilosequentia:jungle_sieve'})
    event.shaped('exnihilosequentia:jungle_sieve', [
        'TNT',
        'WOW',
        'SNS'
    ], {
        T: 'botania:terrasteel_ingot',
        N: 'thermal:netherite_gear',
        W: 'immersiveengineering:treated_wood_horizontal',
        S: 'immersiveengineering:stick_treated',
        O: 'minecraft:jungle_sapling'
    })

// Dark Oak Sieve
    event.remove({output: 'exnihilosequentia:dark_oak_sieve'})
    event.shaped('exnihilosequentia:dark_oak_sieve', [
        'TNT',
        'WOW',
        'SNS'
    ], {
        T: 'botania:terrasteel_ingot',
        N: 'thermal:netherite_gear',
        W: 'immersiveengineering:treated_wood_horizontal',
        S: 'immersiveengineering:stick_treated',
        O: 'minecraft:dark_oak_sapling'
    })

// Spruce Sieve
    event.remove({output: 'exnihilosequentia:spruce_sieve'})
    event.shaped('exnihilosequentia:spruce_sieve', [
        'TNT',
        'WOW',
        'SNS'
    ], {
        T: 'botania:terrasteel_ingot',
        N: 'thermal:netherite_gear',
        W: 'immersiveengineering:treated_wood_horizontal',
        S: 'immersiveengineering:stick_treated',
        O: 'minecraft:spruce_sapling'
    })

// Crimson Sieve
    event.remove({output: 'exnihilosequentia:crimson_sieve'})
    event.shaped('exnihilosequentia:crimson_sieve', [
        'TNT',
        'WOW',
        'SNS'
    ], {
        T: 'botania:terrasteel_ingot',
        N: 'thermal:netherite_gear',
        W: 'immersiveengineering:treated_wood_horizontal',
        S: 'immersiveengineering:stick_treated',
        O: 'minecraft:crimson_fungus'
    })

// Warped Sieve
    event.remove({output: 'exnihilosequentia:warped_sieve'})
    event.shaped('exnihilosequentia:oak_sieve', [
        'TNT',
        'WOW',
        'SNS'
    ], {
        T: 'botania:terrasteel_ingot',
        N: 'thermal:netherite_gear',
        W: 'immersiveengineering:treated_wood_horizontal',
        S: 'immersiveengineering:stick_treated',
        O: 'minecraft:warped_fungus'
    })

// Meshes
    // String Mesh
    event.remove({output: 'exnihilosequentia:string_mesh'})
    event.shaped('exnihilosequentia:string_mesh', [
        'SSS',
        'DTD',
        'SSS'
    ], {
        S: 'botania:mana_string',
        D: 'alltheores:diamond_gear',
        T: 'thermal:upgrade_augment_1'
    })

    // Flint Mesh
    event.remove({output: 'exnihilosequentia:flint_mesh'})
    event.shaped('exnihilosequentia:flint_mesh', [
        'BGP',
        'IMI',
        'PGB'
    ], {
        B: 'cyclic:flint_block',
        G: 'alltheores:steel_gear',
        P: 'alltheores:invar_plate',
        M: 'exnihilosequentia:string_mesh',
        I: 'botania:manasteel_ingot'
    })

    // Iron Mesh
    event.remove({output: 'exnihilosequentia:iron_mesh'})
    event.shaped('exnihilosequentia:iron_mesh', [
        'BGP',
        'IMI',
        'PGB'
    ], {
        B: 'minecraft:netherite_ingot',
        P: 'alltheores:signalum_plate',
        G: 'mekanism:basic_control_circuit',
        M: 'exnihilosequentia:flint_mesh',
        I: 'botania:terrasteel_ingot'
    })

    // Diamond Mesh
    event.remove({output: 'exnihilosequentia:diamond_mesh'})
    event.shaped('exnihilosequentia:diamond_mesh', [
        'GPG',
        'CMC',
        'GPG'
    ], {
        G: 'alltheores:enderium_gear',
        P: 'alltheores:electrum_plate',
        C: 'mekanism:advanced_control_circuit',
        M: 'exnihilosequentia:iron_mesh'
    })

    // Emerald Mesh
    event.remove({output: 'exnihilosequentia:emerald_mesh'})
    event.shaped('exnihilosequentia:emerald_mesh', [
        'GPG',
        'CMC',
        'GPG'
    ], {
        G: 'alltheores:enderium_gear',
        P: 'alltheores:constantan_plate',
        C: 'mekanism:elite_control_circuit',
        M: 'exnihilosequentia:diamond_mesh'
    })

    // Netherite Mesh
    event.remove({output: 'exnihilosequentia:netherite_mesh'})
    event.shaped('exnihilosequentia:netherite_mesh', [
        'GPG',
        'CMC',
        'GPG'
    ], {
        G: 'alltheores:enderium_gear',
        P: 'alltheores:lumium_plate',
        C: 'mekanism:ultimate_control_circuit',
        M: 'exnihilosequentia:emerald_mesh'
    })
})

