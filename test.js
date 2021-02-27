var rd = require("./randomdata");

//Test Random Int Picker
console.log("Random Numbers:");
console.log(rd.pickInt(0, 10));
console.log(rd.pickInt(0, 1000));
console.log(rd.pickInt());

//Test Random Bool Picker
console.log("Random Bools:");
console.log(rd.pickBool());
console.log(rd.pickBool(50));
console.log(rd.pickBool(80));

//Test Random Age Picker
console.log("Random Ages:")
console.log(rd.pickAge("senior"));
console.log(rd.pickAge("adult"));

//Test Random IP Picker
console.log("Random IPs:");
console.log(rd.pickIP());
console.log(rd.pickIP());

//Test Coin Flip
console.log("Coin Flips:");
console.log(rd.flipCoin());
console.log(rd.flipCoin());
