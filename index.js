var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
var cheeses = ['cheddar', 'gouda', 'camembert']



function dwarfRollCall(dwarves) {
	var listDwarves = "";
	for(var i = 0; i < dwarves.length; i++) {
			listDwarves += (i+1 + ". " + dwarves[i] + " ");
	}
	return listDwarves;
}

function summonCaptainPlanet(planeteerCalls){
  var loudCalls = loudCalls.toUpperCase(x) + "!"
  return planeteerCalls.map(loudCalls)
}


function longPlaneteerCalls(words) {
	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}

 function findTheCheese (foods) {
   for(var i =0; i < foods.length; i++) {
     if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
         return foods[i];
       } 
    }
     if(foods[i] !== 'cheddar' || foods !== 'gouda' || foods !== 'camembert') {
       return 'no cheese!';
     } 
 }