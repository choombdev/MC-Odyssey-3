// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('block.registry', event => {
  event.create('choombium_block').material('iron').hardness(5).displayName('Choombium Block')
})

onEvent('item.registry', event => {
  event.create('choombium_ingot').displayName('Choombium Ingot')

  event.create('choombium_pickaxe',"pickaxe").displayName('Choombium Pickaxe').tier('choombium_item')
  event.create('choombium_axe',"axe").displayName('Choombium Axe').tier('choombium_item')
  event.create('choombium_shovel',"shovel").displayName('Choombium Shovel').tier('choombium_item')
  event.create('choombium_sword',"sword").displayName('Choombium Sword').tier('choombium_item')

  // Choombium Armor
  event.create('choombium_helmet',"helmet").displayName('Choombium Helmet').tier('choombium')
  event.create('choombium_chestplate',"chestplate").displayName('Choombium Chestplate').tier('choombium')
  event.create('choombium_leggings',"leggings").displayName('Choombium Leggings').tier('choombium')
  event.create('choombium_boots',"boots").displayName('Choombium Boots').tier('choombium')

})

// Registry of all the choombium tools tiers
onEvent('item.registry.tool_tiers', event => {
  event.add('choombium_item', tier => {
    tier.uses = 5000
    tier.speed = 12
    tier.attackDamageBonus = 6
    tier.level = 5
    tier.enchantmentValue = 30
    tier.repairIngredient = 'kubejs:choombium_ingot'
  })
})

onEvent('item.registry.armor_tiers', event => {
  event.add('choombium', tier => {
    tier.durabilityMultiplier = 150
    tier.slotProtections = [8, 12, 18, 8]
    tier.enchantmentValue = 30
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = 'kubejs:choombium_ingot'
    tier.toughness = 6.0
    tier.knockbackResistance = 0.5
  })
})