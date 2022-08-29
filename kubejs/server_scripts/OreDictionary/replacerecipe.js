// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

onEvent('recipes', event =>{

 // Registering List of Materials
 materials = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iridium']

 // Looping through Materials
 for (material in materials) { 
    // Forge Dictionaries
    event.replaceOutput({}, '#forge:ingots/' + material,  'alltheores:'+ material + '_ingot')
    event.replaceOutput({}, '#forge:ores/' + material,  'alltheores:'+ material + '_ore')
    event.replaceOutput({}, '#forge:gears/' + material,  'alltheores:'+ material + '_gear')
    event.replaceOutput({}, '#forge:shards/' + material,  'alltheores:'+ material + '_shard')
    event.replaceOutput({}, '#forge:crystals/' + material,  'alltheores:'+ material + '_crystal')
    event.replaceOutput({}, '#forge:clumps/' + material,  'alltheores:'+ material + '_clump')
    event.replaceOutput({}, '#forge:dirty_dusts/' + material,  'alltheores:dirty_'+ material + '_dust')
    event.replaceOutput({}, '#forge:dusts/' + material,  'alltheores:'+ material + '_dust')
    event.replaceOutput({}, '#forge:plates/' + material,  'alltheores:'+ material + '_plate')
    event.replaceOutput({}, '#forge:nuggets/' + material,  'alltheores:'+ material + '_nugget')
    event.replaceOutput({}, '#forge:storage_blocks/' + material,  'alltheores:'+ material + '_block')
    event.replaceOutput({}, '#forge:raw_ores/' + material,  'alltheores:raw_'+ material)
    event.replaceOutput({}, '#forge:raw_materials/' + material,  'alltheores:raw_'+ material)

    // Rogue Mods
    event.replaceOutput({}, 'exnihilosequentia:' + material + '_ingot',  'alltheores:'+ material + '_ingot')


 }
})