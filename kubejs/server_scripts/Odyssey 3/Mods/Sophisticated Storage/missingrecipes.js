// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// Pump
event.shaped('sophisticatedstorage:pump_upgrade', [
    'SGS',
    'AUB',
    'SGS'
  ], {
    U: 'sophisticatedbackpacks:upgrade_base',
    A: 'minecraft:piston',
    B: 'minecraft:sticky_piston',
    S: 'minecraft:glass',
    G: 'minecraft:bucket'
  })

// Advanced Pump
event.shaped('sophisticatedstorage:advanced_pump_upgrade', [
    'ABA',
    'GUG',
    'SSS'
  ], {
    U: 'sophisticatedstorage:pump_upgrade',
    G: 'minecraft:gold_ingot',
    S: 'minecraft:redstone',
    A: 'minecraft:diamond',
    B: 'minecraft:dispenser'
  })
// EXP Pump
event.shaped('sophisticatedstorage:xp_pump_upgrade', [
    'AGA',
    'BUB',
    'AGA'
  ], {
    U: 'sophisticatedstorage:advanced_pump_upgrade',
    G: 'minecraft:redstone',
    A: 'minecraft:diamond',
    B: 'minecraft:experience_bottle'
  })
})

