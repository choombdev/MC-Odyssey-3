// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// Removing
let materials = ['silver', 'aluminum', 'electrum', 'steel', 'uranium', 'nickel', 'lead', 'constantan']
let mcmaterials = ['iron', 'gold', 'copper']

materials.forEach(material => {
  event.remove({id: 'immersiveengineering:crafting/plate_'+material+'_hammering'})
  event.shapeless('alltheores:'+material+'_plate', ['immersiveengineering:hammer','alltheores:'+material+'_ingot','alltheores:'+material+'_ingot'])
})
mcmaterials.forEach(material => {
  event.remove({id: 'immersiveengineering:crafting/plate_'+material+'_hammering'})
  event.shapeless('alltheores:'+material+'_plate', ['immersiveengineering:hammer','minecraft:'+material+'_ingot','minecraft:'+material+'_ingot'])
})
})
