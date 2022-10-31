// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.


onEvent('recipes', event =>{
  // Particle Accelerator
  event.shaped('kubejs:particle_accelerator', [
    'SAS',
    'BXC',
    'SDS'
  ], {
    X: 'nameless_trinkets:speed_force',
    A: 'mysticalagriculture:speed_iii_augment',
    B: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strong_swiftness"}'),
    C: Item.of('tconstruct:potion_bucket', '{Potion:"minecraft:strong_swiftness"}'),
    D: Item.of('botania:blood_pendant', '{brewKey:"botania:speed"}'),
    S: 'mysticalagradditions:insanium_apple'
  })

  // Necklace of Shields
  event.shaped('kubejs:necklaceofshields', [
    'CCC',
    'C C',
    ' X '
  ], {
    C: 'cyclic:netherite_chain',
    X: 'minecraft:shield'
  })
  // Iron Ring
  event.shaped('kubejs:ironring', [
    ' X ',
    'XCX',
    ' X '
  ], {
    X: 'minecraft:iron_ingot',
    C: 'minecraft:iron_chestplate'
  })
  // Upgraded Iron Ring
  event.shaped('kubejs:upgradedironring', [
    ' X ',
    'XCX',
    ' X '
  ], {
    X: 'alltheores:steel_ingot',
    C: 'kubejs:ironring'
  })
  // Sacrifice Ring
  event.shaped('kubejs:sacrifice_ring', [
    ' XX',
    'DCD',
    'XX '
  ], {
    X: 'minecraft:golden_apple',
    D: 'bloodmagic:daggerofsacrifice',
    C: 'kubejs:upgradedironring'
  })
  // One Ring
  event.shaped('kubejs:one_ring', [
    ' X ',
    'XCX',
    ' X '
  ], {
    X: 'mekanism:ingot_refined_obsidian',
    C: 'kubejs:upgradedironring'
  })

  // Dwarf Charm
  event.shaped('kubejs:dwarfcharm', [
    'XPX',
    'XCX',
    'XBX'
  ], {
    C: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"cyclic:strong_haste"}'),
    P: 'minecraft:netherite_pickaxe',
    B: 'mekanismtools:bronze_boots',
    X: 'botania:terrasteel_ingot'
  })

  // Jar of Floating
  event.shaped('kubejs:jaroffloating', [
    'XXX',
    'XCX',
    'XXX'
  ], {
    C: 'supplementaries:jar',
    X: 'minecraft:shulker_box'
  })

  // Flag of Warcry
  event.shaped('kubejs:flagofwarcry', [
    'XAX',
    'BPD',
    'XCX'
  ], {
    C: 'minecraft:white_banner',
    X: 'minecraft:netherite_sword',
    A: 'botania:lens_time',
    B: 'cyclic:heart',
    D: 'paraglider:heart_container',
    P: 'artifacts:crystal_heart'
  })

  // Avalon
  event.shaped('kubejs:avalon', [
    '  P',
    ' D ',
    'X  '
  ], {
    P: 'minecraft:netherite_ingot',
    D: 'kubejs:flagofwarcry',
    X: 'redstone_arsenal:obsidian_rod'

  })

  // Winged Helmet
  event.shaped('kubejs:wingedhelmet', [
    'XXX',
    'XPX',
    'X X'
  ], {
    X: 'minecraft:diamond',
    P: 'minecraft:elytra'
  })

  // Mermaid Soul
  event.shaped('kubejs:mermaidsoul', [
    'XDX',
    'XCX',
    'XDX'
  ], {
    X: 'minecraft:prismarine_crystals',
    C: 'minecraft:conduit',
    D: '#forge:fishes'
  })

  // Last Chance
  event.shaped('kubejs:lastchance', [
    'X X',
    'XCX',
    'X X'
  ], {
    X: 'minecraft:totem_of_undying',
    C: 'nameless_trinkets:ultimate_dust'
  })
})
