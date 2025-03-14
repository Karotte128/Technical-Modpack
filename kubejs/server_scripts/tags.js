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
        'stellaris:steel_pickaxe',
        'stellaris:steel_axe',
        'stellaris:steel_hoe',
        'stellaris:steel_shovel',
        'stellaris:steel_sword',
        'stellaris:water_separator',
        'stellaris:fuel_refinery',
        'stellaris:water_pump',
        'stellaris:pumpjack',
        'stellaris:pumpjack_drill',
        'stellaris:oil_finder',
        'stellaris:oil_finder_module',
        'stellaris:cable',
        'stellaris:cable_t2',
        'stellaris:cable_t3',
        'stellaris:pipe_t1',
        'stellaris:pipe_t2',
        'stellaris:pipe_t3',
        'guideme:guide',
        'blockextractor:example_item',
        'blockextractor:example_block',
        'create:copycat_panel',
        'create:copycat_step'
    ])
})

ServerEvents.tags('fluid', event => {
    event.add("c:hidden_from_recipe_viewers", 'mekanism:oxygen')
    event.add("c:hidden_from_recipe_viewers", 'mekanism:hydrogen')

    event.add("c:oxygen", 'stellaris:oxygen')
    event.add("c:hydrogen", 'stellaris:hydrogen')
})