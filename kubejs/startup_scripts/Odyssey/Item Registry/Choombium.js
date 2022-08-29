// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('block.registry', event => {
  event.create('choombium_block').material('iron').hardness(5).displayName('Choombium Block')
  event.create('choombium_ore').material('rock').hardness(3).displayName('Choombium Ore')
})

onEvent('item.registry', event => {
  event.create('choombium_ingot').displayName('Choombium Ingot')
})
