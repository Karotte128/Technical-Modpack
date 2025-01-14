ServerEvents.tags('item', event => {
    event.add('c:ingots/infinity', 'kubejs:infinity_alloy')
    event.add('c:ingots', 'kubejs:infinity_alloy')
    event.add('c:storage_blocks/antimatter', 'kubejs:antimatter_block')
    event.add('c:storage_blocks', 'kubejs:antimatter_block')

    event.add('c:storage_blocks', 'stellaris:uranium_block')
    event.add('c:storage_blocks/uranium', 'stellaris:uranium_block')
    event.add('c:ingots/plutonium', 'mekanism:pellet_plutonium')
    event.add('c:pellets/plutonium', 'stellaris:plutonium_ingot')
    event.add('c:ores/uranium', 'stellaris:mercury_uranium_ore')
    event.add('c:ores/iron', 'stellaris:mercury_iron_ore')
    event.add('c:ores/iron', 'stellaris:moon_iron_ore')
    event.add('c:ores/iron', 'stellaris:mars_iron_ore')
    event.add('c:ores/diamond', 'stellaris:mars_diamond_ore')
    event.add('c:ores/diamond', 'stellaris:venus_diamond_ore')
    event.add('c:ores/gold', 'stellaris:venus_gold_ore')
    event.add('c:ores/coal', 'stellaris:venus_coal_ore')
    event.add('c:ores/steel', 'stellaris:deepslate_steel_ore')
    event.add('c:ores/steel', 'stellaris:steel_ore')
    event.add('c:ores/steel', 'stellaris:moon_steel_ore')
    event.add('c:ores/plutonium', 'stellaris:mars_plutonium_ore')
    event.add('c:ores/neptunium', 'stellaris:venus_neptunium_ore')
    event.add('c:ores/desh', 'stellaris:moon_desh_ore')
    event.add('c:raw_blocks/uranium', 'stellaris:raw_uranium_block')
    event.add('c:raw_blocks', 'stellaris:raw_uranium_block')
    event.add('c:raw_blocks/steel', 'stellaris:raw_steel_block')
    event.add('c:raw_blocks', 'stellaris:raw_steel_block')
    event.add('c:storage_blocks', 'stellaris:raw_steel_block')
    event.add('c:raw_blocks/desh', 'stellaris:raw_desh_block')
    event.add('c:raw_blocks', 'stellaris:raw_desh_block')
    event.add('c:storage_blocks', 'stellaris:raw_desh_block')
    event.add('c:storage_blocks/desh', 'stellaris:raw_desh_block')

    event.add("c:hidden_from_recipe_viewers", [
        'mekanismadditions:walkie_talkie',
        'extendedae:fishbig',
        'extendedae:mddyue'
    ])

    event.remove('c:raw_materials', 'stellaris:raw_uranium_block')
    event.remove('c:raw_materials', 'stellaris:raw_steel_block')
    event.remove('c:raw_materials', 'stellaris:raw_desh_block')
})
