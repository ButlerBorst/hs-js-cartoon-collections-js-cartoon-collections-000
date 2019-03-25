<<<<<<< HEAD
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
  var loudCalls = [];
  for(var i = 0; i < planeteerCalls.length; i++){
    loudCalls.push(`${planeteerCalls[i]}`.toUpperCase() + "!")
=======
 var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
 var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
 
 
 "why local vs global variables"

function dwarfRollCall(dwarves) {
  var dwarfStr = "";
  dwarves.forEach(function(name, idx){
  	dwarfStr += (idx+1 + ". " + name + " ");
  })
  return dwarfStr;
}

function dwarfRollCall(dwarves) {
  let listDwarves = []
  for(let i = 0; i < dwarves.length; i++){
    
    listDwarves.push(`${i+1}. ${dwarves[i]} `)
    
  }
  return listDwarves.join(""); //The join() method joins all elements of an array (or an array-like object) into a string and returns this string.
}






function summonCaptainPlanet(planeteerCalls){
 return planeteerCalls.map(planeteerCalls.toUpperCase()+"!")
}



function summonCaptainPlanet(planeteerCalls){
  let loudCalls = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    loudCalls.push(planeteerCalls.toUpperCase() + "!")
>>>>>>> a203fca290edcdaff6c183e04ca1c91f832600c5
  }
  return loudCalls
}

<<<<<<< HEAD
=======
"can i rewrite map so it only has one return?"
"map is likely the best solution"
"can i use a for loop instead?"
"which is better?"
"can i use a foreach instead"



>>>>>>> a203fca290edcdaff6c183e04ca1c91f832600c5
function longPlaneteerCalls(words) {
	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
<<<<<<< HEAD
	}
	return false;
}

=======
		else return false
	}
}



>>>>>>> a203fca290edcdaff6c183e04ca1c91f832600c5
 function findTheCheese (foods) {
   for(var i =0; i < foods.length; i++) {
     if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
         return foods[i];
       } 
    }
     if(foods[i] !== 'cheddar' || foods !== 'gouda' || foods !== 'camembert') {
       return 'no cheese!';
     } 
<<<<<<< HEAD
 }
=======
 }
	


>>>>>>> a203fca290edcdaff6c183e04ca1c91f832600c5
