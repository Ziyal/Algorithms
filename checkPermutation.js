// function checkUnique(string) {

//     var seen = {};

//     for(var i = 0; i < string.length; i++) {
//         if(seen[string[i]]) {
//             console.log("Not Unique");
//             return "Not Unique";
//         }
//         else {
//             seen[string[i]] = true;
//         }
//     }
//     console.log("Unique");
//     return "Unique";
// }


function checkUnique(string) {

    var seen = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false);

    for(var i = 0; i < string.length; i++) {
        if(seen[string[i].charCodeAt(0)]) {
            console.log("Not Unique");
            return false;
        }
        else {
            seen[string[i].charCodeAt(0)] = true;
        }
    }
    console.log("Unique");
    return true;
}
checkUnique("store");