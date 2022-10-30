// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{
  // Crux
  event.remove({output: 'mysticalagradditions:nether_star_crux'})
  event.shaped('mysticalagradditions:nether_star_crux', [
    'RNR',
    'NGN',
    'RNR'
  ], {
    R: 'reliquary:witherless_rose',
    N: 'forbidden_arcanus:dark_nether_star_block',
    G: 'botania:gaia_head'
  })
  // Nether Star Shards
    // Shard to Essence
    event.shapeless('8x mysticalagriculture:nether_star_essence', ['progressivebosses:nether_star_shard'])
    event.shapeless('8x mysticalagriculture:nether_star_essence', ['mysticalagradditions:nether_star_shard'])
    // Essence to Shard
    event.shaped('progressivebosses:nether_star_shard', [
      'SSS',
      'S S',
      'SSS'
    ], {
      S: 'mysticalagriculture:nether_star_essence'
    })
    event.shaped('mysticalagradditions:nether_star_shard', [
      'S S',
      'SSS',
      'SSS'
    ], {
      S: 'mysticalagriculture:nether_star_essence'
    })
    // Unifying Recipes
    event.remove({output:'mysticalagradditions:nether_star_shard'})
    event.shaped('minecraft:nether_star', [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'mysticalagradditions:nether_star_shard'
    })
})

