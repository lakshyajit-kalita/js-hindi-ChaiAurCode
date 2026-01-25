const accountId = 144335
let accountEmail = "hitesh@123.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
// accountId = 2   // not allowed

accountEmail = "hc@hc.com"
accountPassword = 1212123
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block of scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])