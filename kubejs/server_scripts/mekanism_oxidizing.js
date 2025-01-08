ServerEvents.recipes(event => {

    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
            "count": 1,
            "item": "kubejs:antimatter_block"
        },
        "output": {
            "amount": 9000,
            "id": "mekanism:antimatter"
        }
    })

})