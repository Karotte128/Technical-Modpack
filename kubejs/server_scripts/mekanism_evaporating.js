ServerEvents.recipes(event => {

    event.custom({
        "type": "mekanism:evaporating",
        "input": {
            "amount": 1,
            "fluid": "stellaris:oil"
        },
        "output": {
            "amount": 1,
            "id": "stellaris:fuel"
        }
    })

})