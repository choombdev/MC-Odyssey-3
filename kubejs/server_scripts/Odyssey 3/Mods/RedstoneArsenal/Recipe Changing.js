// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Removing all Old Recipes
        // Crafting
        event.remove({output: 'redstone_arsenal:flux_dust'})
        event.remove({output:'redstone_arsenal:flux_gem'})
        // Induction
        event.remove({id: 'redstone_arsenal:materials/flux_ingot_fire_charge_from_dust'})
        event.remove({id:'thermal:compat/redstone_arsenal/smelter_rsa_alloy_flux'})
   // Flux Dust
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

    // Flux Gem
    event.shaped('redstone_arsenal:flux_gem', [
        'D D',
        ' G ',
        'D D'
    ], {
        D: 'redstone_arsenal:flux_dust',
        G: 'botania:mana_diamond'})

})

