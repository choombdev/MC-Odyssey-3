// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Removing all Old Recipes
    ['alltheores:lead_ingot', 'alltheores:bronze_ingot', 'alltheores:steel_ingot', 'alltheores:invar_ingot', 'alltheores:signalum_ingot','alltheores:copper_gear', 'alltheores:gold_gear', 'alltheores:invar_gear', 'alltheores:constantan_gear', 'alltheores:electrum_gear', 'minecraft:redstone', 'minecraft:glass', 'minecraft:bucket', 'minecraft:hopper']
    event.remove({output: 'refinedpipes:basic_item_pipe'})
    event.shaped('refinedpipes:basic_item_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:copper_gear',
        C: 'alltheores:lead_ingot',
        D: 'minecraft:glass'
        })
    event.remove({output: 'refinedpipes:improved_item_pipe'})
    event.shaped('refinedpipes:improved_item_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        C: 'alltheores:bronze_ingot',
        D: 'refinedpipes:basic_item_pipe',
        G: 'alltheores:gold_gear'
    })
    event.remove({output: 'refinedpipes:advanced_item_pipe'})
    event.shaped('refinedpipes:advanced_item_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:invar_gear',
        D: 'refinedpipes:improved_item_pipe',
        C: 'alltheores:steel_ingot'
    })
    // Fluid
    event.remove({output: 'refinedpipes:basic_fluid_pipe'})
    event.shaped('refinedpipes:basic_fluid_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:copper_gear',
        C: 'alltheores:lead_ingot',
        D: 'minecraft:bucket'
    })
    event.remove({output: 'refinedpipes:improved_fluid_pipe'})
    event.shaped('refinedpipes:improved_fluid_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        C: 'alltheores:bronze_ingot',
        D: 'refinedpipes:basic_fluid_pipe',
        G: 'alltheores:gold_gear'
    })
    event.remove({output: 'refinedpipes:advanced_fluid_pipe'})
    event.shaped('refinedpipes:advanced_fluid_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:invar_gear',
        D: 'refinedpipes:improved_fluid_pipe',
        C: 'alltheores:steel_ingot'
    })
    event.remove({output: 'refinedpipes:elite_fluid_pipe'})
    event.shaped('refinedpipes:elite_fluid_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:constantan_gear',
        D: 'refinedpipes:advanced_fluid_pipe',
        C: 'alltheores:invar_ingot'
    })
    event.remove({output: 'refinedpipes:ultimate_fluid_pipe'})
    event.shaped('refinedpipes:ultimate_fluid_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:electrum_gear',
        D: 'refinedpipes:elite_fluid_pipe',
        C: 'alltheores:signalum_ingot'
    })
    // Energy Pipes
    event.remove({output: 'refinedpipes:basic_energy_pipe'})
    event.shaped('refinedpipes:basic_energy_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:copper_gear',
        C: 'alltheores:lead_ingot',
        D: 'minecraft:redstone_block'
    })
    event.remove({output: 'refinedpipes:improved_energy_pipe'})
    event.shaped('refinedpipes:improved_energy_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        C: 'alltheores:bronze_ingot',
        D: 'refinedpipes:basic_energy_pipe',
        G: 'alltheores:gold_gear'
    })
    event.remove({output: 'refinedpipes:advanced_energy_pipe'})
    event.shaped('refinedpipes:advanced_energy_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:invar_gear',
        D: 'refinedpipes:improved_energy_pipe',
        C: 'alltheores:steel_ingot'
    })
    event.remove({output: 'refinedpipes:elite_energy_pipe'})
    event.shaped('refinedpipes:elite_energy_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:constantan_gear',
        D: 'refinedpipes:advanced_energy_pipe',
        C: 'alltheores:invar_ingot'
    })
    event.remove({output: 'refinedpipes:ultimate_energy_pipe'})
    event.shaped('refinedpipes:ultimate_energy_pipe', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:electrum_gear',
        D: 'refinedpipes:elite_energy_pipe',
        C: 'alltheores:signalum_ingot'
    })
    // Extractors
    event.remove({output: 'refinedpipes:basic_extractor_attachment'})
    event.shaped('refinedpipes:basic_extractor_attachment', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:copper_gear',
        C: 'alltheores:lead_ingot',
        D: 'minecraft:hopper'
    })
    event.remove({output: 'refinedpipes:improved_extractor_attachment'})
    event.shaped('refinedpipes:improved_extractor_attachment', [
        ' G ',
        'CDC',
        ' G '
    ], {
        C: 'alltheores:bronze_ingot',
        D: 'refinedpipes:basic_extractor_attachment',
        G: 'alltheores:gold_gear'
    })
    event.remove({output: 'refinedpipes:advanced_extractor_attachment'})
    event.shaped('refinedpipes:advanced_extractor_attachment', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:invar_gear',
        D: 'refinedpipes:improved_extractor_attachment',
        C: 'alltheores:steel_ingot'
    })
    event.remove({output: 'refinedpipes:elite_extractor_attachment'})
    event.shaped('refinedpipes:elite_extractor_attachment', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:constantan_gear',
        D: 'refinedpipes:advanced_extractor_attachment',
        C: 'alltheores:invar_ingot'
    })
    event.remove({output: 'refinedpipes:ultimate_extractor_attachment'})
    event.shaped('refinedpipes:ultimate_extractor_attachment', [
        ' G ',
        'CDC',
        ' G '
    ], {
        G: 'alltheores:electrum_gear',
        D: 'refinedpipes:elite_extractor_attachment',
        C: 'alltheores:signalum_ingot'
    })


    
})

