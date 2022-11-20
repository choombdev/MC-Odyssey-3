// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

    // Replacing all Cast Iron Ingots with ones from Big Cannons
    event.replaceInput({}, 'createdeco:cast_iron_ingot', 'create:cast_iron_ingot')
    event.replaceInput({}, 'createdeco:cast_iron_nugget', 'create:cast_iron_nugget')

    event.replaceOutput({}, 'createdeco:cast_iron_nugget', 'create:cast_iron_nugget')
    event.replaceOutput({}, 'createdeco:cast_iron_ingot', 'create:cast_iron_ingot')

    // Adding a recipe for the Create Deco sheet
    event.recipes.createPressing('createdeco:cast_iron_sheet', 'create:cast_iron_ingot')
})

