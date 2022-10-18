// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.


// Pre-Requisites to Extended Crafting

onEvent('recipes', event =>{
    
    // Crystalline Ingot
    event.remove({output:'extendedcrafting:crystaltine_ingot'})
    event.recipes.createMechanicalCrafting('extendedcrafting:crystaltine_ingot',
    [
        'SGGGGGS',
        'SGFXFGS',
        'SGGGGGS'
    ], {
        X: 'botania:gaia_head',
        F: 'twilightforest:fiery_ingot', 
        G: 'tinkers_reforged:gausum_ingot',
        S: 'botania:terrasteel_block'

    })
    // Ultimate Ingot
    event.recipes.createMechanicalCrafting('extendedcrafting:the_ultimate_ingot',
    [
        'ESDCBCDSE',
        'ESDCSCDSE',
        'ESDCBCDSE'
    ], {
        S: 'forbidden_arcanus:dark_nether_star_block',
        C: 'extendedcrafting:crystaltine_ingot',
        B: 'kubejs:choomburgert3',
        E:'extendedcrafting:ender_star',
        D: 'botania:dragonstone'
    })
    // Ancient Ingot
    event.recipes.createMechanicalCrafting('kubejs:ancientingot',
    [
        'UDIGDGIDU',
        'UIGGSGGIU',
        'UDIGDGIDU'
    ], {
        S:'extendedcrafting:ultimate_singularity',
        G:'gobber2:gobber2_ingot_end', 
        I:'mysticalagradditions:insanium_ingot', 
        D:'mysticalagradditions:dragon_egg_crux',
        U:'extendedcrafting:the_ultimate_ingot'

    })
})

