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

    event.custom({
        "type": "mekanism:rotary",
        "chemical_input": {
          "amount": 1,
          "chemical": "mekanism:oxygen"
        },
        "chemical_output": {
          "amount": 1,
          "id": "mekanism:oxygen"
        },
        "fluid_input": {
          "amount": 1,
          "tag": "c:oxygen"
        },
        "fluid_output": {
          "amount": 1,
          "id": "stellaris:oxygen"
        }
    })

    event.custom({
        "type": "mekanism:rotary",
        "chemical_input": {
          "amount": 1,
          "chemical": "mekanism:hydrogen"
        },
        "chemical_output": {
          "amount": 1,
          "id": "mekanism:hydrogen"
        },
        "fluid_input": {
          "amount": 1,
          "tag": "c:hydrogen"
        },
        "fluid_output": {
          "amount": 1,
          "id": "stellaris:hydrogen"
        }
      })


      event.custom({
        "type": "mekanism:rotary",
        "chemical_input": {
          "amount": 1,
          "chemical": "mekanism:spent_nuclear_waste"
        },
        "chemical_output": {
          "amount": 1,
          "id": "mekanism:spent_nuclear_waste"
        },
        "fluid_input": {
          "amount": 1,
          "fluid": "kubejs:liquid_spent_nuclear_waste"
        },
        "fluid_output": {
          "amount": 1,
          "id": "kubejs:liquid_spent_nuclear_waste"
        }
      })
})