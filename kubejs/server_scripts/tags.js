ServerEvents.tags('item', event => {
    event.add('c:ingots/infinity', 'kubejs:infinity_alloy')
    event.add('c:ingots', 'kubejs:infinity_alloy')
    event.add('c:storage_blocks/antimatter', 'kubejs:antimatter_block')
    event.add('c:storage_blocks', 'kubejs:antimatter_block')

    event.add('c:ingots/plutonium', 'mekanism:pellet_plutonium')
    event.add('c:pellets/plutonium', 'stellaris:plutonium_ingot')

    event.add('create:pulpifiable', 'mekanism:sawdust')
})

ServerEvents.tags('fluid', event => {
    event.add("c:hidden_from_recipe_viewers", 'mekanism:oxygen')
    event.add("c:hidden_from_recipe_viewers", 'mekanism:hydrogen')

    event.add("c:oxygen", 'stellaris:oxygen')
    event.add("c:hydrogen", 'stellaris:hydrogen')
})