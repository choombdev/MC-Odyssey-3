// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
// kubejs:magic_agglomeratio
onEvent('recipes', event =>{
  // Adding recipe to the Agglomeratio
  event.shapeless('kubejs:magic_agglomeratio', ['mna:vinteum_dust', 'forbidden_arcanus:arcane_crystal', 'ars_nouveau:source_gem', 'bloodmagic:blankrune', 'minecraft:gold_ingot'])
  // Adding Recipes to the seeds
  event.shaped("3x mna:vinteum_dust",[
      '   ',
      'A  ',
      'AA '
  ],{
      A: 'mysticalagriculture:magical_essence'
  })

  event.shaped("3x forbidden_arcanus:arcane_crystal",[
    ' AA',
    '  A',
    '   '
],{
    A: 'mysticalagriculture:magical_essence'
})

event.shaped("3x ars_nouveau:source_gem",[
  'AAA',
  '   ',
  '   '
],{
  A: 'mysticalagriculture:magical_essence'
})

event.shaped("6x bloodmagic:blankrune",[
  '   ',
  '   ',
  'AAA'
],{
  A: 'mysticalagriculture:magical_essence'
})
})


