// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("recipe", 5, function(i, recipe){
		var ingredientLists = [["salt", "pepper", "some spices", "meat"], ["spice1", "spice2", "spice3"], ["meat", "potatoes", "green beans"]];
		var directionsList = ["grill fish", "make ice", "cut onions"];
		return {
			name: "recipe "+i,
			ingredients: $.fixture.rand(ingredientLists, 1)[0],
			directions: $.fixture.rand( directionsList , 1)[0]
		}
	})
})