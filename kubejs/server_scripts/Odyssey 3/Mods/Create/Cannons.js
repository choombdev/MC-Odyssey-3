// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Adding Crafting Wand Recipe
    event.shaped('createbigcannons:cannon_crafting_wand', [
        'SIS',
        'ICI',
        ' IS'
    ], {
        S:'alltheores:steel_ingot',
        I: 'supplementaries:clock_block',
        C: 'constructionwand:infinity_wand'

})
})

