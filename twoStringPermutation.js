function CheckPermutation(string1, string2) {

    var seenChars = {};

    if(string1.length != string2.length) {
        console.log("Fast Fail");
        return false;
    }

    for(var index = 0; index < string1.length; index++) {
        if(!seenChars[string1[index]]) {
            seenChars[string1[index]] += 1;
        }
        else {
            seenChars[string1[index]] = 1;
        }
    }

    for(var index = 0; index < string2.length; index++) {
        if(seenChars[string2[index]]) {
            seenChars[string2[index]] -= 1;
        }
        else {
            console.log("Fail on dictionary check")
            console.log(seenChars);
            return false;
        }
    }
}

console.log(CheckPermutation("pig", "gip"));