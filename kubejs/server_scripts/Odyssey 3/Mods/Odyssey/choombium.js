// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{

  //Smithing
  event.smithing('kubejs:choombium_helmet', Item.of('minecraft:netherite_helmet').ignoreNBT(), 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_chestplate', Item.of('minecraft:netherite_chestplate').ignoreNBT(), 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_leggings', Item.of('minecraft:netherite_leggings').ignoreNBT(), 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_boots', Item.of('minecraft:netherite_boots').ignoreNBT(), 'kubejs:choombium_ingot') 

  event.smithing('kubejs:choombium_sword', Item.of('minecraft:netherite_sword').ignoreNBT(), 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_pickaxe', Item.of('minecraft:netherite_pickaxe').ignoreNBT(), 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_axe', Item.of('minecraft:netherite_axe').ignoreNBT(), 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_shovel', Item.of('minecraft:netherite_shovel').ignoreNBT(), 'kubejs:choombium_ingot') 

  event.smithing('kubejs:choombium_sword', Item.of('byg:pendorite_sword').ignoreNBT(), 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_pickaxe', Item.of('byg:pendorite_pickaxe').ignoreNBT(), 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_axe', Item.of('byg:pendorite_axe').ignoreNBT(), 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_shovel', Item.of('byg:pendorite_shovel').ignoreNBT(), 'kubejs:choombium_ingot') 



  // Ingot to Block (and Vice Versa)
  event.shaped('kubejs:choombium_block', [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: 'kubejs:choombium_ingot'
  })

  event.shapeless('9x kubejs:choombium_ingot', ['kubejs:choombium_block'])
  
  // Mekanism Recipe
  event.recipes.mekanismCombining('kubejs:choombium_ingot', 'kubejs:choomburgert3', 'minecraft:netherite_ingot')

  // Mystical Agriculture Recipe
  event.shaped('kubejs:choombium_ingot', [
    'EEE',
    'E  ',
    'EEE'
    ],{
        E: 'mysticalagriculture:choombium_essence'
    }) 
})

