// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Adding Recipe for the Infinite Pipe
    event.shaped('pipez:infinity_upgrade',
    [
        'BGB',
        'GSG',
        'BGB'
    ], {
        S: 'minecraft:nether_star', 
        B: 'botania:elementium_ingot',
        G: 'gobber2:gobber2_glob'
})
})

