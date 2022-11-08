// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

  // Common Material
  event.recipes.botania.petal_apothecary('apotheosis:common_material', ['minecraft:netherite_ingot'])
  // Uncommon Material
  event.recipes.botania.mana_infusion('apotheosis:uncommon_material', 'apotheosis:common_material', 2000)
  // Rare Material
  event.recipes.botania.runic_altar('apotheosis:rare_material', ['apotheosis:uncommon_material','apotheosis:common_material', 'ars_nouveau:source_gem_block'], 5000)
  // Epic Material
  event.recipes.botania.terra_plate('apotheosis:epic_material', ["apotheosis:rare_material", "apotheosis:uncommon_material"], 50000)
  // Mythic Material
  event.recipes.botania.elven_trade('apotheosis:mythic_material', ['apotheosis:epic_material', 'kubejs:choombium_block'])
})

