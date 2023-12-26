/**
 * console.log()
 * Used to log the output to the console, we can put any type inside the log(), be it a string, 
 * a number an object or an array.
 * console.error()
 * Used to log error message to the console.
 * console.clear()
 * used to clear the console
 * console.table()
 * It's allows us to generate a table inside the console
 * console.time()
 * it's used to track how long does an operation takes to execute
 * console.count()
 * It's used to count the number that the function hit by this counting method.
 * console.assert()
 * 
*/

// console.log("Hello Dear"); 
// console.log(123); 
// console.log(10 + 20); 
// console.log(new Date()); 

// console.error("This is a simple error occurred during the loading ")
// console.clear()

// console.table({"a":1, "b":2, "c":3}); 


// console.time('trackLoop'); 
// for (let i = 0; i < 10000; i++) {} 
// console.timeEnd("trackLoop")

for (let i = 0; i < 5; i++){
    console.count("Counted Number"); 
}