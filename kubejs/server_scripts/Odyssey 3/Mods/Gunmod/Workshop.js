// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
 // Re-balancing CGM's workbench
 event.remove({output: "cgm:workbench"})
 event.shaped('cgm:workbench', [
    'GPG',
    'EAE',
    'E E'
 ],{
    A: 'tconstruct:tinkers_anvil',
    E: 'alltheores:enderium_ingot',
    G: 'alltheores:steel_gear',
    P: 'alltheores:signalum_plate'
 })
})

