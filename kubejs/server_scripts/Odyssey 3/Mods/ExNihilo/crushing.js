// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

// Defining a Function
function crush(output,input){
   event.recipes.mekanismCrushing(output, input)
   event.recipes.thermal.pulverizer(output, input)
   event.recipes.createCrushing(output, input)
   event.recipes.immersiveengineeringCrusher(output, input)
}
// Adding the Recipes
crush('minecraft:stone', 'minecraft:cobblestone')
crush('minecraft:cobblestone', 'minecraft:gravel')
crush('minecraft:gravel', 'minecraft:sand')
crush('minecraft:sand', 'exnihilosequentia:dust')

crush('minecraft:end_stone', 'exnihilosequentia:crushed_end_stone')

crush('minecraft:netherrack', 'exnihilosequentia:crushed_netherrack')

crush('ae2:sky_stone_block', 'exnihiloae:crushed_skystone')
})

