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
  var loudCalls = planeteerCalls.map(elements => elements.toUpperCase() + "!")
  return loudCalls
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
   let cheese = foods.find(element=> element== 'cheddar' || 'gouda' || 'camembert')
       if (cheese =='cheddar' || 'gouda || "camembert'){
         return cheese;
       }
  else return 'no cheese!'
}