/*Randomiser, I can customise the range when I call it*/
function randNum(low,high){
    return Math.floor(Math.random() * (high - low) + low);
}

let facts = [
    "Over the 20th century, the global sea level rose by about 15-20 cm (6-8 inches). However, in the 21st century, the rate of rise has nearly doubled, with levels increasing about 3.6 mm per year on average.",
    "About 40% of recent sea level rise is due to thermal expansion. As the ocean warms, the water molecules expand, taking up more space and raising sea levels.",
    "Melting glaciers and ice sheets, particularly in Greenland and Antarctica, are responsible for more than 50% of the current sea level rise. Greenland alone is losing about 280 billion tons of ice each year.",
    "Low-lying island nations like Kiribati, the Maldives, and Tuvalu are at high risk of becoming uninhabitable due to rising seas. Some of these nations are already planning to relocate entire populations.",
    "Rising seas and encroaching saltwater are killing coastal forests, leaving behind eerie 'ghost forests' of dead trees in places like the Atlantic coast of the U.S.",
    "Rising seas also increase the risk of coastal erosion, stronger storm surges, and flooding, which can amplify the damage caused by hurricanes and typhoons."
  ];

/*Random number between 0 and 6, chooses corresponding fact in array and displays it*/
function randFact(){
    document.getElementById("didYouKnow").innerHTML = facts[randNum(0,6)];
}