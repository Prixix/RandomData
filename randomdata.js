exports.test = function(test) {
    console.log(test)
}

exports.pickInt = function(min = 0, max = 100) {
    return Math.round(Math.random() * (max - min) + min);
}

exports.pickBool = function(precentage = 50) {
    if(typeof precentage !== "number") throw TypeError("A number is required!");

    return Math.random() <= (precentage / 100);
}

exports.pickAge = function(type = "adult") {
    if(type == "child") return this.pickInt(0, 12);
    if(type == "teen") return this.pickInt(13, 19);
    if(type == "adult") return this.pickInt(20, 59);
    if(type == "senior") return this.pickInt(60, 110);
}

exports.pickIP = function() {
    return (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
}

exports.flipCoin = function() {
    if((Math.floor(Math.random() * 2)) == 0) return "Heads";
    return "Tails";
}

exports.pickTime = function(type = 'hour') {
    switch(type) {
        case 'hour':
            return this.pickInt(1, 25);
        case 'minute':
            return this.pickInt(0, 60);
        default:
            return;
    }
}

exports.pickHash = function() {
    return [...Array(32)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
}