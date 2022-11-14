// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
  // Overworld
    // Gobber Globette
    event.shaped('gobber2:gobber2_globette', [
      ' BA',
      'TXT',
      'AB '
    ], {
      A: 'thermal:netherite_nugget',
      B: 'botania:terrasteel_nugget',
      X: 'thermal:upgrade_augment_1',
      T: 'botania:terrasteel_ingot'
    })
    //Gobber Ingot
    event.remove({output:'gobber2:gobber2_ingot'})
    event.shaped('gobber2:gobber2_ingot', [
      'GXG',
      'SSS',
      'GXG'
    ], {
      G: 'gobber2:gobber2_glob',
      S: 'alltheores:steel_ingot',
      X: 'mekanism:advanced_control_circuit'
    })
  // Nether
    // Gobber Globette
    event.shaped('gobber2:gobber2_glob_nether', [
      'ABA',
      'BXB',
      'ABA'
    ], {
      A: 'tconstruct:cobalt_ingot',
      B: 'botania:elementium_ingot',
      X: 'thermal:upgrade_augment_2'
    })
    //Gobber Ingot
    event.remove({output:'gobber2:gobber2_ingot_nether'})
    event.shaped('gobber2:gobber2_ingot_nether', [
      'GGG',
      'SXS',
      'GGG'
    ], {
      G: 'gobber2:gobber2_glob_nether',
      S: 'minecraft:wither_rose',
      X: 'gobber2:gobber2_ingot'
    })
  // End
    // Gobber Globette
    event.shaped('gobber2:gobber2_glob_end', [
      'ABA',
      'BXB',
      'ABA'
    ], {
      A: 'tconstruct:manyullyn_ingot',
      B: 'botania:gaia_ingot',
      X: 'thermal:upgrade_augment_3'
    })
    //End Gobber 
    event.remove({output:'gobber2:gobber2_ingot_end'})
    event.shaped('gobber2:gobber2_ingot_end', [
      'GGG',
      'SXS',
      'GGG'
    ], {
      G: 'gobber2:gobber2_glob_end',
      S: 'tconstruct:dragon_scale',
      X: 'gobber2:gobber2_ingot_nether'
    })
    event.remove({output:'gobber2:dragon_elytra'})
    event.shaped('gobber2:dragon_elytra', [
      'CIC',
      'IXI',
      'CIC'
    ], {
      C: 'mysticalagradditions:dragon_egg_crux',
      I: 'gobber2:gobber2_ingot_end',
      X: 'angelring:itemring'})
})

