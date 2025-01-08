ServerEvents.recipes(event => {
  //lava cell
  event.shaped('kubejs:lava_cell', [
      'QLQ',
      'LCL',
      'NNN'
    ], {
      Q: 'ae2:quartz_glass',
      L: 'minecraft:lava_bucket',
      C: 'ae2:cell_component_16k',
      N: 'minecraft:netherite_ingot',
  })

  //antimatter block from pellet
  event.shapeless('kubejs:antimatter_block',[
    '9x mekanism:pellet_antimatter'
  ])

  //antimatter pellet from block
  event.shapeless('9x mekanism:pellet_antimatter',[
    'kubejs:antimatter_block'
  ])

  //computercraft advanced monitor
  event.shapeless('computercraft:monitor_advanced',[
    '2x minecraft:gold_ingot',
    'computercraft:monitor_normal'
  ])

  //creative storage cell
  event.shapeless('ae2:creative_storage_cell',[
    'kubejs:infinity_alloy',
    'megacells:item_storage_cell_256m'
  ])

  //creative experience cell
  event.shapeless('appex:creative_experience_cell',[
    'kubejs:infinity_alloy',
    'appex:experience_storage_cell_256k'
  ])

  //creative energy cell
  event.shapeless('ae2:creative_energy_cell',[
    'kubejs:infinity_alloy',
    'megacells:mega_energy_cell'
  ])

  //creative energy cube
  event.shapeless('mekanism:creative_energy_cube[mekanism:energy={energy_containers:[L;9223372036854775807L]}]',[
    'kubejs:infinity_alloy',
    'mekanism:ultimate_energy_cube[mekanism:energy={energy_containers:[L;256000000L]}]'
  ])

  //experience acceptor
  event.shaped('appex:experience_acceptor', [
      'IQI',
      'QEQ',
      'IQI'
    ], {
      Q: 'ae2:quartz_glass',
      I: 'minecraft:iron_ingot',
      E: 'minecraft:experience_bottle',
  })

  //experience converter
  event.shaped('appex:experience_converter', [
      'GGG',
      'GEG',
      'GGG'
    ], {
      G: 'minecraft:glass',
      E: 'minecraft:experience_bottle',
  })

})