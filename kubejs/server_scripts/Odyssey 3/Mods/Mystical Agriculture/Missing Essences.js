// This script was made by choombdev for Odyssey 3", " reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{

  let materials = ["lumium", "steel", "lead", "iridium", "zinc", "invar", "enderium", "nickel", "constantan", "electrum", "silver", "platinum", "aluminum", "signalum", "brass", "tin"]
    materials.forEach(material => {
      event.shaped('4x alltheores:' + material + '_ingot', [
        'AAA',
        'A A',
        'AAA'
        ], {
          A: 'mysticalagriculture:' + material + '_essence'
        })
    })
  })

