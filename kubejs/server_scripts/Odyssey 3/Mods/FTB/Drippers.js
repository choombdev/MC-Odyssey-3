// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    
// Stone to Netherrack
 event.recipes.ftbdripperDrip({
    inputBlock: 'minecraft:stone',
    outputBlock: 'minecraft:netherrack',
    chance: 1.0,
    fluid: 'minecraft:lava'
})
// Cobblestone to Gravel
 event.recipes.ftbdripperDrip({
    inputBlock: 'minecraft:cobblestone',
    outputBlock: 'minecraft:gravel',
    chance: 1.0,
    fluid: 'minecraft:water'
})
// Gravel to Sand
event.recipes.ftbdripperDrip({
    inputBlock: 'minecraft:gravel',
    outputBlock: 'minecraft:sand',
    chance: 1.0,
    fluid: 'minecraft:lava'
})
// Sand to Dust
event.recipes.ftbdripperDrip({
    inputBlock: 'minecraft:sand',
    outputBlock: 'exnihilosequentia:dust',
    chance: 1.0,
    fluid: 'minecraft:lava'
})

})

