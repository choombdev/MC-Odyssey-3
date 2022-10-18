// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Dimension Builder
    event.remove({output:'rftoolsdim:dimension_builder'})
    event.shaped('rftoolsdim:dimension_builder', [
        'CDC',
        'DGD',
        'CDC'
    ],{
        C: 'extendedcrafting:crystaltine_block',
        D: 'rftoolsdim:dimensional_block',
        G: 'botania:gaia_head'
    })
})

