// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
  
    // Deep Learner
    event.remove({output: 'hostilenetworks:deep_learner'})
    event.shaped('hostilenetworks:deep_learner', [
        'BCB',
        'CPC',
        'BCB'
    ], {
        B: 'alltheores:enderium_block',
        C: 'mekanism:elite_control_circuit',
        P: 'computercraft:pocket_computer_advanced',
        C: 'ae2:cell_component_1k'
    })

    // Blank Data Model
    event.remove({output: 'hostilenetworks:blank_data_model'})
    event.shaped('hostilenetworks:blank_data_model', [
        ' X ',
        ' C ',
        ' X '
    ], {
        X: 'minecraft:netherite_sword',
        C: 'computercraft:pocket_computer_advanced'
    })

    // Sim Chamber
    event.remove({output:'hostilenetworks:sim_chamber'})
    event.shaped('hostilenetworks:sim_chamber', [
        'NTC',
        'DSD',
        'CTN'
    ], {
        N: 'minecraft:netherite_block',
        T: 'mekanism:teleportation_core',
        C: 'mekanism:ultimate_control_circuit',
        D: 'ae2:cell_component_4k',
        S: 'minecraft:nether_star'
        })

    // Loot Fabricator
    event.remove({output: 'hostilenetworks:loot_fabricator'})
    event.shaped('hostilenetworks:loot_fabricator', [
        'ODO',
        'AXB',
        'ODO'
    ], {
        O: 'mekanism:block_refined_obsidian',
        D: 'ae2:cell_component_64k',
        A: 'ae2:annihilation_core',
        B: 'ae2:formation_core',
        X: 'minecraft:nether_star'
    })
    // Prediciton Matrix
    event.remove({output: 'hostilenetworks:empty_prediction'})
    event.shaped('hostilenetworks:empty_prediction', [
        ' C ',
        'CXC',
        ' C '
    ], {
        X: 'mysticalagradditions:insanium_gemstone',
        C: 'minecraft:quartz'
    })
})

