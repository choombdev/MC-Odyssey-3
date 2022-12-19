// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
  // Chunkloader upgrade
  event.shaped('compactmachines:chunkloader_upgrade', [
    'AAA',
    'AXA',
    'AAA'
  ], {
    A: 'compactmachines:wall',
    X: 'chickenchunks:chunk_loader'

  })
})

