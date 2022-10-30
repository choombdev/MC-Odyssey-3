// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Adding Heat Sources
    event.recipes.exnihilosequentia.heat('minecraft:campfire', 3, {"lit": "true"})
    event.recipes.exnihilosequentia.heat('minecraft:soul_campfire', 5, {"lit": "true"})
    event.recipes.exnihilosequentia.heat('alltheores:uranium_block', 10)
    event.recipes.exnihilosequentia.heat('mekanism:superheating_element', 50)

})

