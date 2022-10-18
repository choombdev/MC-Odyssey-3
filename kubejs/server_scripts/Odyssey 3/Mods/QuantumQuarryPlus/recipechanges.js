// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

// Quantum Quarry
event.remove({output:'quantumquarryplus:quantum_quarry_plus'})
event.shaped('quantumquarryplus:quantum_quarry_plus', [
    'SNA',
    'EXE',
    'ANS'
    ],{
     N: 'quantumquarryplus:endercell',
     E: 'minecraft:netherite_block',
     A: 'quantumquarryplus:quarry_framw',
     S: 'extendedcrafting:nether_star_block',
     X: 'botania:gaia_ingot'
    }) 
    
    })
    