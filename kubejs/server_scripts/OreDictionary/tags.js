// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

onEvent('tags.blocks', e => {
    e.add('minecraft:climbable', ['minecraft:chain'])
    e.add('minecraft:mineable/axe', ['integrateddynamics:menril_log_stripped', 'integrateddynamics:menril_wood_stripped'])
    e.add('minecraft:logs', ['integrateddynamics:menril_log_stripped', 'integrateddynamics:menril_wood_stripped'])
  })
  
  onEvent('tags.items', e => {
    e.add('forge:ores/quartz', ['byg:blue_nether_quartz_ore', 'byg:brimstone_nether_quartz_ore'])
    e.add('forge:ores/gold', ['byg:blue_nether_gold_ore', 'byg:brimstone_nether_gold_ore'])
    e.add('forge:ores/inferium',['mysticalagradditions:nether_inferium_ore','mysticalagradditions:end_inferium_ore'])
    e.add('forge:raw_ores/cobalt', 'tconstruct:raw_cobalt');
    e.add('forge:dusts/netherite', 'alltheores:netherite_dust');
  })
  