// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {
// All The Ores Compatible
 let pieces  =[ 'lead', 'nickel', 'silver', 'tin', 'platinum', 'uranium', 'aluminum',  'zinc']
 pieces.forEach(piece =>{
    let orepiece = "exnihilosequentia:"+piece+'_pieces'
    event.remove({output: orepiece})
    event.remove({input: orepiece})
    event.shapeless("alltheores:raw_"+piece, [orepiece, orepiece, orepiece, orepiece])
})
// Vanilla
let minecraftpieces = ['iron', 'gold', 'copper']
minecraftpieces.forEach(piece =>{
    let orepiece = "exnihilosequentia:"+piece+'_pieces'
    event.remove({output: orepiece})
    event.remove({input: orepiece})
    event.shapeless("minecraft:raw_"+piece, [orepiece, orepiece, orepiece, orepiece])
})
// Osmium
event.remove({output: 'exnihilomekanism:osmium'})
event.remove({input: 'exnihilomekanism:osmium'})
event.shapeless("alltheores:raw_osmium", ['exnihilomekanism:osmium','exnihilomekanism:osmium','exnihilomekanism:osmium','exnihilomekanism:osmium'])
})

