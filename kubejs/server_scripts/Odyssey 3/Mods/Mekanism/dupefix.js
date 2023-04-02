// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{

  event.remove({output: 'mekanism:personal_chest'})
  event.remove({output: 'mekanism:personal_barrel'})

  // Automatic Replacement
  event.replaceInput({},'mekanism:personal_chest', 'industrialforegoing:pity_black_hole_unit')
  event.replaceInput({},'mekanism:personal_barrel', 'industrialforegoing:pity_black_hole_unit')
  
  event.replaceInput({},'#mekanism:personal_storage', 'industrialforegoing:pity_black_hole_unit')

  // Manual Replacement
  event.remove({output:'mekanism:robit'})
  event.shaped('mekanism:robit', [
    ' S ',
    'EAE',
    'OBO'
  ], {
    S: 'alltheores:steel_ingot',
    E: 'mekanism:energy_tablet',
    A: 'mekanism:alloy_atomic',
    O: 'mekanism:ingot_refined_obsidian',
    B: 'industrialforegoing:pity_black_hole_unit'
  })

  event.remove({output:'mekanism:laser_tractor_beam'})
  event.shapeless('mekanism:laser_tractor_beam', ['mekanism:laser_amplifier','industrialforegoing:pity_black_hole_unit'])

  event.remove({output:'mekanism:chemical_oxidizer'})
  event.shaped('mekanism:chemical_oxidizer', [
    'ACA',
    'BTG',
    'ACA'
  ], {
    A: 'mekanism:alloy_infused',
    C: 'mekanism:basic_control_circuit',
    B: 'industrialforegoing:pity_black_hole_unit',
    T: 'mekanism:dynamic_tank',
    G: 'mekanism:basic_chemical_tank'
  })

})

