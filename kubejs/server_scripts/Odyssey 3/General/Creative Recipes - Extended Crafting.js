// This script was made by choombdev for Odyssey 3
// reusing it without explicit permission is not allowed.


onEvent('recipes', event =>{


    // Creative Vending Upgrade
    event.recipes.extendedcrafting.shaped_table('storagedrawers:creative_vending_upgrade',
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

// LINE BREAK //
    // Mods
    // Ars Nouveau
        // Ars Nouveau Creative Source Jar
        event.recipes.extendedcrafting.shaped_table('ars_nouveau:creative_source_jar',
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

    // Botania
        // Creative Mana Pool
        event.recipes.extendedcrafting.shaped_table('botania:creative_pool', [
            'GMG',
            'TIT',
            'GMG'
        ],  {
            I: 'kubejs:ancientingot',
            M: 'botania:fabulous_pool',
            T: 'botania:terrasteel_block',
            G: 'botania:gaia_head'})
// LINE BREAK //
    // Thermal Series
        // Creative Flux Efficiency
        event.recipes.extendedcrafting.shaped_table('thermal:machine_efficiency_creative_augment',[
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
    // Mekanism
        // Creative Energy Cube
        event.recipes.extendedcrafting.shaped_table('mekanism:creative_energy_cube', [
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
// LINE BREAK //
    // Create
        // Creative Motor
        event.recipes.extendedcrafting.shaped_table('create:creative_motor', [
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

    })


