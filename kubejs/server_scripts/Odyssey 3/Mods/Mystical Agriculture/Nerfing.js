// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{
    // Altar
    event.remove({output: 'mysticalagriculture:infusion_altar'})
    event.shaped('mysticalagriculture:infusion_altar', [
      ' C ',
      'SES',
      'EXE'
    ], {
      C: 'mysticalagriculture:master_infusion_crystal',
      S: 'alltheores:signalum_ingot',
      E: 'compressium:endstone_1',
      X: 'minecraft:nether_star'
    })
})

