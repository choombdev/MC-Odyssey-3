// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('item.registry.armor_tiers', event => {
  event.add('ancientarmor', tier => {
    tier.slotProtections = [500, 500, 500, 500]
    tier.equipSound = 'minecraft:item.armor.netherite'
    tier.toughness = 100.0
    tier.knockbackResistance = 10.0
    tier.enchantmentValue = 50
  })
})


onEvent('item.registry', event => {
  event.create('ancient_helmet', 'helmet').displayName('Ancient Helmet').glow(true).tooltip("A set of Armor crafted from an Ancient Ingot from a Meteor dropped ages ago, touching it's tip sends a shiver through your spine").tier('ancientarmor')
  event.create('ancient_chestplate', 'chestplate').displayName('Ancient Chestplate').glow(true).tooltip("A set of Armor crafted from an Ancient Ingot from a Meteor dropped ages ago, touching it's tip sends a shiver through your spine").tier('ancientarmor')
  event.create('ancient_leggings', 'leggings').displayName('Ancient Leggings').glow(true).tooltip("A set of Armor crafted from an Ancient Ingot from a Meteor dropped ages ago, touching it's tip sends a shiver through your spine").tier('ancientarmor')
  event.create('ancient_boots','boots').displayName('Ancient Boots').glow(true).tooltip("A set of Armor crafted from an Ancient Ingot from a Meteor dropped ages ago, touching it's tip sends a shiver through your spine").tier('ancientarmor')

})
