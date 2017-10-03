// Cracking the Coding Interview
// 1.4

function palindromePermutation(string) {

    // Stores characters found in string and count of them
    var found = {};

    // Iterates through string and counts how many duplicate characters there are in found object
    for(var i = 0; i < string.length; i++) {
        // skips over spaces
        if(string[i] != " ") {
            if(found[string[i].toLowerCase()]) {
                found[string[i].toLowerCase()]++;
            } 
            else {
                found[string[i].toLowerCase()] = 1;
            }
        }
    }

    var odd = 0;

    // Checks all characters found in string and checks if there's an odd number of them
    for(var char in found) {
        if(found[char] % 2 === 1) {
            odd++;
        }
    }

    // If there are 1 or less odd characters, the string is a palindrome permutation
    if(odd <= 1) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromePermutation("tact coa"))