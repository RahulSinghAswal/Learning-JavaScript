const accountId = 46753;
let accountEmail = "xyz@gmail.com";
var accountPassword = "1234567";
accountCity = "Dehradun";


/*
it is possible to declare variables without const, var, and let
but this is method is preferable

*/

let accountState;

// accountId = 7; 
// const variables are immuntable

accountEmail = "abc@gmailc.com";
accountPassword = "987654";
accountCity = "Nainital";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
    prefer not to use var 
    because of issue in  block scope and functional scope

*/

