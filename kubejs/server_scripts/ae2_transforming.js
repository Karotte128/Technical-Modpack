ServerEvents.recipes(event => {
    //flawless budding certus (in-world transformation)
    event.custom(
        {
            "type": "ae2:transform",
            "ingredients": [
            {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            {
                "item": "ae2:flawed_budding_quartz"
            },
            {
                "item": "kubejs:infinity_alloy"
            }
            ],
            "result": {
                "count": 1,
                "id": "ae2:flawless_budding_quartz"
            }
        }
    )
})