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

  //reinforced coal ore
  event.shaped('kubejs:reinforced_coal_ore', [
      'III',
      'IRI',
      'III'
    ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/coal',
  })

  //reinforced iron ore
  event.shaped('kubejs:reinforced_iron_ore', [
      'III',
      'IRI',
      'III'
    ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/iron',
  })

  //reinforced copper ore
  event.shaped('kubejs:reinforced_copper_ore', [
      'III',
      'IRI',
      'III'
    ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/copper',
  })

  //reinforced gold ore
  event.shaped('kubejs:reinforced_gold_ore', [
      'III',
      'IRI',
      'III'
    ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/gold',
  })

  //reinforced redstone ore
  event.shaped('kubejs:reinforced_redstone_ore', [
      'III',
      'IRI',
      'III'
    ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/redstone',
  })

  //reinforced emerald ore
  event.shaped('kubejs:reinforced_emerald_ore', [
      'III',
      'IRI',
      'III'
  ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/emerald',
  })

  //reinforced lapis ore
  event.shaped('kubejs:reinforced_lapis_ore', [
      'III',
      'IRI',
      'III'
  ], {
     R: 'minecraft:reinforced_deepslate',
     I: '#c:ores/lapis',
  })

  //reinforced diamond ore
  event.shaped('kubejs:reinforced_diamond_ore', [
      'III',
      'IRI',
      'III'
  ], {
     R: 'minecraft:reinforced_deepslate',
     I: '#c:ores/diamond',
  })

  //reinforced quartz ore
  event.shaped('kubejs:reinforced_quartz_ore', [
      'III',
      'IRI',
      'III'
  ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/quartz',
  })

  //reinforced ancient debris
  event.shaped('kubejs:reinforced_ancient_debris', [
      'III',
      'IRI',
      'III'
  ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/netherite_scrap',
  })

  //reinforced tin ore
  event.shaped('kubejs:reinforced_tin_ore', [
      'III',
      'IRI',
      'III'
  ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/tin',
  })

  //reinforced osmium ore
  event.shaped('kubejs:reinforced_osmium_ore', [
      'III',
      'IRI',
      'III'
  ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/osmium',
  })

  //reinforced uranium ore
  event.shaped('kubejs:reinforced_uranium_ore', [
      'III',
      'IRI',
      'III'
  ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/uranium',
  })

  //reinforced fluorite ore
  event.shaped('kubejs:reinforced_fluorite_ore', [
      'III',
      'IRI',
      'III'
  ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/fluorite',
  })

  //reinforced lead ore
  event.shaped('kubejs:reinforced_lead_ore', [
      'III',
      'IRI',
      'III'
  ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/lead',
  })

  //reinforced steel ore
  event.shaped('kubejs:reinforced_steel_ore', [
      'III',
      'IRI',
      'III'
  ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/steel',
  })

  //reinforced plutonium ore
  event.shaped('kubejs:reinforced_plutonium_ore', [
      'III',
      'IRI',
      'III'
    ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/plutonium',
  })

  //reinforced neptunium ore
  event.shaped('kubejs:reinforced_neptunium_ore', [
      'III',
      'IRI',
      'III'
    ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/neptunium',
  })

  //reinforced desh ore
  event.shaped('kubejs:reinforced_desh_ore', [
      'III',
      'IRI',
      'III'
    ], {
      R: 'minecraft:reinforced_deepslate',
      I: '#c:ores/desh',
  })

  //reinforced zinc
  event.shaped('kubejs:reinforced_zinc_ore', [
      'ZZZ',
      'ZRZ',
      'ZZZ'
  ], {
      R: 'minecraft:reinforced_deepslate',
      Z: '#c:ores/zinc',
  })

  //reinforced glowstone
  event.shaped('kubejs:reinforced_glowstone', [
      'GGG',
      'GRG',
      'GGG'
  ], {
      R: 'minecraft:reinforced_deepslate',
      G: 'minecraft:glowstone',
  })

  //block extractor
  event.shaped('blockextractor:extractor_block', [
      'SSS',
      'SCS',
      'IDI'
  ], {
      S: 'minecraft:smooth_stone',
      C: 'mekanism:steel_casing',
      D: 'minecraft:diamond',
      I: 'minecraft:iron_block',
  })

  //reinforced deepslate
  event.shaped('minecraft:reinforced_deepslate', [
    'NNN',
    'NDN',
    'NNN'
  ], {
    N: 'minecraft:netherite_ingot',
    D: 'minecraft:deepslate',
  })

  //mek cardboard box
  event.shaped('mekanism:cardboard_box', [
    ' C ',
    'C C',
    ' C '
  ], {
    C: 'create:cardboard'
  })

})
