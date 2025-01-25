ServerEvents.tags('item', event => {
    event.add('c:ingots/infinity', 'kubejs:infinity_alloy')
    event.add('c:ingots', 'kubejs:infinity_alloy')
    event.add('c:storage_blocks/antimatter', 'kubejs:antimatter_block')
    event.add('c:storage_blocks', 'kubejs:antimatter_block')

    event.add('c:ingots/plutonium', 'mekanism:pellet_plutonium')
    event.add('c:pellets/plutonium', 'stellaris:plutonium_ingot')

    event.add("c:hidden_from_recipe_viewers", [
        'mekanismadditions:walkie_talkie',
        'extendedae:fishbig',
        'extendedae:mddyue',
        'stellaris:steel_pickaxe',
        'stellaris:steel_axe',
        'stellaris:steel_hoe',
        'stellaris:steel_shovel',
        'stellaris:steel_sword',
        'advancedperipherals:redstone_integrator',
        'advancedperipherals:colony_integrator',
        'advancedperipherals:computer_tool',
        'advancedperipherals:weak_automata_core',
        'advancedperipherals:husbandry_automata_core',
        'advancedperipherals:end_automata_core',
        'advancedperipherals:overpowered_weak_automata_core',
        'advancedperipherals:overpowered_husbandry_automata_core',
        'advancedperipherals:overpowered_end_automata_core',
        'toms_peripherals:redstone_port',
        'stellaris:water_seperator',
        'stellaris:fuel_refinery',
        'stellaris:water_pump',
        'stellaris:pumpjack',
        'stellaris:pumpjack_drill',
        'stellaris:oil_finder',
        'stellaris:oil_finder_module',
        'stellaris:water_separator',
        'stellaris:cable'
    ])
})
