// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{


  //Smelting Ore to Ingot
  event.smelting('kubejs:choombium_ingot', 'kubejs:choombium_ore')
  event.shaped('kubejs:choombium_block', [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: 'kubejs:choombium_ingot'
  })

  event.shapeless('9x kubejs:choombium_ingot', ['kubejs:choombium_block'])

  event.recipes.mekanismCombining('kubejs:choombium_ingot', 'kubejs:choomburgert3', 'minecraft:netherite_ingot')
})

