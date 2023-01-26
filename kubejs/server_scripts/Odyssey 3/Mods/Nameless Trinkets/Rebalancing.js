// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// Removing OP Trinkets
    // Removing Ethereal Wings
    event.remove({output:'nameless_trinkets:ethereal_wings'})

// Dust Recipes
    // Dubious Dust
    event.remove({output:'nameless_trinkets:dubious_dust'})
    event.shaped('nameless_trinkets:dubious_dust', [
        'OAO',
        'ANA',
        'OAO'
    ], {
        O: 'occultism:otherworld_ashes',
        A: 'ars_nouveau:end_fiber',
        N: 'thermal:netherite_gear',
    })
    // Glowing Dust
    event.remove({output:'nameless_trinkets:glowing_dust'})
    event.shaped('nameless_trinkets:glowing_dust', [
        'OAO',
        'ANA',
        'OAO'
    ], {
        O: "nameless_trinkets:dubious_dust",
        A: 'forbidden_arcanus:arcane_crystal',
        N: 'botania:terrasteel_ingot'
    })
    // Ultimate Dust
    event.remove({output:'nameless_trinkets:ultimate_dust'})
    event.shaped('nameless_trinkets:ultimate_dust', [
        'OAO',
        'ANA',
        'OAO'
    ], {
        O: "nameless_trinkets:glowing_dust",
        A: 'minecraft:nether_star',
        N: 'botania:gaia_ingot'
    })
// OP Trinkets

// Vampire Blood
event.remove({output:'nameless_trinkets:vampire_blood'})
event.shaped('nameless_trinkets:vampire_blood', [
    'OAO',
    'ANA',
    'OAO'
], {
    N: 'nameless_trinkets:glowing_dust',
    O: 'minecraft:netherite_block',
    A: 'bloodmagic:daggerofsacrifice'
})
// Rage Mind
event.remove({output:'nameless_trinkets:rage_mind'})
event.shaped('nameless_trinkets:rage_mind', [
    'OAO',
    'ANA',
    'OAO'
], {
    N: 'nameless_trinkets:ultimate_dust',
    O: 'botania:gaia_head',
    A: 'tconstruct:dragon_scale'
})

// Ghast Eye
event.remove({output:'nameless_trinkets:ghast_eye'})
event.shaped('nameless_trinkets:ghast_eye', [
    'OAO',
    'ANA',
    'OAO'
], {
    N: 'nameless_trinkets:glowing_dust',
    O: 'minecraft:end_crystal',
    A: 'botania:elementium_ingot'
})
    // Blaze Nucleus
    event.remove({output:'nameless_trinkets:blaze_nucleus'})
    event.shaped('nameless_trinkets:blaze_nucleus', [
        'OAO',
        'ANA',
        'OAO'
    ], {
        N: 'nameless_trinkets:glowing_dust',
        O: 'minecraft:blaze_rod',
        A: 'minecraft:fire_charge'
    })
    
    // Ice Cube
    event.remove({output:'nameless_trinkets:ice_cube'})
    event.shaped('nameless_trinkets:ice_cube', [
        'OAO',
        'ANA',
        'OAO'
    ], {
        N: 'nameless_trinkets:glowing_dust',
        O: 'minecraft:packed_ice',
        A: 'reliquary:frozen_core'
    })
    
    // Sigil of Baphomet
    event.remove({output:'nameless_trinkets:sigil_of_baphomet'})
    event.shaped('nameless_trinkets:sigil_of_baphomet', [
        'OAO',
        'ANA',
        'OAO'
    ], {
        N: 'nameless_trinkets:ultimate_dust',
        O: 'cyclic:soulstone',
        A: 'kubejs:choombium_ingot'
    })
    // Sleeping Pills
    event.remove({output:'nameless_trinkets:sleeping_pills'})
    event.shaped('nameless_trinkets:sleeping_pills', [
        'OAO',
        'ANA',
        'OAO'
    ], {
        N: 'nameless_trinkets:glowing_dust',
        O: 'minecraft:phantom_membrane',
        A: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:night_vision"}')
    })
    // Spider Legs
    event.remove({output:'nameless_trinkets:spider_legs'})
    event.shaped('nameless_trinkets:spider_legs', [
        'OAO',
        'ANA',
        'OAO'
    ], {
        N: 'nameless_trinkets:glowing_dust',
        O: '#forge:tools/pickaxes',
        A: 'adhooks:web_hook'
    })
    // Reforger
    event.remove({output:'nameless_trinkets:reforger'})
    event.shaped('nameless_trinkets:reforger', [
        ' A ',
        'BNC',
        ' D '
    ], {
        N: 'nameless_trinkets:ultimate_dust',
        A: 'tconstruct:tinkers_anvil',
        B: 'tconstruct:scorched_anvil',
        C: 'cyclic:anvil_magma',
        D: 'cyclic:anvil'
    })
    // Cracked Crown
    event.remove({output:'nameless_trinkets:cracked_crown'})
    event.shaped('nameless_trinkets:cracked_crown', [
        'OAO',
        'ANA',
        'OAO'
    ], {
        O: 'nameless_trinkets:ultimate_dust',
        A: 'botania:gaia_ingot',
        N: 'botania:gaia_head'
    })
    // Gods Crown
    event.remove({output:'nameless_trinkets:gods_crown'})
    event.shaped('nameless_trinkets:gods_crown', [
        'OAO',
        'ANA',
        'OAO'
    ], {
        O: 'minecraft:dragon_egg',
        A: 'mysticalagradditions:nether_star_crux',
        N: 'nameless_trinkets:cracked_crown'
    })
})
