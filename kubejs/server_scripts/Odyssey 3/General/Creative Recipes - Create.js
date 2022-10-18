// This script was made by choombdev for Odyssey 3
// reusing it without explicit permission is not allowed.


// Pre-Requisites to Extended Crafting

onEvent('recipes', event =>{

    // Creative Wireless Universal Grid
    event.shaped('universalgrid:creative_wireless_universal_grid', [
        ' X ',
        'XAX',
        ' X '
    ], {
        X: 'extendedcrafting:crystaltine_ingot',
        A: 'universalgrid:wireless_universal_grid'
    })
    // Creative Vending Upgrade
    event.recipes.createMechanicalCrafting('storagedrawers:creative_vending_upgrade',
    [
        'NNUUUNN',
        'NIYCZIN',
        'CWEQFXC',
        'NIYCZIN',
        'NNUUUNN',
    ], {
        N: 'compressium:netherite_2',
        U: 'mekanism:ultimate_tier_installer',
        C: 'kubejs:choomburgert4',
        W: 'ae2:item_storage_cell_256k',
        X: 'ae2:fluid_storage_cell_256k',
        Y: 'ae2:spatial_storage_cell_128',
        Z: 'mekanism:qio_drive_supermassive',
        I: 'kubejs:ancientingot',
        E: 'extradisks:infinite_storage_block',
        F: 'extradisks:infinite_fluid_storage_block',
        Q: 'mekanism:creative_energy_cube' 
    })
    // AE2 Creative Storage Cell
    event.shapeless('ae2:creative_item_cell', ['storagedrawers:creative_vending_upgrade', 'ae2:item_storage_cell_256k'])

// LINE BREAK //
    // Mods
    // Ars Nouveau
        // Ars Nouveau Creative Source Jar
        event.recipes.createMechanicalCrafting('ars_nouveau:creative_source_jar',
        [
            'ABC',
            'DIE',
            'FXG',
        ],{
            I: 'kubejs:ancientingot',
            A: 'ars_elemental:fire_focus',
            B: 'ars_elemental:water_focus',
            C: 'ars_elemental:earth_focus',
            D: 'ars_elemental:air_focus',
            E: 'ars_nouveau:summon_focus',
            F: 'ars_nouveau:shapers_focus',
            G: 'ars_elemental:necrotic_focus',
            X: 'ars_nouveau:source_jar'
        })
        // Ars Nouveau Creative Spellbook
        event.shapeless('ars_nouveau:creative_spell_book', ['ars_nouveau:creative_source_jar', 'ars_nouveau:archmage_spell_book'])
    // Botania
        // Creative Mana Pool
        event.recipes.createMechanicalCrafting('botania:creative_pool', [
            'GMG',
            'TIT',
            'GMG'
        ],  {
            I: 'kubejs:ancientingot',
            M: 'botania:fabulous_pool',
            T: 'botania:terrasteel_block',
            G: 'botania:gaia_head'})
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
        // Creative Flux Efficiency
        event.recipes.createMechanicalCrafting('thermal:machine_efficiency_creative_augment',[
        'ABC',
        'DIE',
        'FXG'
        ],{
            I: 'kubejs:ancientingot',
            A: 'thermal:dynamo_stirling',
            B: 'thermal:dynamo_magmatic',
            C: 'thermal:dynamo_compression',
            D: 'thermal:dynamo_numismatic',
            E: 'thermal:dynamo_lapidary',
            F: 'thermal:dynamo_disenchantment',
            G: 'thermal:dynamo_gourmand',
            X: 'thermal:machine_efficiency_augment'
        }) 
        // Creative Fluid Tank Augment
        event.shapeless('thermal:fluid_tank_creative_augment', ['thermal:machine_efficiency_creative_augment', 'thermal:fluid_tank_augment'])
        // Creative Machine Catalyst
        event.shapeless('thermal:machine_catalyst_creative_augment', ['thermal:machine_efficiency_creative_augment', 'thermal:machine_catalyst_augment'])
        // Creative RF Coil
        event.shapeless('thermal:rf_coil_creative_augment', ['thermal:machine_efficiency_creative_augment', 'thermal:rf_coil_augment'])
// LINE BREAK //
    // Mekanism
        // Creative Energy Cube
        event.recipes.createMechanicalCrafting('mekanism:creative_energy_cube', [
            'ABCDYEFGW',
            'OPQRZSTUV',
            'HIJKYLMNX'
        ],{
            A: 'industrialforegoing:mycelial_magma', 
            B: 'industrialforegoing:mycelial_magma', 
            C: 'industrialforegoing:mycelial_pink', 
            D: 'industrialforegoing:mycelial_netherstar', 
            E: 'industrialforegoing:mycelial_death', 
            F: 'industrialforegoing:mycelial_rocket', 
            G: 'industrialforegoing:mycelial_crimed', 
            H: 'industrialforegoing:mycelial_meatallurgic', 
            I: 'mekanismgenerators:heat_generator', 
            J: 'mekanismgenerators:advanced_solar_generator', 
            K: 'mekanismgenerators:wind_generator', 
            L: 'mekanismgenerators:bio_generator', 
            M: 'mekanismgenerators:gas_burning_generator', 
            N: 'immersiveengineering:thermoelectric_generator', 
            O: 'industrialforegoing:biofuel_generator', 
            P: 'industrialforegoing:mycelial_halitosis', 
            Q: 'industrialforegoing:mycelial_frosty', 
            R: 'industrialforegoing:mycelial_explosive', 
            S: 'industrialforegoing:mycelial_ender', 
            T: 'industrialforegoing:mycelial_disenchantment', 
            U: 'industrialforegoing:mycelial_potion', 
            V: 'industrialforegoing:mycelial_culinary', 
            W: 'industrialforegoing:mycelial_slimey', 
            X: 'industrialforegoing:mycelial_furnace',
            Y: 'mekanism:ultimate_energy_cube',
            Z: 'kubejs:ancientingot'
        })
        // Creative Bin
        event.shapeless('mekanism:creative_bin', ['mekanism:ultimate_bin', 'storagedrawers:creative_vending_upgrade'])
        // Creative Tank
        event.shapeless('mekanism:creative_fluid_tank', ['mekanism:ultimate_fluid_tank', 'storagedrawers:creative_vending_upgrade'])
        // Creative Chemical Tank
        event.shapeless('mekanism:creative_chemical_tank', ['mekanism:ultimate_chemical_tank', 'storagedrawers:creative_vending_upgrade'])
// LINE BREAK //
    // Create
        // Creative Motor
        event.recipes.createMechanicalCrafting('create:creative_motor', [
        'A B',
        'CID',
        'E F'
        ],{
        I: 'kubejs:ancientingot',
        A: 'createaddition:electric_motor',
        B: 'create:flywheel',
        C: 'create:crushing_wheel',
        D: 'create:extendo_grip',
        E: 'create:adjustable_chain_gearshift',
        F: 'create:water_wheel'
        })
        // Worldshaper
        event.shapeless('create:handheld_worldshaper', ['create:creative_motor', 'create:wand_of_symmetry'])
        // Blaze Cake
        event.shapeless('create:creative_blaze_cake', ['create:blaze_cake_base', 'kubejs:ancientingot'])     
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


