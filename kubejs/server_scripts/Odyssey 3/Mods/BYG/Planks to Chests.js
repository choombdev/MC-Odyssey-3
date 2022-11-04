// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('tags.items', event => {
   event.add('forge:bygwood', ['byg:green_enchanted_planks', 'byg:holly_planks', 'byg:pine_planks', 'byg:embur_planks', 'byg:bulbis_planks', 'byg:cherry_planks', 'byg:cika_planks', 'byg:imparius_planks', 'byg:lament_planks', 'byg:mahogany_planks', 'byg:mangrove_planks', 'byg:maple_planks', 'byg:nightshade_planks', 'byg:redwood_planks', 'byg:skyris_planks', 'byg:zelkova_planks', 'byg:sythian_planks', 'byg:fir_planks', 'byg:ebony_planks', 'byg:blue_enchanted_planks', 'byg:witch_hazel_planks', 'byg:willow_planks', 'byg:palm_planks', 'byg:ether_planks', 'byg:baobab_planks', 'byg:aspen_planks'])
})

onEvent('recipes', event => {
   event.shaped('minecraft:chest', [
     'SSS',
     'S S',
     'SSS'
   ], {
     S: '#forge:bygwood'
   })
 })

