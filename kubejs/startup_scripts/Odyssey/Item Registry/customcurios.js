// This script was made by Choomb for Odyssey 3, reusing it without explicit permission is not allowed.

let Vector3f = java("com.mojang.math.Vector3f");

// Particle Accelerator
onEvent("item.registry", event => {
    event.create("particle_accelerator", "curios:trinket")
        .displayName("Particle Accelerator")
        .addAttribute("generic.movement_speed", "6d0dd9f9-a021-4832-8193-dd7f4c535c26", 1, "addition")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("Might be dangerous for your heart but it increases your speed greatly. (x4 Speed but constantly poisoned)").darkRed())
        .onEquipped((stack, entity) => {
         })
        .onWornTick((stack, entity) => { 
            entity.potionEffects.add('minecraft:poison',5,1)
        })
        .canEquip((stack, entity) => true)
        .slot("charm")
        .render(context => {
            let { poseStack, entity, stack, light, buffers } = context;
            CuriosRenderer.translateIfSneaking(poseStack, entity)
            CuriosRenderer.rotateIfSneaking(poseStack, entity)
            poseStack.scale(.35, .35, .35)
            poseStack.translate(0.0, 0.5, -0.4);
            poseStack.mulPose(Vector3f.XP.rotationDegrees(180))
            Client.getMinecraft().getItemRenderer()
                .renderStatic(
                    stack, "none",
                    light, (0 | 10 << 16),
                    poseStack, buffers, 0
                )})
})

// Necklace of Shields
onEvent("item.registry", event => {
    event.create("necklaceofshields", "curios:trinket")
        .displayName("Necklace of Shields")
        .addAttribute("generic.armor", "52773341-67f4-43b0-bce3-352477846e4d", 4, "addition")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("This Necklace improves your protection (+4 Armor)").darkRed())
        .onEquipped((stack, entity) => { })
        .onWornTick((stack, entity) => { })
        .canEquip((stack, entity) => true)
        .slot("necklace")
})

// Ring of Sacrifice
onEvent("item.registry", event => {
    event.create("sacrifice_ring", "curios:trinket")
        .displayName("Ring of Sacrifice")
        .addAttribute("generic.armor", "52773341-67f4-43b0-bce3-352477846e4d", 8, "addition")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("This ring ensures your protection, at the cost of your health. (-10 HP, +8 Armor)").darkRed())
        .onEquipped((stack, entity) => { 
            entity.maxHealth = entity.maxHealth - 10
        })
        .onWornTick((stack, entity) => { })
        .canEquip((stack, entity) => true)
        .slot("ring")
        .onUnequipped((stack, entity) => {
            entity.maxHealth = entity.maxHealth + 10
        })
})


// Ring of Invisibility
onEvent("item.registry", event => {
    event.create("one_ring", "curios:trinket")
        .displayName("Ring of Invisibility")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("Turns you invisible, simple as that, The inscription lights up when close to fire.").darkRed())
        .onEquipped((stack, entity) => { })
        .onWornTick((stack, entity) => { 
           entity.potionEffects.add('minecraft:invisibility',10,1)
        })
        .canEquip((stack, entity) => true)
        .slot("ring")
})

// Iron Ring
onEvent("item.registry", event => {
    event.create("ironring", "curios:trinket")
        .displayName("Iron Ring")
        .addAttribute("generic.armor", "a0406743-a406-4400-b64f-e23a762b72da", 2, "addition")
        .addAttribute("generic.armor_toughness", "a0406743-a406-4400-b64f-e23a762b72da", 1, "addition")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("Basic Protection (+2 Armor, +1 Toughness)").darkRed())
        .onEquipped((stack, entity) => { })
        .onWornTick((stack, entity) => { })
        .canEquip((stack, entity) => true)
        .slot("ring")
})
// Upgraded Iron Ring
onEvent("item.registry", event => {
    event.create("upgradedironring", "curios:trinket")
        .displayName("Upgraded Iron Ring")
        .addAttribute("generic.armor", "33c0cf6e-ec7d-4600-9aaa-8817ada388de", 5, "addition")
        .addAttribute("generic.armor_toughness", "33c0cf6e-ec7d-4600-9aaa-8817ada388de", 3, "addition")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("Upgraded Protection (+5 Armor, +3 Toughness)").darkRed())
        .onEquipped((stack, entity) => { })
        .onWornTick((stack, entity) => { })
        .canEquip((stack, entity) => true)
        .slot("ring")
})

