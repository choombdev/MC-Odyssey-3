// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{
  // Scales from Essence
  event.shaped('3x mysticalagradditions:dragon_scale', [
    'SSS',
    'S S',
    '   '
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })
  event.shaped('3x tconstruct:dragon_scale', [
    'S  ',
    'S  ',
    'SSS'
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })
  event.shaped('3x quark:dragon_scale', [
    'S S',
    '   ',
    'SSS'
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })
  event.shaped('3x forbidden_arcanus:dragon_scale', [
    'SSS',
    'SS ',
    '   '
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })
  // Essence from Scales
  event.shapeless('5x mysticalagriculture:dragon_egg_essence', ['3x mysticalagradditions:dragon_scale'])
  event.shapeless('5x mysticalagriculture:dragon_egg_essence', ['3x tconstruct:dragon_scale'])
  event.shapeless('5x mysticalagriculture:dragon_egg_essence', ['3x quark:dragon_scale'])
  event.shapeless('5x mysticalagriculture:dragon_egg_essence', ['3x forbidden_arcanus:dragon_scale'])
})

