// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// Removing
let materials = ['silver', 'aluminum', 'electrum', 'steel', 'uranium', 'nickel', 'lead', 'constantan']
let mcmaterials = ['iron', 'gold', 'copper']

materials.forEach(material => {
  event.remove({id: 'immersiveengineering:crafting/plate_'+material+'_hammering'})
  event.shapeless('alltheores:'+material+'_plate', [Item.of('immersiveengineering:hammer').ignoreNBT(),'alltheores:'+material+'_ingot','alltheores:'+material+'_ingot']).damageIngredient(Item.of('immersiveengineering:hammer'))
})
mcmaterials.forEach(material => {
  event.remove({id: 'immersiveengineering:crafting/plate_'+material+'_hammering'})
  event.shapeless('alltheores:'+material+'_plate', [Item.of('immersiveengineering:hammer').ignoreNBT(),'minecraft:'+material+'_ingot','minecraft:'+material+'_ingot']).damageIngredient(Item.of('immersiveengineering:hammer'))
})

// Adding missing Diamond Plate Processing recipe
event.recipes.immersiveengineeringMetalPress('alltheores:diamond_plate', 'minecraft:diamond', 'immersiveengineering:mold_plate')
event.recipes.thermal.press('alltheores:diamond_plate', 'minecraft:diamond')
event.recipes.createPressing('alltheores:diamond_plate', 'minecraft:diamond')

// Create Iron Sheet needs to be craftable
event.shapeless('create:iron_sheet', 'alltheores:iron_plate')
})