// Dwarf Charm
onEvent("item.registry", event => {
    event.create("dwarfcharm", "curios:trinket")
        .displayName("Dwarf Charm")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("Slows your movement down but increases your mining speed drastically. (-75% speed, Haste 2)").darkRed())
        .onEquipped((stack, entity) => { 
            entity.movementSpeed = entity.movementSpeed * 0.25
        })
        .onWornTick((stack, entity) => { 
            entity.potionEffects.add('minecraft:haste',10,2)
        })
        .canEquip((stack, entity) => true)
        .onUnequipped((stack, entity) => {
            entity.movementSpeed = entity.movementSpeed * 4
        })
        .slot("charm")
})

// Jar of Floating
onEvent("item.registry", event => {
    event.create("jaroffloating", "curios:trinket")
        .displayName("Jar of Floating")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("As long as you hold onto this, you'll keep floating. (Constant Levitation)").darkRed())
        .onEquipped((stack, entity) => { 
        })
        .onWornTick((stack, entity) => { 
            entity.potionEffects.add('minecraft:levitation',10,1)
        })
        .canEquip((stack, entity) => true)
        .slot("charm")
})

// Flag of Warcry
onEvent("item.registry", event => {
    event.create("flagofwarcry", "curios:trinket")
        .displayName("Flag of Warcry")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("Charge into battle! (+5 HP, Resistance)").darkRed())
        .onEquipped((stack, entity) => { 
            entity.maxHealth = entity.maxHealth + 5
        })
        .onWornTick((stack, entity) => { 
            entity.potionEffects.add('minecraft:resistance',10,2)
        })
        .canEquip((stack, entity) => true)
        .onUnequipped((stack, entity) => {
            entity.maxHealth = entity.maxHealth - 5
        })
        .slot("back")
})

// Avalon Scabbard
onEvent("item.registry", event => {
    event.create("avalon", "curios:trinket")
        .displayName("Avalon Scabbard")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("Return to King Arthur after you're done (+7 HP, Regeneration)").darkRed())
        .onEquipped((stack, entity) => { 
            entity.maxHealth = entity.maxHealth + 7
        })
        .onWornTick((stack, entity) => { 
            entity.potionEffects.add('minecraft:regeneration',20,3)
        })
        .canEquip((stack, entity) => true)
        .onUnequipped((stack, entity) => {
            entity.maxHealth = entity.maxHealth - 7
        })
        .slot("charm")
})

// Winged Helmet
onEvent("item.registry", event => {
    event.create("wingedhelmet", "curios:trinket")
        .displayName("Winged Helmet")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("Grants you slow faling.").darkRed())
        .onEquipped((stack, entity) => { 
        })
        .onWornTick((stack, entity) => { 
            entity.potionEffects.add('minecraft:slow_falling',3,1)

        })
        .canEquip((stack, entity) => true)
        .slot("head")
})

// Mermaid's Soul
onEvent("item.registry", event => {
    event.create("mermaidsoul", "curios:trinket")
        .displayName("Mermaid's Soul")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("Swim like a Mermaid! (Adds Water Breathing, Conduit Power and Dolphins Grace effects)").darkRed())
        .onEquipped((stack, entity) => { 
        })
        .onWornTick((stack, entity) => { 
            entity.potionEffects.add('minecraft:water_breathing',3,1)
            entity.potionEffects.add('minecraft:conduit_power',3,1)
            entity.potionEffects.add('minecraft:dolphins_grace',3,1)

        })
        .canEquip((stack, entity) => true)
        .slot("back")
})


// Last Chance
onEvent("item.registry", event => {
    event.create("lastchance", "curios:trinket")
        .displayName("Last Chance")
        .canAttributeApply((item, entity) => true)
        .tooltip(Component.translate("Gives you temporary protection if your health falls below half (Resistance V if below half health)").darkRed())
        .onEquipped((stack, entity) => { 
        })
        .onWornTick((stack, entity) => { 
            if (entity.health < (entity.maxHealth / 2)){
                entity.potionEffects.add('minecraft:resistance',10,5)
            }


        })
        .canEquip((stack, entity) => true)
        .slot("back")
})


