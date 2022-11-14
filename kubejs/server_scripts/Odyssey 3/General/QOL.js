// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Clearing Patterns
    event.shapeless(Item.of('ae2:blank_pattern').ignoreNBT(), Item.of('ae2:crafting_pattern').ignoreNBT())
    // Saplings
    event.shapeless('tconstruct:blood_slime_sapling', ['tconstruct:blood_slime_ball', '#forge:sapling'])
    // Unifying Silicon
    event.replaceInput({}, 'refinedstorage:silicon', '#forge:silicon')
    event.replaceInput({}, 'ae2:silicon', '#forge:silicon')

    // Copper Fix
    event.remove({id:'minecraft:copper_block'})
    event.shaped('minecraft:copper_block', 
    [
      'CCC', 
      'CCC', 
      'CCC'
  ], {
        C: 'minecraft:copper_ingot'
    })
    // Ink Sac
    event.shapeless('minecraft:ink_sac', ['minecraft:black_dye', 'minecraft:leather'])
    // Toast
    event.smelting('pamhc2foodcore:toastitem', 'minecraft:bread')
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

  // Fixes

  event.remove({id: 'minecraft:ens_ancient_debris'})
  })
  