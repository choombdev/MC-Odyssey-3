// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    event.shaped('ftbquests:screen_1', [
        'SSS',
        'S S',
        'SBS'
    ], {
        S: 'minecraft:stone',
        B: 'minecraft:stone_button'
    })
    event.shapeless('ftbquests:screen_3', ['ftbquests:screen_1','ftbquests:screen_1','ftbquests:screen_1'])
    event.shapeless('ftbquests:screen_5', ['ftbquests:screen_3','ftbquests:screen_1','ftbquests:screen_1'])
    event.shapeless('ftbquests:screen_7', ['ftbquests:screen_5','ftbquests:screen_1','ftbquests:screen_1'])


})

