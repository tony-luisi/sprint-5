function answer1() {

	var hashes = "";
	for(var i = 0; i < 7; i++) {
		hashes += "#";
		console.log(hashes);

	}

}

function answer2() {

	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log("FizzBuzz");

		} else if (i % 3 == 0) {
			console.log("Fizz");	
		} else if (i % 5 == 0) {
			console.log("Buzz");

		} else {
			console.log(i);
		}
		
	}

}

function answer3() {

	var gridSize = 64;
	var grid = "";

	for (var i = 1; i <= gridSize; i++) {

		if (i % 2 == 0) {

			var innerGridCount = 1;
			while (innerGridCount <= gridSize) {
				if(innerGridCount % 2 == 0) {
					grid += "#";
				} else {
					grid += " ";
				}
				innerGridCount++;
			}
			grid += "\n";

		} else {

			var innerGridCount = 1;
			while (innerGridCount <= gridSize) {
				if(innerGridCount % 2 == 0) {
					grid += " ";
				} else {
					grid += "#";
				}
				innerGridCount++;
			}
			grid += "\n";

		}


	}

	console.log(grid);
}
