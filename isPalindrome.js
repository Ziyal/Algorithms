// Create a function that checks wether a string is a palindrome
// Hannah => true
// racecar => true
// stars => false

function isPalindrome(string) {

    var end = string.length-1;

    for(var i = 0; i < string.length/2; i++) {
        if(string[i].toLowerCase() === string[end].toLowerCase()) {
            end--;
        } else {
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
}

isPalindrome("Hannah");