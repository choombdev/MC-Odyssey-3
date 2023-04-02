// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
  // Fixing missing Tags 
  event.replaceInput({}, '#forge:ingots/aluminum_steel', ['alltheores:aluminum_ingot'])
  event.replaceInput({}, '#forge:ingots/bismuth', ['alltheores:lead_ingot'])
  event.replaceInput({}, '#forge:ingots/bismuth_steel', ['alltheores:steel_ingot'])
  event.replaceInput({}, '#forge:ingots/bismuth_brass', ['alltheores:brass_ingot'])
  event.replaceInput({}, '#forge:ingots/redstone_alloy', ['extendedcrafting:redstone_ingot'])
  event.replaceInput({}, '#forge:ingots/refined_iron', ['alltheores:steel_ingot'])
  event.replaceInput({}, '#forge:ingots/titanium', ['alltheores:platinum_ingot'])


  // Missing Obsidian Dust Recipes (and Tag)
  event.replaceInput({}, '#forge:dust/obsidian', 'mekanism:dust_obsidian')
  let obsidian = 'minecraft:obsidian'
  let obsidiandust = '4x mekanism:dust_obsidian' 
  event.recipes.createCrushing(obsidian, obsidiandust)
  event.recipes.thermal.pulverizer(obsidian, obsidiandust)
  event.recipes.mekanismCrushing(obsidian, obsidiandust)

  // Easy Quartz Recipe
  let rawquartz = 'byg:raw_quartz_block'
  let quartz = '4x minecraft:quartz' 
  event.recipes.createCrushing(quartz, rawquartz)
  event.recipes.immersiveengineeringCrusher(quartz, rawquartz)
  event.recipes.thermal.pulverizer(quartz, rawquartz)
  event.recipes.mekanismCrushing(quartz, rawquartz)

  // Quartizite to Quartz
  event.recipes.createCrushing(['minecraft:quartz', 'minecraft:sand'], 'byg:quartzite_sand')
  event.recipes.thermal.pulverizer(['minecraft:quartz', 'minecraft:sand'], 'byg:quartzite_sand')
  event.recipes.immersiveengineeringCrusher('minecraft:quartz', 'byg:quartzite_sand')
  event.recipes.mekanismCrushing('minecraft:quartz', 'byg:quartzite_sand')


    // Adding Missing Thermal Pulverizer Recipes
    var materials = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iridium']
    // Looping through Materials
    materials.forEach(material => {
      // Checking if Material exists in game then adding a crushing recipe to it.
      if ( !Item.of('alltheores:raw_' + material).isEmpty() || !Item.of('alltheores:' + material + '_dust').isEmpty() ){
        event.recipes.thermal.pulverizer('2x alltheores:' + material + '_dust', 'alltheores:raw_' + material)        
      }
    })
        // Adding Missing Thermal Crushing Recipes
        var thmaterials = ['signalum', 'enderium', 'lumium', 'electrum', 'invar', 'constantan', 'brass']
        // Looping through Materials
        thmaterials.forEach(material => {
          // Checking if Material exists in game then adding a crushing recipe to it.
          if ( !Item.of('alltheores:' + material + '_ingot').isEmpty() || !Item.of('alltheores:' + material + '_dust').isEmpty() ){
            event.recipes.mekanismCrushing('alltheores:' + material + '_dust', 'alltheores:' + material + '_ingot')        
          }
        })
// Removing any conflicting recipes
event.remove({id: 'alltheores:lumium_dust_from_alloy_blending'})
})
