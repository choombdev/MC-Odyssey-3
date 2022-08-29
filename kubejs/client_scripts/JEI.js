// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

onEvent('jei.remove.categories', event =>{
	// Removing Twilight Forest's Uncrafting Recipes Category.
	event.remove('twilightforest:uncrafting')
})

onEvent('jei.hide.items', event => {

	// Overpowered Items
		// Alkashetry Tome
	event.hide('reliquary:alkahestry_tome')

	// Uncraftables / Useless
		// AE2 Facades
	event.hide(Item.of('appliedenergistics2:facade').ignoreNBT())
		// Full TCON Tools
	event.hide(Item.of('#tconstruct:modifiable').ignoreNBT())
	  	// Mekanism Tanks
	event.hide(Item.of('mekanism:creative_chemical_tank').ignoreNBT())
	event.hide(Item.of('mekanism:creative_fluid_tank').ignoreNBT())
	  	// Mob Charm Fragment
	event.hide(Item.of('xreliquary:mob_charm_fragment').ignoreNBT())
	  	// Spawn Eggs
	event.hide('/_spawn_egg$/')

	// Materials
	materials = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iridium']

	materials.forEach((material) => {
		RemoveItems.push(
			'occultism:' + material + '_ingot',
			'occultism:' + material + '_ore',
			'occultism:' + material + '_dust',
			'occultism:' + material + '_nugget',
			'occultism:' + material + '_block',
			'immersiveengineering:ingot_' + material,
			'immersiveengineering:dust_' + material,
			'immersiveengineering:nugget_' + material,
			'immersiveengineering:stick_' + material,
			'immersiveengineering:raw_' + material,
			'mekanism:nugget_' + material,
			'mekanism:dust_' + material,
			'mekanism:ingot_' + material,
			'mekanism:raw_' + material,
			'thermal:' + material + '_block',
			'thermal:' + material + '_ingot',
			'thermal:raw' + material + '_block',
			'tinkers_reforged:' + material +  '_block',
			'tinkers_reforged:' + material +  '_ingot',
			'tinkers_reforged:' + material +  '_nugget',
			'tinkers_reforged:' + material +  '_dust',
			'create:' + material +  '_ingot',
			'exnihilosequentia:' + material + '_ingot'
		)});
	
		  
	  RemoveItems.forEach((item) => {
		if (!Item.of(item).isEmpty()) {
		  event.hide(item)}});
	});

	// Re-Adding Basic Items
	onEvent('jei.add.items', event => {
		event.add(Item.of('mekanism:creative_chemical_tank'))
		event.add(Item.of('mekanism:creative_fluid_tank'))
	})