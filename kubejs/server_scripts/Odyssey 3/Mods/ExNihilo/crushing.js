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
crush('minecraft:cobblestone', 'minecraft:stone')
crush('minecraft:gravel', 'minecraft:cobblestone')
crush('minecraft:sand', 'minecraft:gravel')
crush('exnihilosequentia:dust','minecraft:sand')

crush('exnihilosequentia:crushed_end_stone', 'minecraft:end_stone')

crush('exnihilosequentia:crushed_netherrack','minecraft:netherrack')

crush('exnihiloae:crushed_skystone','ae2:sky_stone_block')
})

