// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
//Ether Gas
event.recipes.createMixing(Fluid.of("industrialforegoing:ether_gas",100), [
  'forbidden_arcanus:dark_nether_star',
  Fluid.of("mekanism:steam", 1500)
]).superheated()
})

