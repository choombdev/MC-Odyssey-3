// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Ink Sac
    event.shapeless('minecraft:ink_sac', ['minecraft:black_dye', 'minecraft:leather'])
  
    // Craftable Elytra
    event.shaped('minecraft:elytra', [
      'SSS',
      'ABA',
      'A A'
    ], {
      S: 'minecraft:netherite_ingot',
      A: 'reliquary:bat_wing',
      B: 'minecraft:nether_star'
    })
    // Menril Chest
    event.shaped('minecraft:chest', [
      'SSS',
      'S S',
      'SSS'
    ], {
      S: 'integrateddynamics:menril_planks'
    })
  
  // Wool Automation
  event.shapeless('minecraft:white_wool',['#thermal:rockwool', 'minecraft:string'])
  
  // Easy Stick Recipe
  
  event.shaped('16x minecraft:stick', [
      'S',
      'S'
    ], {
      S: '#minecraft:logs'
    })
  
  // Easy Hopper Recipe
  
  event.shaped('minecraft:hopper', [
      'SAS',
      'SAS',
      ' S '
    ], {
      S: 'minecraft:iron_ingot',
      A: '#minecraft:logs'
    })

  // Easy Quartz Recipe
  let rawquartz = 'byg:raw_quartz_block'
  let quartz = 'minecraft:quartz' 
  event.recipes.createCrushing(quartz, rawquartz)
  event.recipes.immersiveengineeringCrusher(quartz, rawquartz)
  event.recipes.thermal.pulverizer(quartz, rawquartz)
  event.recipes.mekanismCrushing(quartz, rawquartz)
  
  // Quartizite Alternative
  event.recipes.createCrushing(['minecraft:quartz'.withChance(0.3), 'minecraft:sand'.withChance(0.6)], 'byg:quartzite_sand')

  })
  