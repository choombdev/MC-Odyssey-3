// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// Making recipe easier
event.remove({output:'sophisticatedbackpacks:stack_upgrade_tier_4'})
event.shaped('sophisticatedbackpacks:stack_upgrade_tier_4',
 [
    'GNG',
    'NSN',
    'GNG'
 ],{
       G: 'minecraft:glass',
       N: 'minecraft:netherite_block',
       S: 'sophisticatedbackpacks:stack_upgrade_tier_3'

 })
})