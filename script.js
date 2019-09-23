console.log("My game rocks!");

var number = 10;

console.log("\n\nThe number is: " + number);

// incrementing by reassigning 
// the variable to be 1 more than itself
number = number + 1;

// let's add a ++ style increment for fun!
number++;

// let's use += style increment for being thorough
number += 2;

// let's introduce the comparison operator
if ( number == 11) {

  console.log("The number is equivalent to eleven (" + number + ")");

} else {

  console.log("The number is not eleven...because it is actually " + number );
}

// expected result should be 
