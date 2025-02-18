ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:rotary",
        "chemical_input": {
            "amount": 1,
            "chemical": "mekanism:carbon"
        },
        "fluid_input": {
            "amount": 1,
            "fluid": "stellaris:oil"
        },
        "chemical_output": {
            "amount": 1,
            "id": "mekanism:carbon"
        },
        "fluid_output": {
            "amount": 1,
            "id": "stellaris:oil"
        }
    })
})