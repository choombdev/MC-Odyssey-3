// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
  // Easy Quartz Recipe
  let rawquartz = 'byg:raw_quartz_block'
  let quartz = 'minecraft:quartz' 
  event.recipes.createCrushing(quartz, rawquartz)
  event.recipes.immersiveengineeringCrusher(quartz, rawquartz)
  event.recipes.thermal.pulverizer(quartz, rawquartz)
  event.recipes.mekanismCrushing(quartz, rawquartz)

  // Quartizite to Quartz
  event.recipes.createCrushing(['minecraft:quartz', 'minecraft:sand'], 'byg:quartzite_sand')

    // Adding Missing Crushing Recipes
    var materials = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iridium']
    // Looping through Materials
    materials.forEach(material => {
      // Checking if Material exists in game then adding a crushing recipe to it.
      if ( !Item.of('alltheores:raw_' + material).isEmpty() || !Item.of('alltheores:' + material + '_dust').isEmpty() ){
        event.recipes.thermal.pulverizer('2x alltheores:' + material + '_dust', 'alltheores:raw_' + material)     
      }
    })

})
