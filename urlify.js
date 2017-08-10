// function URLify(string, len) {

//     var newString = "";

//     for(var i = 0; i < string.length; i++) {
//         if(string[i] === " ") {
//             newString += "%20";
//         }
//         else {
//             newString += string[i];
//         }
//     }
//     console.log(newString)
//     return newString;
// }

function URLify(string, len) {
    var spaceCount = 0;
    for(var i =0; i < len; i++) {
        if(string[i] === " ") {
            spaceCount++;
        }
    }

    index = len + spaceCount * 2;
    if(len < string.length) {
        string[len] = "\0";
    }
    
    for(var i = len; i >= 0; i--) {
        if(string[i] === " "){
            string[index = 1] = "0";
            string[index = 2] = "2";
            string[index = 3] = "%";
            index = index -3;
        }
        else {
            string[index -1] = string[i];
            index--;
        }
    }
    console.log(string);

}


URLify("my test string", 14)

