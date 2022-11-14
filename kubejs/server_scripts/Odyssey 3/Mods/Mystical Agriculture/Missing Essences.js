// This script was made by choombdev for Odyssey 3", " reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{
    // Graphite
      event.shaped('4x biggerreactors:graphite_ingot', [
        'AAA',
        'A A',
        'AAA'
        ], {
          A: 'mysticalagriculture:graphite_essence'
        })
          // Sulfur - Thermal
          event.shaped('8x thermal:sulfur_dust', [
            '   ',
            '   ',
            'AAA'
            ], {
              A: 'mysticalagriculture:sulfur_essence'
            })
  })

