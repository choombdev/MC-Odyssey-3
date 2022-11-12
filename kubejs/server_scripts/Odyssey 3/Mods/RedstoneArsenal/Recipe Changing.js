// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    
   // Flux Dust
    event.remove({output: 'redstone_arsenal:flux_dust'})
    event.shaped('redstone_arsenal:flux_dust', [
        'FEF',
        'NCN',
        'FEF'
    ], {
        F: 'fluxnetworks:flux_block',
        E: 'alltheores:enderium_nugget',
        N: 'thermal:netherite_dust',
        C: 'mekanism:basic_control_circuit'
    })
    // Flux Ingots
    event.remove({id: 'redstone_arsenal:materials/flux_ingot_fire_charge_from_dust'})
    // Flux Gem
    event.remove({output:'redstone_arsenal:flux_gem'})
    event.shaped('redstone_arsenal:flux_gem', [
        'D D',
        ' G ',
        'D D'
    ], {
        D: 'redstone_arsenal:flux_dust',
        G: 'botania:mana_diamond'})

})

