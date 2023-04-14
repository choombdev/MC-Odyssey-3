// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

// Saplings
var SaplingInputs = ['almond', 'apricot', 'avocado', 'banana', 'breadfruit', 'candlenut', 'cashew', 'cherry', 'chestnut', 'cinnamon', 'coconut', 'date', 'dragonfruit', 'durian', 'fig', 'gooseberry', 'grapefruit', 'guava', 'hazelnut', 'jackfruit', 'lime', 'lychee', 'mango', 'nutmeg', 'olive', 'orange', 'papaya', 'passionfruit', 'pawpaw', 'peach', 'pear', 'pecan', 'peppercorn', 'persimmon', 'pistachio', 'plum', 'pomegranate', 'rambutan', 'soursop', 'starfruit', 'tamarind', 'vanillabean', 'walnut']
SaplingInputs.forEach(input => {
    event.recipes.immersiveengineeringCloche(['3x pamhc2trees:'+input+'item'], 'pamhc2trees:'+input+'_sapling', 'minecraft:dirt', {type:'generic',block:"pamhc2trees:"+input})
})

// Seeds 
var SeedInputs = ['agave', 'amaranth', 'arrowroot', 'artichoke', 'asparagus', 'barley', 'bean', 'bellpepper', 'blackberry', 'blueberry', 'broccoli', 'brusselsprout', 'cabbage', 'cactusfruit', 'candleberry', 'cantaloupe', 'cassava', 'cauliflower', 'celery', 'chickpea', 'chilipepper', 'coffeebean', 'corn', 'cotton', 'cranberry', 'cucumber', 'eggplant', 'elderberry', 'flax', 'garlic', 'ginger', 'grape', 'greengrape', 'huckleberry', 'jicama', 'juniperberry', 'jute', 'kale', 'kenaf', 'kiwi', 'kohlrabi', 'leek', 'lentil', 'lettuce', 'millet', 'mulberry', 'mustardseeds', 'oats', 'okra', 'onion', 'parsnip', 'peanut', 'peas', 'pineapple', 'quinoa', 'radish', 'raspberry', 'rhubarb', 'rice', 'rutabaga', 'rye', 'scallion', 'sesameseeds', 'sisal', 'soybean', 'spiceleaf', 'spinach', 'strawberry', 'sweetpotato', 'taro', 'tealeaf', 'tomatillo', 'tomato', 'turnip', 'waterchestnut', 'whitemushroom', 'wintersquash', 'zucchini']
SeedInputs.forEach(input =>{
    event.recipes.immersiveengineeringCloche(['2x pamhc2crops:'+input+'item'], 'pamhc2crops:'+input+'seeditem', 'minecraft:dirt', {type:'crop',block:"pamhc2crops:pam"+input+"crop"})
})

// Special
event.recipes.immersiveengineeringCloche(['3x minecraft:apple'], 'pamhc2trees:apple_sapling', 'minecraft:dirt', {type:'generic',block:"pamhc2trees:apple"})
event.recipes.immersiveengineeringCloche(['3x minecraft:cobweb'], 'pamhc2trees:spiderweb_sapling', 'minecraft:dirt', {type:'generic',block:"pamhc2trees:spiderweb"})
event.recipes.immersiveengineeringCloche(['3x minecraft:paper'], 'pamhc2trees:paperbark_sapling', 'minecraft:dirt', {type:'generic',block:"pamhc2trees:paperbark"})


})