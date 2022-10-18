// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    
    event.remove({output: 'tempad:tempad'})
    event.shaped('tempad:tempad', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: 'alltheores:brass_plate',
        C: 'mekanism:advanced_control_circuit',
        B: 'mekanism:teleportation_core'
    })
})

