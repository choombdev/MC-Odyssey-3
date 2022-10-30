// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Adding Recipe for the Goddess Statue
    event.shaped('paraglider:goddess_statue', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'alltheores:silver_ingot',
        B: 'mna:manaweaving_altar',
        C: 'cyclic:heart',
        D: 'minecraft:gold_block'
    })
})

