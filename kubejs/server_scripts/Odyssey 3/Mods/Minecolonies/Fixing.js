// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    
// Changing Build Tool recipe
event.remove({output:'structurize:sceptergold'})
event.shaped('structurize:sceptergold',
[
' A ',
'ASA',
' S '
],{
    A: 'minecraft:stick',
    S: 'minecraft:cobblestone'
})
})



