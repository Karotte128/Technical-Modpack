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
})