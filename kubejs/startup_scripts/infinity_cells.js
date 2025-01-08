StartupEvents.registry('item', event => {
    event.create('lava_cell', 'custom_infinity_cell')
         .texture('kubejs:item/item_infinity_cell_lava')
	 .fluidType('minecraft:lava')
	 .cellModel('kubejs:block/drive/lava_cell');
})