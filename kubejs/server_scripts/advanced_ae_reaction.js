ServerEvents.recipes(event => {
    //flawless budding certus (reaction chamber)
    event.custom(
        {
            "type": "advanced_ae:reaction",
            "input_energy": 300000,
            "input_fluid": {
                "amount": 1000,
                "ingredient": {
                    "fluid": "minecraft:water"
                }
            },
            "input_items": [
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "ae2:charged_certus_quartz_crystal"
                    }
                },
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "ae2:flawed_budding_quartz"
                    }
                },
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "kubejs:infinity_alloy"
                    }
                }
            ],
            "output": {
                "#": 8,
                "#t": "ae2:i",
                "id": "ae2:flawless_budding_quartz"
            }
        }
    )

    //infinity alloy
    event.custom(
        {
            "type": "advanced_ae:reaction",
            "input_energy": 10000000,
            "input_fluid": {
                "amount": 10000,
                "ingredient": {
                 "fluid": "minecraft:lava"
                }
            },
            "input_items": [
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "mekanism:teleportation_core"
                    }
                },
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "advanced_ae:quantum_alloy_plate"
                    }
                },
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "kubejs:antimatter_block"
                    }
                },
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "extendedae:entro_block"
                    }
                },
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "stellaris:plutonium_block"
                    }
                },
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "stellaris:neptunium_block"
                    }
                },
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "minecraft:netherite_ingot"
                    }
                },
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "ae2:charged_certus_quartz_crystal"
                    }
                },
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "appflux:charged_redstone_block"
                    }
                }
            ],
            "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": "kubejs:infinity_alloy"
            }
        }
    )

    //mek -> stellaris oxygen
    event.custom(
        {
            "type": "advanced_ae:reaction",
            "input_energy": 10000,
            "input_fluid": {
                "amount": 1000,
                "ingredient": {
                    "fluid": "mekanism:oxygen"
                }
            },
            "input_items": [],
            "output": {
            "#": 1000,
            "#t": "ae2:f",
            "id": "stellaris:oxygen"
            }
        }
    )

    //stellaris -> mek oxygen
    /* event.custom(
        {
            "type": "advanced_ae:reaction",
            "input_energy": 10000,
            "input_fluid": {
                "amount": 1000,
                "ingredient": {
                    "fluid": "stellaris:oxygen"
                }
            },
            "input_items": [],
            "output": {
            "#": 1000,
            "#t": "ae2:f",
            "id": "mekanism:oxygen"
            }
        }
    ) */

    //mek -> stellaris hydrogen
    event.custom(
        {
            "type": "advanced_ae:reaction",
            "input_energy": 10000,
            "input_fluid": {
                "amount": 1000,
                "ingredient": {
                    "fluid": "mekanism:hydrogen"
                }
            },
            "input_items": [],
            "output": {
            "#": 1000,
            "#t": "ae2:f",
            "id": "stellaris:hydrogen"
            }
        }
    )

    //stellaris -> mek hydrogen
    /* event.custom(
        {
            "type": "advanced_ae:reaction",
            "input_energy": 10000,
            "input_fluid": {
                "amount": 1000,
                "ingredient": {
                    "fluid": "stellaris:hydrogen"
                }
            },
            "input_items": [],
            "output": {
            "#": 1000,
            "#t": "ae2:f",
            "id": "mekanism:hydrogen"
            }
        }
    ) */

    //fill big oxygen tank
    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 10000,
        "input_fluid": {
            "amount": 10800,
            "ingredient": {
                "fluid": "stellaris:oxygen"
            }
        },
        "input_items": [
            {
            "ingredient": {
                "item": "stellaris:big_oxygen_tank"
            }
            }
        ],
        "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": "stellaris:big_oxygen_tank",
            "components": {
              "stellaris:stored_oxygen": {"amount":10800,"capacity":10800}
            }
        }
    })

    //fill oxygen tank
    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 10000,
        "input_fluid": {
            "amount": 3600,
            "ingredient": {
                "fluid": "stellaris:oxygen"
            }
        },
        "input_items": [
            {
            "ingredient": {
                "item": "stellaris:oxygen_tank"
            }
            }
        ],
        "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": "stellaris:oxygen_tank",
            "components": {
              "stellaris:stored_oxygen": {"amount":3600,"capacity":3600}
            }
        }
    })

    //fill big oxygen tank
    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 10000,
        "input_fluid": {
            "amount": 10800,
            "ingredient": {
                "fluid": "stellaris:oxygen"
            }
        },
        "input_items": [
            {
            "ingredient": {
                "item": "stellaris:big_oxygen_tank"
            }
            }
        ],
        "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": "stellaris:big_oxygen_tank",
            "components": {
              "stellaris:stored_oxygen": {"amount":10800,"capacity":10800}
            }
        }
    })

    //fill space suit chestplate
    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 10000,
        "input_fluid": {
            "amount": 10800,
            "ingredient": {
                "fluid": "stellaris:oxygen"
            }
        },
        "input_items": [
            {
            "ingredient": {
                "item": "stellaris:space_suit_chestplate"
            }
            }
        ],
        "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": "stellaris:space_suit_chestplate",
            "components": {
              "stellaris:stored_oxygen": {"amount":10800,"capacity":10800}
            }
        }
    })
})