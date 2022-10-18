// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
  // Diamond Ring
    event.remove({output:'angelring:itemdiamondring'})
    event.shaped('angelring:itemdiamondring', [
        'SBS',
        'AXA',
        'BSB'
      ], {
        A: 'reliquary:witherless_rose',
        S: 'minecraft:ghast_tear',
        B: 'botania:mana_diamond_block',
        X: 'pneumaticcraft:elytra_upgrade'
      })

  // RF RINGS:
  // Leadstone Ring
    event.remove({output:'angelring:leadstone_angel_ring'})
    event.shaped('angelring:leadstone_angel_ring', [
        'SFS',
        'ARA',
        'BDB'
      ], {
        R: 'angelring:itemdiamondring',
        A: Item.of('mysticalagriculture:soul_jar', '{Souls:4.0d,Type:"mysticalagriculture:ghast"}'),
        S: 'botania:manasteel_block',
        B: 'mysticalagriculture:prudentium_ingot_block',
        D: 'mysticalagradditions:dragon_egg_chunk',
        F: 'minecraft:shulker_shell'
      })
  // Energetic Ring 
  event.remove({output:'angelring:energetic_angel_ring'})
  event.shaped('angelring:energetic_angel_ring', [
      'SFS',
      'ARA',
      'BDB'
    ], {
      R: 'angelring:leadstone_angel_ring',
      A: 'mekanism:advanced_tier_installer',
      S: 'minecraft:netherite_block',
      B: 'mysticalagriculture:tertium_ingot_block',
      D: 'mysticalagradditions:dragon_egg_chunk',
      F: 'minecraft:shulker_shell'
    })
  // Hardened Ring
  event.remove({output:'angelring:hardened_angel_ring'})
  event.shaped('angelring:hardened_angel_ring', [
      'SFS',
      'ARA',
      'BDB'
    ], {
      R: 'angelring:energetic_angel_ring',
      A: 'mekanism:elite_tier_installer',
      S: 'thermal:upgrade_augment_1',
      B: 'mysticalagriculture:imperium_ingot_block',
      D: 'mysticalagradditions:dragon_egg_chunk',
      F: 'minecraft:shulker_shell'
    })

  // Reinforced Ring
  event.remove({output:'angelring:reinforced_angel_ring'})
  event.shaped('angelring:reinforced_angel_ring', [
      'SFS',
      'ARA',
      'BDB'
    ], {
      R: 'angelring:hardened_angel_ring',
      A: 'mekanism:ultimate_tier_installer',
      S: 'thermal:upgrade_augment_2',
      B: 'mysticalagriculture:supremium_ingot_block',
      D: 'mysticalagradditions:dragon_egg_chunk',
      F: 'minecraft:shulker_shell'
    })
  // Resonant Ring
  event.remove({output:'angelring:resonant_angel_ring'})
  event.shaped('angelring:resonant_angel_ring', [
      'SFS',
      'ARA',
      'BDB'
    ], {
      R: 'angelring:reinforced_angel_ring',
      A: 'mekanism:ultimate_tier_installer',
      S: 'thermal:upgrade_augment_3',
      B: 'mysticalagradditions:insanium_ingot_block',
      D: 'mysticalagradditions:dragon_egg_chunk',
      F: 'minecraft:shulker_shell'
    })
  // Infinite Ring
  event.remove({output:'angelring:itemring'})
  event.shaped('angelring:itemring', [
      'ABC',
      'DRE',
      'FGH'
    ], {
      R:'angelring:resonant_angel_ring',
      A:'twilightforest:thorn_rose',
      B:"ars_elemental:air_focus",
      C:'mekanism:pellet_polonium',
      D:'industrialforegoing:machine_frame_supreme',
      E:'create:rotation_speed_controller',
      F:'extendedcrafting:crystaltine_ingot',
      G:'solarflux:sp_8',
      H:'gobber2:dragon_star'
    })
})

