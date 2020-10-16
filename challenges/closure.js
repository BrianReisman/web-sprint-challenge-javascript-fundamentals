// ==== Closures ==== 
/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */
const external = "I'm outside the function";

function myFunction() {
  // console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    // console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*in js you cannot reach into a function to access a variable but you can reach outside into the global scope, or a scope larger than where the variable is being used.*/

/* Task 2: Counter */
/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param){
  let counter = 0;

  for(let i = 0; i <= param; i++){
    counter = counter + i;  
  }
  return counter;
}
// console.log(summation(4)) //pass

//how do I break 2 down into 1 and 2 ? 2 = 2 so I can do something param# of times.
//perhaps I start my count at 4 and --
