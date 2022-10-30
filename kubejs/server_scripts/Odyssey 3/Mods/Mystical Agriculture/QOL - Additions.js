// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{
  // Soulium Dust
  event.recipes.createMixing('mysticalagriculture:soulium_dust', ['minecraft:soul_sand', 'occultism:otherworld_ashes'])
  event.recipes.createMixing('mysticalagriculture:soulium_dust', ['minecraft:soul_soil', 'mna:purified_vinteum_dust'])  
  // Cobbled Soulstone
  event.shaped('mysticalagriculture:soulstone_cobble', [
    'MCM',
    'CMC',
    'MCM'
  ], {
    C: 'mysticalagriculture:soulium_dust',
    M: 'minecraft:cobblestone'
  })

  // Soulium Ore
  event.shaped('mysticalagriculture:soulium_ore', [
    'MCM',
    'CMC',
    'MCM'
  ], {
    C: 'mna:superheated_vinteum_ingot',
    M: 'tconstruct:nether_grout'
  })
})

