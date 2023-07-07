// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

onEvent('jei.hide.items', event => {
	// Overpowered Items
		// Alkashetry Tome
	event.hide('reliquary:alkahestry_tome')
		// Uncrafting Table
	event.hide('twilightforest:uncrafting_table')
	event.hide('cyclic:uncrafter')
	
	// Uncraftables / Useless
		// Coins
	event.hide('createdeco:copper_coin')
	event.hide('createdeco:copper_coinstack')

	event.hide('createdeco:zinc_coin')
	event.hide('createdeco:zinc_coinstack')

	event.hide('createdeco:cast_iron_coin')
	event.hide('createdeco:cast_iron_coinstack')

	event.hide('createdeco:netherite_coin')
	event.hide('createdeco:netherite_coinstack')

	event.hide('createdeco:gold_coin')
	event.hide('createdeco:gold_coinstack')

	event.hide('createdeco:brass_coin')
	event.hide('createdeco:brass_coinstack')

		// Spawn Eggs
	event.hide('/_spawn_egg$/')
		// AE2 Facades
	event.hide(Item.of('ae2:facade').ignoreNBT())
	event.hide(/^ae2:facade$/)
		// Tinker's Construct 
	event.hide('#tconstruct:modifiable')
	event.hide(Item.of('tconstruct:potion_bucket').ignoreNBT())

	  	// Mekanism Tanks
	event.hide(Item.of('mekanism:creative_chemical_tank').ignoreNBT())
	event.hide(Item.of('mekanism:creative_fluid_tank').ignoreNBT())

		// Rainbow Furnace
	event.hide('ironfurnaces:million_furnace')
	event.hide('ironfurnaces:rainbow_plating')
	event.hide('ironfurnaces:rainbow_core')
	   // Bamboo Spiked Tips
	event.hide('supplementaries:bamboo_spikes_tipped')

	   // Reliquary Magazines
	event.hide(Item.of('reliquary:neutral_magazine').ignoreNBT())
	event.hide(Item.of('reliquary:neutral_bullet').ignoreNBT())

	// Materials
	var materialnames = ['aluminum', 'lead', 'netherite', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iridium', 'steel', 'invar', 'electrum', 'bronze', 'enderium', 'lumium', 'signalum', 'constantan', 'brass', 'sapphire']
	const RemoveItems = []
	materialnames.forEach((material) => {
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
// Colored Blocks
			const colors = [
				'cyan',
				'purple',
				'blue',
				'brown',
				'green',
				'red',
				'black',
				'white',
				'orange',
				'magenta',
				'light_blue',
				'yellow',
				'lime',
				'pink',
				'gray',
				'light_gray'];

		colors.forEach((color) => {
			RemoveItems.push(
				'refinedstorage:' + color + '_cable',
				'refinedstorage:' + color + '_grid',
				'refinedstorage:' + color + '_crafting_grid',
				'refinedstorage:' + color + '_crafting_monitor',
				'refinedstorage:' + color + '_crafter_manager',
				'refinedstorage:' + color + '_disk_manipulator',
				'refinedstorage:' + color + '_crafter',
				'refinedstorage:' + color + '_pattern_grid',
				'refinedstorage:' + color + '_fluid_grid',
				'refinedstorage:' + color + '_crafting_grid',
				'refinedstorage:' + color + '_network_receiver',
				'refinedstorage:' + color + '_network_transmitter',
				'refinedstorage:' + color + '_relay',
				'refinedstorage:' + color + '_wireless_transmitter',
				'refinedstorage:' + color + '_detector',
				'refinedstorage:' + color + '_security_manager',
				'refinedstorage:' + color + '_controller',
				'refinedstorage:' + color + '_creative_controller'
			)});
	
// Removing all items in the RemoteItems list.
 	RemoveItems.forEach((item) => {
		if (!Item.of(item).isEmpty()) {
		  event.hide(item);
		}})

	});

	// Re-Adding Basic Items
	onEvent('jei.add.items', event => {
		event.add(Item.of('mekanism:creative_chemical_tank'))
		event.add(Item.of('mekanism:creative_fluid_tank'))
		// Spawn Eggs
		event.add('minecraft:bat_spawn_egg')
		event.add('minecraft:turtle_spawn_egg')
		event.add('minecraft:blaze_spawn_egg')
		event.add('minecraft:chicken_spawn_egg')
		event.add('minecraft:cow_spawn_egg')
		event.add('minecraft:creeper_spawn_egg')
		event.add('minecraft:goat_spawn_egg')
		event.add('minecraft:horse_spawn_egg')
		event.add('minecraft:mooshroom_spawn_egg')
		event.add('minecraft:piglin_spawn_egg')
		event.add('minecraft:pig_spawn_egg')
		event.add('minecraft:sheep_spawn_egg')
		event.add('minecraft:skeleton_spawn_egg')
		event.add('minecraft:slime_spawn_egg')
		event.add('minecraft:spider_spawn_egg')
		event.add('minecraft:wither_skeleton_spawn_egg')
		event.add('minecraft:zombie_spawn_egg')
		event.add('minecraft:witch_spawn_egg')

		// Sulfur
		event.add('bloodmagic:sulfur')
		event.add('mekanism:dust_sulfur')

		// Create Iron Plate
		event.add('create:iron_sheet')


	})

	// Removing Categories from jei
onEvent('jei.remove.categories', event => {
	// Removing Twilight Forest's Uncrafting Recipes Category.
		event.remove('twilightforest:uncrafting')
	// Create
		event.remove('create:automatic_shaped')
		event.remove('create:automatic_shapeless')
		event.remove('create:automatic_packing')
    // Alkashetry Tome
    	event.remove('reliquary:alkahestry_crafting')
    	event.remove('reliquary:alkahestry_charging')
	})