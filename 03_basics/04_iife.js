// Immediately Invoked Function Expressions (IIFE)
//  to remove problems caused by global population

//  named iife
(function chai() {
  console.log("DB CONNECTED");
})();

//  simple/unnamed iife
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("rahul");

//  ; is important
