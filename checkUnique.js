// Given a string, check to see if all characters are unique
// store => true
// sass => false


function checkUnique(string) {

    var seen = {};

    for(var i = 0; i < string.length; i++) {
        if(seen[string[i]]) {
            console.log("Not Unique");
            return false;
        }
        else {
            seen[string[i]] = true;
        }
    }
    console.log("Unique");
    return true;
}


// function checkUnique(string) {

//     var seen = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false);

//     for(var i = 0; i < string.length; i++) {
//         if(seen[string[i].charCodeAt(0)]) {
//             console.log("Not Unique");
//             return false;
//         }
//         else {
//             seen[string[i].charCodeAt(0)] = true;
//         }
//     }
//     console.log("Unique");
//     return true;
// }

checkUnique("sass");