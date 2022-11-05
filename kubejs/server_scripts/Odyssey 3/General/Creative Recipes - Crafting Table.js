// This script was made by choombdev for Odyssey 3
// reusing it without explicit permission is not allowed.

onEvent('recipes', event =>{
    // Creative Wireless Universal Grid
    event.shaped('rebornstorage:creative_super_wireless_crafting_grid', [
        ' X ',
        'XAX',
        ' X '
    ], {
        X: 'extendedcrafting:crystaltine_ingot',
        A: 'rebornstorage:super_wireless_crafting_grid'
    })
    // AE2 Creative Storage Cell
    event.shapeless('ae2:creative_item_cell', ['storagedrawers:creative_vending_upgrade', 'ae2:item_storage_cell_256k'])
    // Creative VEnding Upgrade
    event.shaped('storagedrawers:creative_vending_upgrade', ['functionalstorage:creative_vending_upgrade'])
    event.shaped('functionalstorage:creative_vending_upgrade', ['storagedrawers:creative_vending_upgrade'])

// LINE BREAK //
    // Mods
    // Ars Nouveau
        // Ars Nouveau Creative Spellbook
        event.shapeless('ars_nouveau:creative_spell_book', ['ars_nouveau:creative_source_jar', 'ars_nouveau:archmage_spell_book'])
    // Botania
        // Creative Mana Tablet
        event.shapeless(Item.of('botania:mana_tablet', '{creative:1b,mana:500000}'), ['botania:creative_pool', 'botania:mana_tablet'])
        // Creative Mana Battery
        event.shapeless('botanicalmachinery:mana_battery_creative', ['botania:creative_pool', 'botanicalmachinery:mana_battery'])
        // Creative Infrangible Platform
        event.shapeless('botania:infrangible_platform', ['botania:creative_pool', 'botania:spectral_platform'])
        // Creative Lens Storm
        event.shapeless('botania:lens_storm', ['botania:creative_pool', 'botania:lens_fire'])    
// LINE BREAK //
    // Thermal Series
        // Creative Fluid Tank Augment
        event.shapeless('thermal:fluid_tank_creative_augment', ['thermal:machine_efficiency_creative_augment', 'thermal:fluid_tank_augment'])
        // Creative Machine Catalyst
        event.shapeless('thermal:machine_catalyst_creative_augment', ['thermal:machine_efficiency_creative_augment', 'thermal:machine_catalyst_augment'])
        // Creative RF Coil
        event.shapeless('thermal:rf_coil_creative_augment', ['thermal:machine_efficiency_creative_augment', 'thermal:rf_coil_augment'])
// LINE BREAK //
    // Mekanism
        // Creative Bin
        event.shapeless('mekanism:creative_bin', ['mekanism:ultimate_bin', 'storagedrawers:creative_vending_upgrade'])
        // Creative Tank
        event.shapeless('mekanism:creative_fluid_tank', ['mekanism:ultimate_fluid_tank', 'storagedrawers:creative_vending_upgrade'])
        // Creative Chemical Tank
        event.shapeless('mekanism:creative_chemical_tank', ['mekanism:ultimate_chemical_tank', 'storagedrawers:creative_vending_upgrade'])
// LINE BREAK //
    // Create
        // Worldshaper
        event.shapeless('create:handheld_worldshaper', ['create:creative_motor', 'create:wand_of_symmetry'])
        // Blaze Cake
        event.shapeless('create:creative_blaze_cake', ['create:blaze_cake_base', 'kubejs:bottled_fire','kubejs:bottled_fire','alltheores:enderium_ingot', "minecraft:nether_star"])     
        // Creative Fluid Tank
        event.shapeless('create:creative_fluid_tank', ['storagedrawers:creative_vending_upgrade', 'create:fluid_tank'])
        // Creative Crate
        event.shapeless('create:creative_crate', ['storagedrawers:creative_vending_upgrade', 'create:portable_storage_interface'])
// LINE BREAK //
    // Refined Storage
        // Creative Controller
        event.shapeless('refinedstorage:creative_controller', ['refinedstorage:controller', 'mekanism:creative_energy_cube'])
        // Creative Storage Disk
        event.shapeless('refinedstorage:creative_storage_disk', ['extradisks:advanced_storage_housing', 'storagedrawers:creative_vending_upgrade'])
// LINE BREAK //
    // Pneumatic Craft
        // Pneumatic Craft - Creative Compressor
        event.shapeless('pneumaticcraft:creative_compressor', ['pneumaticcraft:advanced_air_compressor', 'mekanism:creative_energy_cube'])
        // Pneumatic Craft - Creative Compressed Iron Block
        event.shapeless('pneumaticcraft:creative_compressed_iron_block', ['pneumaticcraft:compressed_iron_block', 'kubejs:ancientingot'])
// LINE BREAK //
    // Other
        // Mystical Agriculture - Creative Soulium Dagger
        event.shapeless('mysticalagriculture:creative_soulium_dagger', ['mysticalagriculture:soulium_dagger', 'kubejs:ancientingot'])
    })


