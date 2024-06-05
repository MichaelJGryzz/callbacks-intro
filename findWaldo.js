// Copied from Compass "Functions As Objects" Assignment
// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach(function(name, index) { // Refactor function to use forEach() method instead of for loop below
  //for (let i = 0; i < names.length; i++) {
    //let name = names[i];
    if (name === "Waldo") {
      found(index); // execute callback with index
    }
  });
};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);