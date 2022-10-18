// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

    event.remove({id:'quarryplus:workbench'})
    event.shaped('quarryplus:workbench', [
        'DBD',
        'ALA',
        'DBD'
      ], {
        D: 'minecraft:diamond_block',
        B: 'alltheores:brass_ingot',
        A: 'create:andesite_alloy',
        L: 'alltheores:lead_gear'
      })
    
    })
    