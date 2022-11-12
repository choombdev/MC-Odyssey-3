// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
  // Adding a recipe to Gaia head
    event.shaped('botania:gaia_head', [
        'SGS',
        'GHG',
        'SGS'
      ], {
        S: 'minecraft:nether_star',
        H: 'minecraft:player_head',
        G: 'botania:gaia_ingot'
      })
    // Adding a recipe to Black Lotus
    event.shaped('botania:black_lotus', [
        'SBS',
        'ZDZ', 
        'SBS'
      ], {
        D: 'minecraft:nether_star',
        B: 'botania:black_shiny_flower',
        S: 'botania:terrasteel_nugget',
        Z: 'minecraft:dragon_breath'})

    // Adding a recipe to Overgrowth Seed
    event.shaped('botania:overgrowth_seed', [
        'SAE',
        'BXC',
        'EDS'
      ], {
        S: 'botania:livingrock',
        A: 'industrialforegoing:fertilizer',
        B: 'mysticalagriculture:mystical_fertilizer',
        C: 'botania:fertilizer',
        D: 'immersiveengineering:fertilizer',
        E: 'create:tree_fertilizer',
        X: 'mysticalagradditions:insanium_essence'
      })







})

