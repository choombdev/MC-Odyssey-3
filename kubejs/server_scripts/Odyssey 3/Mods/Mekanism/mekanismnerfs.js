// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{

  // Circuits
  // Advanced Circuit
  event.shaped('mekanism:advanced_control_circuit', [
    'PGP',
    'CAC',
    'PGP'],{
      G: 'alltheores:gold_gear',
      P: 'alltheores:invar_plate',
      C: 'mekanism:basic_control_circuit',
      A: 'mekanism:alloy_infused'
    })
  // Elite Circuit
  event.shaped('mekanism:elite_control_circuit', [
    'PGP',
    'CAC',
    'PGP'
  ], {
    G: 'alltheores:signalum_gear',
    P: 'alltheores:electrum_plate',
    A: 'mekanism:alloy_atomic',
    C: 'mekanism:alloy_reinforced'
  })
  // Ultimate Circuit
  event.shaped('mekanism:ultimate_control_circuit', [
    'PGP',
    'CAC',
    'PGP'
  ], {
    C: 'mekanism:elite_control_circuit',
    A: 'mekanism:alloy_atomic',
    P: 'alltheores:enderium_plate',
    G: 'alltheores:lumium_gear'
  })
  // Blocks
  // Steel Casing
  event.shaped('mekanism:steel_casing', [
    'SBS',
    'BGB',
    'SBS'
  ], {
    S: 'alltheores:steel_ingot',
    G: 'minecraft:glass',
    B: 'alltheores:brass_plate'
  })
})

