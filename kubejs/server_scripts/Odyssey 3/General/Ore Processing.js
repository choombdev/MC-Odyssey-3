// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
  // Easy Quartz Recipe
  let rawquartz = 'byg:raw_quartz_block'
  let quartz = 'minecraft:quartz' 
  event.recipes.createCrushing(quartz, rawquartz)
  event.recipes.immersiveengineeringCrusher(quartz, rawquartz)
  event.recipes.thermal.pulverizer(quartz, rawquartz)
  event.recipes.mekanismCrushing(quartz, rawquartz)
  
  // Quartizite Alternative
  event.recipes.createCrushing(['minecraft:quartz'.withChance(0.3), 'minecraft:sand'.withChance(0.6)], 'byg:quartzite_sand')

 // Adding Missing Crushing Recipes
  var materials = ['aluminum', 'netherite', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iridium', 'steel', 'invar', 'electrum', 'bronze', 'enderium', 'lumium', 'signalum', 'constantan', 'brass', 'sapphire']
  // Looping through Materials
  for (let material in materials) {
    // Checking if Material Exists in game then adding a crushing recipe to it.
    x = 'raw_' + material
    y = '2x' + material + '_ingot'
    if ( !Item.of(y).isEmpty() || !Item.of(x).isEmpty() ){
      event.recipes.thermal.pulverizer(x, y)     
    }
  }
})