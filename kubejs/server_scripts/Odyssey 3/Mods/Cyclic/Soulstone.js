// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// Removing and Adding a new Soulstone Recipe
event.remove({id:"cyclic:soulstone"})
event.shaped('cyclic:soulstone', [
    'TTT',
    'CXC',
    'TTT'
    ],{
     C: 'extendedcrafting:crystaltine_ingot',
     T: 'darkutils:charm_warding',
     X: 'reliquary:witherless_rose'
    }) 

})

