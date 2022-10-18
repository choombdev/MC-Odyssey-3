// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
  // Black Iron
  event.remove({output:'extendedcrafting:black_iron_ingot'})
  event.shaped('extendedcrafting:black_iron_ingot', [
 'WCW',
 'CXC',
 'WCW'
], {
 W: 'alltheores:enderium_ingot',
 C: 'minecraft:polished_blackstone',
 X: 'minecraft:iron_ingot'
})
})

