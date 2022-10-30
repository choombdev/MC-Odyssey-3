// This script was made by choombdev for Odyssey 3
// reusing it without explicit permission is not allowed.

onEvent('recipes', event =>{
    // Ancient Ingot Block
    event.shaped('kubejs:ancientblock',[
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:ancientingot'
    })
    // Ancient Ingot
    event.shapeless('9x kubejs:ancientingot', ['kubejs:ancientblock'])

    // Ancient Armor
    event.shaped('kubejs:ancient_helmet', [
        'AAA',
        'A A'
    ], {
        A: 'kubejs:ancientingot'
    })
    event.shaped('kubejs:ancient_chestplate', [
        'A A',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:ancientingot'
    })
    event.shaped('kubejs:ancient_leggings', [
        'AAA',
        'A A',
        'A A'
    ], {
        A: 'kubejs:ancientingot'
    })
    event.shaped('kubejs:ancient_boots', [
        'A A',
        'A A'
    ], {
        A: 'kubejs:ancientingot'
    })

    // Ancient Arrow
    event.shaped('kubejs:ancientarrow', [
        'A',
        'B',
        'C'
    ], {
        A: 'kubejs:ancientingot',
        B: 'minecraft:stick',
        C: 'minecraft:flint'
    })
})

// Creative Abilities

// Armor

onEvent('player.tick', event => {
    if (event.player.getTicksExisted()%20==0){
    
        if (event.player.headArmorItem == 'kubejs:ancient_helmet') {
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:saturation 30 10 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:night_vision 30 10 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:water_breathing 30 10 true`)
        }

        if (event.player.chestArmorItem == 'kubejs:ancient_chestplate') {
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:resistance 30 10 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:fire_resistance 30 10 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:strength 30 10 true`)
        }
    
        if (event.player.legsArmorItem == 'kubejs:ancient_leggings') {
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:absorption 30 10 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:speed 30 3 true`)
        }
    
        if (event.player.feetArmorItem == 'kubejs:ancient_boots') {
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:jump_boost 30 3 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:conduit_power 30 13 true`)
        }
}
})

// Arrow - Right Click Feature

onEvent("item.right_click", (event) => {
    if (event.item.id == 'kubejs:ancientarrow') {
     event.player.potionEffects.add("minecraft:strength", 600,10);
     event.player.potionEffects.add("minecraft:speed", 600,5);
     event.player.potionEffects.add("minecraft:resistance", 600,10);
     event.player.potionEffects.add("minecraft:haste", 600,10);


      event.player.tell(`You feel a surge of energy go through your body, the arrow has accepted you.`);
      event.player.addItemCooldown(event.item.id, 6000);
    }
});


